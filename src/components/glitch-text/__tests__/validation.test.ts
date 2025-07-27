// 验证功能的单元测试

import { 
  InputValidator, 
  validateInput, 
  quickValidate, 
  autoFixInput,
  localizeError
} from '../validation';

describe('InputValidator', () => {
  let validator: InputValidator;

  beforeEach(() => {
    validator = new InputValidator();
  });

  describe('基础验证测试', () => {
    test('应该验证有效输入', () => {
      const result = validator.validate('Hello World');
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('应该验证空输入', () => {
      const result = validator.validate('');
      
      expect(result.isValid).toBe(true); // 默认允许空输入
      expect(result.errors).toHaveLength(0);
    });

    test('不允许空输入时应该报错', () => {
      const strictValidator = new InputValidator({ allowEmpty: false });
      const result = strictValidator.validate('');
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0].code).toBe('EMPTY_INPUT');
    });

    test('应该验证只有空白字符的输入', () => {
      const strictValidator = new InputValidator({ allowEmpty: false });
      const result = strictValidator.validate('   ');
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0].code).toBe('EMPTY_INPUT');
    });
  });

  describe('长度验证测试', () => {
    test('应该检测过长的文本', () => {
      const longText = 'a'.repeat(600);
      const result = validator.validate(longText);
      
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.code === 'TEXT_TOO_LONG')).toBe(true);
    });

    test('应该检测过短的文本', () => {
      const shortValidator = new InputValidator({ minLength: 5 });
      const result = shortValidator.validate('hi');
      
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.code === 'TEXT_TOO_SHORT')).toBe(true);
    });

    test('应该警告接近长度限制的文本', () => {
      const nearLimitText = 'a'.repeat(460); // 92% of 500
      const result = validator.validate(nearLimitText);
      
      expect(result.isValid).toBe(true);
      expect(result.warnings.some(w => w.code === 'APPROACHING_LENGTH_LIMIT')).toBe(true);
    });
  });

  describe('Unicode验证测试', () => {
    test('应该检测控制字符', () => {
      const textWithControl = 'Hello\x00World';
      const result = validator.validate(textWithControl);
      
      expect(result.warnings.some(w => w.code === 'CONTROL_CHARACTERS')).toBe(true);
    });

    test('应该检测零宽字符', () => {
      const textWithZeroWidth = 'Hello\u200BWorld';
      const result = validator.validate(textWithZeroWidth);
      
      expect(result.warnings.some(w => w.code === 'ZERO_WIDTH_CHARACTERS')).toBe(true);
    });

    test('应该检测双向文本字符', () => {
      const textWithBidi = 'Hello\u200EWorld';
      const result = validator.validate(textWithBidi);
      
      expect(result.warnings.some(w => w.code === 'BIDI_CHARACTERS')).toBe(true);
    });
  });

  describe('性能验证测试', () => {
    test('应该检测重复字符', () => {
      const repeatedText = 'aaaaaaaaaaaaa'; // 13个a
      const result = validator.validate(repeatedText);
      
      expect(result.warnings.some(w => w.code === 'REPEATED_CHARACTERS')).toBe(true);
    });

    test('应该检测高Unicode密度', () => {
      const highUnicodeText = 'à'.repeat(20) + 'normal'.repeat(10); // 高密度组合字符
      const result = validator.validate(highUnicodeText);
      
      expect(result.warnings.some(w => w.code === 'HIGH_UNICODE_DENSITY')).toBe(true);
    });

    test('应该检测多行文本', () => {
      const multiLineText = Array(12).fill('line').join('\n');
      const result = validator.validate(multiLineText);
      
      expect(result.warnings.some(w => w.code === 'MANY_LINES')).toBe(true);
    });
  });

  describe('内容质量验证测试', () => {
    test('应该检测只有空白字符', () => {
      const whitespaceText = '   \t\n  ';
      const result = validator.validate(whitespaceText);
      
      expect(result.warnings.some(w => w.code === 'ONLY_WHITESPACE')).toBe(true);
    });

    test('应该检测只有数字', () => {
      const numbersText = '123456789';
      const result = validator.validate(numbersText);
      
      expect(result.warnings.some(w => w.code === 'ONLY_NUMBERS')).toBe(true);
    });

    test('应该检测只有符号', () => {
      const symbolsText = '!@#$%^&*()';
      const result = validator.validate(symbolsText);
      
      expect(result.warnings.some(w => w.code === 'ONLY_SYMBOLS')).toBe(true);
    });

    test('应该检测混合文字系统', () => {
      const mixedText = 'Hello 你好 مرحبا';
      const result = validator.validate(mixedText);
      
      expect(result.warnings.some(w => w.code === 'MIXED_SCRIPTS')).toBe(true);
    });
  });

  describe('安全性验证测试', () => {
    test('应该检测脚本注入', () => {
      const scriptText = '<script>alert("xss")</script>';
      const result = validator.validate(scriptText);
      
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.code === 'POTENTIAL_SCRIPT_INJECTION')).toBe(true);
    });

    test('应该检测JavaScript URL', () => {
      const jsText = 'javascript:alert("xss")';
      const result = validator.validate(jsText);
      
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.code === 'POTENTIAL_SCRIPT_INJECTION')).toBe(true);
    });

    test('应该检测HTML标签', () => {
      const htmlText = '<div>Hello</div>';
      const result = validator.validate(htmlText);
      
      expect(result.warnings.some(w => w.code === 'HTML_TAGS')).toBe(true);
    });

    test('应该检测URL', () => {
      const urlText = 'Visit https://example.com for more info';
      const result = validator.validate(urlText);
      
      expect(result.warnings.some(w => w.code === 'CONTAINS_URLS')).toBe(true);
    });
  });

  describe('自动修复测试', () => {
    test('应该移除控制字符', () => {
      const textWithControl = 'Hello\x00\x01World';
      const fixed = validator.autoFix(textWithControl);
      
      expect(fixed).toBe('HelloWorld');
    });

    test('应该移除零宽字符', () => {
      const textWithZeroWidth = 'Hello\u200B\u200CWorld';
      const fixed = validator.autoFix(textWithZeroWidth);
      
      expect(fixed).toBe('HelloWorld');
    });

    test('应该截断过长文本', () => {
      const longText = 'a'.repeat(600);
      const fixed = validator.autoFix(longText);
      
      expect(fixed.length).toBe(500);
    });

    test('应该清理多余空白', () => {
      const messyText = '  Hello    World  \n\n  ';
      const fixed = validator.autoFix(messyText);
      
      expect(fixed).toBe('Hello World');
    });
  });

  describe('建议生成测试', () => {
    test('应该为错误生成建议', () => {
      const longText = 'a'.repeat(600);
      const result = validator.validate(longText);
      const suggestions = validator.getSuggestions(result);
      
      expect(suggestions.length).toBeGreaterThan(0);
      expect(suggestions.some(s => s.includes('Shorten'))).toBe(true);
    });

    test('应该去重建议', () => {
      const result = {
        isValid: false,
        errors: [
          { code: 'TEXT_TOO_LONG', message: 'Too long', severity: 'error' as const },
          { code: 'TEXT_TOO_LONG', message: 'Too long', severity: 'error' as const }
        ],
        warnings: []
      };
      
      const suggestions = validator.getSuggestions(result);
      const uniqueSuggestions = [...new Set(suggestions)];
      
      expect(suggestions.length).toBe(uniqueSuggestions.length);
    });
  });
});

describe('便捷函数测试', () => {
  test('validateInput应该工作', () => {
    const result = validateInput('Hello World');
    expect(result.isValid).toBe(true);
  });

  test('quickValidate应该快速验证', () => {
    const result = quickValidate('Hello', 10);
    expect(result.isValid).toBe(true);
    
    const longResult = quickValidate('Hello World!', 5);
    expect(longResult.isValid).toBe(false);
    expect(longResult.error).toContain('too long');
  });

  test('autoFixInput应该修复输入', () => {
    const fixed = autoFixInput('Hello\x00World   ');
    expect(fixed).toBe('HelloWorld');
  });

  test('localizeError应该本地化错误消息', () => {
    const error = {
      code: 'TEXT_TOO_LONG',
      message: 'Text is too long',
      severity: 'error' as const
    };
    
    const enMessage = localizeError(error, 'en');
    const zhMessage = localizeError(error, 'zh');
    
    expect(enMessage).toBe('Text is too long');
    expect(zhMessage).toBe('文本过长');
  });

  test('localizeError应该回退到原始消息', () => {
    const error = {
      code: 'UNKNOWN_ERROR',
      message: 'Unknown error',
      severity: 'error' as const
    };
    
    const message = localizeError(error, 'en');
    expect(message).toBe('Unknown error');
  });
});

describe('边界条件测试', () => {
  test('应该处理极长文本', () => {
    const veryLongText = 'a'.repeat(10000);
    const result = validateInput(veryLongText);
    
    expect(result.isValid).toBe(false);
    expect(result.errors.some(e => e.code === 'TEXT_TOO_LONG')).toBe(true);
  });

  test('应该处理特殊Unicode字符', () => {
    const unicodeText = '🌍🚀💻🎨🎮📱';
    const result = validateInput(unicodeText);
    
    expect(result.isValid).toBe(true);
  });

  test('应该处理混合内容', () => {
    const mixedText = 'Hello 123 !@# 你好 🌍';
    const result = validateInput(mixedText);
    
    expect(result.isValid).toBe(true);
  });

  test('应该处理空字符串', () => {
    const result = validateInput('');
    expect(result.isValid).toBe(true);
  });

  test('应该处理null和undefined', () => {
    // @ts-ignore - 测试边界条件
    expect(() => validateInput(null)).not.toThrow();
    // @ts-ignore - 测试边界条件
    expect(() => validateInput(undefined)).not.toThrow();
  });
});