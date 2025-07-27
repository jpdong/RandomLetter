// 输入验证和错误处理

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

export interface ValidationError {
  code: string;
  message: string;
  field?: string;
  severity: 'error' | 'warning' | 'info';
}

export interface ValidationWarning {
  code: string;
  message: string;
  suggestion?: string;
}

export interface ValidationOptions {
  maxLength?: number;
  minLength?: number;
  allowEmpty?: boolean;
  checkUnicode?: boolean;
  checkPerformance?: boolean;
  strictMode?: boolean;
}

/**
 * 验证器类
 */
export class InputValidator {
  private options: Required<ValidationOptions>;

  constructor(options: ValidationOptions = {}) {
    this.options = {
      maxLength: 500,
      minLength: 0,
      allowEmpty: true,
      checkUnicode: true,
      checkPerformance: true,
      strictMode: false,
      ...options
    };
  }

  /**
   * 验证输入文本
   */
  public validate(input: string): ValidationResult {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];

    // 基础长度验证
    this.validateLength(input, errors, warnings);

    // Unicode字符验证
    if (this.options.checkUnicode) {
      this.validateUnicode(input, errors, warnings);
    }

    // 性能相关验证
    if (this.options.checkPerformance) {
      this.validatePerformance(input, errors, warnings);
    }

    // 内容质量验证
    this.validateContent(input, errors, warnings);

    // 安全性验证
    this.validateSecurity(input, errors, warnings);

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * 验证文本长度
   */
  private validateLength(input: string, errors: ValidationError[], warnings: ValidationWarning[]): void {
    if (!this.options.allowEmpty && input.trim().length === 0) {
      errors.push({
        code: 'EMPTY_INPUT',
        message: 'Input cannot be empty',
        field: 'text',
        severity: 'error'
      });
      return;
    }

    if (input.length > this.options.maxLength) {
      errors.push({
        code: 'TEXT_TOO_LONG',
        message: `Text is too long. Maximum ${this.options.maxLength} characters allowed.`,
        field: 'text',
        severity: 'error'
      });
    }

    if (input.length < this.options.minLength) {
      errors.push({
        code: 'TEXT_TOO_SHORT',
        message: `Text is too short. Minimum ${this.options.minLength} characters required.`,
        field: 'text',
        severity: 'error'
      });
    }

    // 警告：接近长度限制
    if (input.length > this.options.maxLength * 0.9) {
      warnings.push({
        code: 'APPROACHING_LENGTH_LIMIT',
        message: `Text is approaching the length limit (${input.length}/${this.options.maxLength})`,
        suggestion: 'Consider shortening your text for better performance'
      });
    }
  }

  /**
   * 验证Unicode字符
   */
  private validateUnicode(input: string, errors: ValidationError[], warnings: ValidationWarning[]): void {
    // 检查是否包含无效的Unicode字符
    try {
      const encoded = encodeURIComponent(input);
      const decoded = decodeURIComponent(encoded);
      if (decoded !== input) {
        warnings.push({
          code: 'UNICODE_ENCODING_ISSUE',
          message: 'Some characters may not encode/decode properly',
          suggestion: 'Test the generated text on your target platform'
        });
      }
    } catch (error) {
      errors.push({
        code: 'INVALID_UNICODE',
        message: 'Input contains invalid Unicode characters',
        field: 'text',
        severity: 'error'
      });
    }

    // 检查控制字符
    const controlCharRegex = /[\x00-\x1F\x7F-\x9F]/g;
    if (controlCharRegex.test(input)) {
      warnings.push({
        code: 'CONTROL_CHARACTERS',
        message: 'Input contains control characters that may cause display issues',
        suggestion: 'Remove or replace control characters'
      });
    }

    // 检查双向文本字符
    const bidiRegex = /[\u200E\u200F\u202A-\u202E]/g;
    if (bidiRegex.test(input)) {
      warnings.push({
        code: 'BIDI_CHARACTERS',
        message: 'Input contains bidirectional text characters',
        suggestion: 'Be aware of text direction in the output'
      });
    }

    // 检查零宽字符
    const zeroWidthRegex = /[\u200B\u200C\u200D\uFEFF]/g;
    if (zeroWidthRegex.test(input)) {
      warnings.push({
        code: 'ZERO_WIDTH_CHARACTERS',
        message: 'Input contains zero-width characters',
        suggestion: 'These characters may affect text appearance'
      });
    }
  }

  /**
   * 验证性能相关问题
   */
  private validatePerformance(input: string, errors: ValidationError[], warnings: ValidationWarning[]): void {
    // 检查重复字符
    const repeatedCharRegex = /(.)\1{10,}/g;
    if (repeatedCharRegex.test(input)) {
      warnings.push({
        code: 'REPEATED_CHARACTERS',
        message: 'Input contains long sequences of repeated characters',
        suggestion: 'This may affect glitch generation performance'
      });
    }

    // 检查复杂Unicode字符的密度
    const complexUnicodeRegex = /[\u0300-\u036F\u1AB0-\u1AFF\uFE20-\uFE2F]/g;
    const complexMatches = input.match(complexUnicodeRegex);
    if (complexMatches && complexMatches.length > input.length * 0.3) {
      warnings.push({
        code: 'HIGH_UNICODE_DENSITY',
        message: 'Input already contains many combining characters',
        suggestion: 'Glitch effects may be less noticeable'
      });
    }

    // 检查行数
    const lineCount = input.split('\n').length;
    if (lineCount > 10) {
      warnings.push({
        code: 'MANY_LINES',
        message: `Input contains ${lineCount} lines`,
        suggestion: 'Consider processing shorter text segments for better results'
      });
    }
  }

  /**
   * 验证内容质量
   */
  private validateContent(input: string, errors: ValidationError[], warnings: ValidationWarning[]): void {
    // 检查是否只包含空白字符
    if (input.trim().length === 0 && input.length > 0) {
      warnings.push({
        code: 'ONLY_WHITESPACE',
        message: 'Input contains only whitespace characters',
        suggestion: 'Add some text content for better glitch effects'
      });
    }

    // 检查是否只包含数字
    if (/^\d+$/.test(input.trim())) {
      warnings.push({
        code: 'ONLY_NUMBERS',
        message: 'Input contains only numbers',
        suggestion: 'Text characters may produce more interesting glitch effects'
      });
    }

    // 检查是否只包含符号
    if (/^[^\w\s]+$/.test(input.trim())) {
      warnings.push({
        code: 'ONLY_SYMBOLS',
        message: 'Input contains only symbols',
        suggestion: 'Adding letters may improve glitch effect visibility'
      });
    }

    // 检查语言混合
    const hasLatin = /[a-zA-Z]/.test(input);
    const hasCJK = /[\u4e00-\u9fff\u3400-\u4dbf\u3040-\u309f\u30a0-\u30ff]/.test(input);
    const hasArabic = /[\u0600-\u06ff]/.test(input);
    const hasDevanagari = /[\u0900-\u097f]/.test(input);

    const scriptCount = [hasLatin, hasCJK, hasArabic, hasDevanagari].filter(Boolean).length;
    if (scriptCount > 1) {
      warnings.push({
        code: 'MIXED_SCRIPTS',
        message: 'Input contains mixed writing systems',
        suggestion: 'Different scripts may render glitch effects differently'
      });
    }
  }

  /**
   * 验证安全性
   */
  private validateSecurity(input: string, errors: ValidationError[], warnings: ValidationWarning[]): void {
    // 检查潜在的脚本注入
    const scriptRegex = /<script|javascript:|data:text\/html/i;
    if (scriptRegex.test(input)) {
      errors.push({
        code: 'POTENTIAL_SCRIPT_INJECTION',
        message: 'Input contains potentially dangerous script content',
        field: 'text',
        severity: 'error'
      });
    }

    // 检查HTML标签
    const htmlRegex = /<[^>]+>/g;
    if (htmlRegex.test(input)) {
      warnings.push({
        code: 'HTML_TAGS',
        message: 'Input contains HTML-like tags',
        suggestion: 'Tags will be treated as plain text'
      });
    }

    // 检查URL
    const urlRegex = /https?:\/\/[^\s]+/g;
    if (urlRegex.test(input)) {
      warnings.push({
        code: 'CONTAINS_URLS',
        message: 'Input contains URLs',
        suggestion: 'URLs may not display correctly with glitch effects'
      });
    }
  }

  /**
   * 获取建议的修复方案
   */
  public getSuggestions(validationResult: ValidationResult): string[] {
    const suggestions: string[] = [];

    validationResult.errors.forEach(error => {
      switch (error.code) {
        case 'TEXT_TOO_LONG':
          suggestions.push('Shorten your text or split it into smaller parts');
          break;
        case 'EMPTY_INPUT':
          suggestions.push('Enter some text to generate glitch effects');
          break;
        case 'INVALID_UNICODE':
          suggestions.push('Remove or replace invalid characters');
          break;
        case 'POTENTIAL_SCRIPT_INJECTION':
          suggestions.push('Remove script-like content for security');
          break;
      }
    });

    validationResult.warnings.forEach(warning => {
      if (warning.suggestion) {
        suggestions.push(warning.suggestion);
      }
    });

    return Array.from(new Set(suggestions)); // 去重
  }

  /**
   * 自动修复输入
   */
  public autoFix(input: string): string {
    let fixed = input;

    // 移除控制字符
    fixed = fixed.replace(/[\x00-\x1F\x7F-\x9F]/g, '');

    // 移除零宽字符
    fixed = fixed.replace(/[\u200B\u200C\u200D\uFEFF]/g, '');

    // 限制长度
    if (fixed.length > this.options.maxLength) {
      fixed = fixed.substring(0, this.options.maxLength);
    }

    // 清理多余的空白
    fixed = fixed.replace(/\s+/g, ' ').trim();

    return fixed;
  }
}

/**
 * 便捷函数：验证输入
 */
export function validateInput(input: string, options?: ValidationOptions): ValidationResult {
  const validator = new InputValidator(options);
  return validator.validate(input);
}

/**
 * 便捷函数：快速验证
 */
export function quickValidate(input: string, maxLength: number = 500): {
  isValid: boolean;
  error?: string;
} {
  if (input.length > maxLength) {
    return {
      isValid: false,
      error: `Text is too long. Maximum ${maxLength} characters allowed.`
    };
  }

  return { isValid: true };
}

/**
 * 便捷函数：自动修复输入
 */
export function autoFixInput(input: string, options?: ValidationOptions): string {
  const validator = new InputValidator(options);
  return validator.autoFix(input);
}

/**
 * 错误消息本地化
 */
export function localizeError(error: ValidationError, locale: string = 'en'): string {
  const messages = {
    en: {
      EMPTY_INPUT: 'Input cannot be empty',
      TEXT_TOO_LONG: 'Text is too long',
      TEXT_TOO_SHORT: 'Text is too short',
      INVALID_UNICODE: 'Contains invalid characters',
      POTENTIAL_SCRIPT_INJECTION: 'Contains potentially dangerous content'
    },
    zh: {
      EMPTY_INPUT: '输入不能为空',
      TEXT_TOO_LONG: '文本过长',
      TEXT_TOO_SHORT: '文本过短',
      INVALID_UNICODE: '包含无效字符',
      POTENTIAL_SCRIPT_INJECTION: '包含潜在危险内容'
    }
  };

  return messages[locale as keyof typeof messages]?.[error.code as keyof typeof messages.en] || error.message;
}