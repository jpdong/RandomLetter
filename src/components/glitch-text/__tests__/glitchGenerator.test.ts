// 故障文本生成器的单元测试

import { 
  GlitchTextGenerator, 
  generateGlitchText, 
  generateSingleGlitchText,
  generatePreviewText,
  validateGlitchText,
  batchGenerateGlitchText
} from '../glitchGenerator';
import { GlitchIntensity } from '../types';

describe('GlitchTextGenerator', () => {
  describe('基础功能测试', () => {
    test('应该创建生成器实例', () => {
      const generator = new GlitchTextGenerator('light');
      expect(generator).toBeInstanceOf(GlitchTextGenerator);
    });

    test('应该生成非空的故障文本', () => {
      const generator = new GlitchTextGenerator('light');
      const result = generator.generateVariants({
        text: 'Hello World',
        intensity: 'light',
        variantCount: 3
      });

      expect(result.variants).toHaveLength(3);
      expect(result.preview).toBeTruthy();
      result.variants.forEach(variant => {
        expect(variant).toBeTruthy();
        expect(typeof variant).toBe('string');
      });
    });

    test('空输入应该返回空结果', () => {
      const generator = new GlitchTextGenerator('light');
      const result = generator.generateVariants({
        text: '',
        intensity: 'light',
        variantCount: 3
      });

      expect(result.variants).toHaveLength(0);
      expect(result.preview).toBe('');
    });

    test('只有空白字符的输入应该返回空结果', () => {
      const generator = new GlitchTextGenerator('light');
      const result = generator.generateVariants({
        text: '   ',
        intensity: 'light',
        variantCount: 3
      });

      expect(result.variants).toHaveLength(0);
      expect(result.preview).toBe('');
    });
  });

  describe('强度级别测试', () => {
    const testText = 'Test';
    const intensities: GlitchIntensity[] = ['light', 'medium', 'heavy'];

    intensities.forEach(intensity => {
      test(`应该为${intensity}强度生成有效的故障文本`, () => {
        const generator = new GlitchTextGenerator(intensity);
        const result = generator.generateVariants({
          text: testText,
          intensity,
          variantCount: 1
        });

        expect(result.variants).toHaveLength(1);
        expect(result.variants[0]).toBeTruthy();
        expect(result.preview).toBeTruthy();
      });
    });

    test('不同强度应该产生不同的效果', () => {
      const generators = {
        light: new GlitchTextGenerator('light'),
        medium: new GlitchTextGenerator('medium'),
        heavy: new GlitchTextGenerator('heavy')
      };

      const results = {
        light: generators.light.generateVariants({ text: testText, intensity: 'light', variantCount: 1 }),
        medium: generators.medium.generateVariants({ text: testText, intensity: 'medium', variantCount: 1 }),
        heavy: generators.heavy.generateVariants({ text: testText, intensity: 'heavy', variantCount: 1 })
      };

      // 验证结果都不为空
      Object.values(results).forEach(result => {
        expect(result.variants[0]).toBeTruthy();
      });

      // 通常heavy模式会产生更长的文本（但不是绝对的，因为有随机性）
      // 这里只验证它们不完全相同
      const variants = [results.light.variants[0], results.medium.variants[0], results.heavy.variants[0]];
      const uniqueVariants = new Set(variants);
      expect(uniqueVariants.size).toBeGreaterThan(1);
    });
  });

  describe('预览功能测试', () => {
    test('应该生成预览文本', () => {
      const generator = new GlitchTextGenerator('medium');
      const preview = generator.generatePreview('Hello');
      
      expect(preview).toBeTruthy();
      expect(typeof preview).toBe('string');
    });

    test('空输入的预览应该为空', () => {
      const generator = new GlitchTextGenerator('medium');
      const preview = generator.generatePreview('');
      
      expect(preview).toBe('');
    });
  });

  describe('配置更新测试', () => {
    test('应该能够更新强度配置', () => {
      const generator = new GlitchTextGenerator('light');
      
      // 生成light强度的文本
      const lightResult = generator.generateVariants({
        text: 'Test',
        intensity: 'light',
        variantCount: 1
      });

      // 更新到heavy强度
      generator.updateIntensity('heavy');
      const heavyResult = generator.generateVariants({
        text: 'Test',
        intensity: 'heavy',
        variantCount: 1
      });

      expect(lightResult.variants[0]).toBeTruthy();
      expect(heavyResult.variants[0]).toBeTruthy();
    });
  });
});

describe('便捷函数测试', () => {
  test('generateGlitchText应该工作正常', () => {
    const result = generateGlitchText({
      text: 'Hello',
      intensity: 'medium',
      variantCount: 2
    });

    expect(result.variants).toHaveLength(2);
    expect(result.preview).toBeTruthy();
  });

  test('generateSingleGlitchText应该返回单个字符串', () => {
    const result = generateSingleGlitchText('Hello', 'light');
    
    expect(typeof result).toBe('string');
    expect(result).toBeTruthy();
  });

  test('generatePreviewText应该返回预览字符串', () => {
    const result = generatePreviewText('Hello', 'medium');
    
    expect(typeof result).toBe('string');
    expect(result).toBeTruthy();
  });

  test('batchGenerateGlitchText应该处理多个文本', () => {
    const texts = ['Hello', 'World', 'Test'];
    const results = batchGenerateGlitchText(texts, 'light', 2);

    expect(Object.keys(results)).toHaveLength(3);
    texts.forEach(text => {
      expect(results[text]).toHaveLength(2);
      results[text].forEach(variant => {
        expect(variant).toBeTruthy();
      });
    });
  });
});

describe('文本验证测试', () => {
  test('有效的故障文本应该通过验证', () => {
    const original = 'Hello';
    const glitch = generateSingleGlitchText(original, 'light');
    const validation = validateGlitchText(original, glitch);

    expect(validation.isValid).toBe(true);
    expect(validation.issues).toHaveLength(0);
  });

  test('空的故障文本应该失败验证', () => {
    const validation = validateGlitchText('Hello', '');

    expect(validation.isValid).toBe(false);
    expect(validation.issues).toContain('Generated text is empty');
  });

  test('过长的故障文本应该失败验证', () => {
    const original = 'Hi';
    const tooLong = 'a'.repeat(original.length * 15); // 超过10倍长度
    const validation = validateGlitchText(original, tooLong);

    expect(validation.isValid).toBe(false);
    expect(validation.issues).toContain('Generated text is too long');
  });
});

describe('边界条件测试', () => {
  test('应该处理特殊字符', () => {
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const result = generateSingleGlitchText(specialChars, 'medium');
    
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });

  test('应该处理数字', () => {
    const numbers = '1234567890';
    const result = generateSingleGlitchText(numbers, 'heavy');
    
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });

  test('应该处理混合内容', () => {
    const mixed = 'Hello123!@# World';
    const result = generateSingleGlitchText(mixed, 'medium');
    
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });

  test('应该处理Unicode字符', () => {
    const unicode = '你好世界 🌍 café';
    const result = generateSingleGlitchText(unicode, 'light');
    
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });

  test('应该处理长文本', () => {
    const longText = 'A'.repeat(100);
    const result = generateSingleGlitchText(longText, 'light');
    
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });
});