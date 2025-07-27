// 故障文本生成核心算法

import { GlitchIntensity, GlitchGeneratorOptions, GlitchGeneratorResult, GlitchConfig } from './types';
import { GLITCH_CONFIGS, DEFAULT_VARIANT_COUNT } from './constants';
import { 
  getCharacterSet, 
  getRandomCombiningChars, 
  getRandomSymbolChar, 
  getRandomReplacement,
  hasReplacements,
  cleanInvalidChars
} from './characterSets';
import { shouldApplyGlitch, isLetter, isWhitespace } from './utils';

/**
 * 主要的故障文本生成器类
 */
export class GlitchTextGenerator {
  private config: GlitchConfig;

  constructor(intensity: GlitchIntensity) {
    this.config = GLITCH_CONFIGS[intensity];
  }

  /**
   * 生成故障文本变体
   */
  public generateVariants(options: GlitchGeneratorOptions): GlitchGeneratorResult {
    const { text, intensity, variantCount = DEFAULT_VARIANT_COUNT } = options;
    
    if (!text.trim()) {
      return {
        variants: [],
        preview: ''
      };
    }

    this.config = GLITCH_CONFIGS[intensity];
    const variants: string[] = [];
    
    // 生成指定数量的变体
    for (let i = 0; i < variantCount; i++) {
      const variant = this.generateSingleVariant(text);
      variants.push(variant);
    }

    // 生成预览（使用第一个变体或单独生成）
    const preview = variants.length > 0 ? variants[0] : this.generateSingleVariant(text);

    return {
      variants,
      preview: cleanInvalidChars(preview)
    };
  }

  /**
   * 生成单个故障文本变体
   */
  private generateSingleVariant(text: string): string {
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      let processedChar = char;

      // 跳过空白字符的处理
      if (isWhitespace(char)) {
        result += char;
        continue;
      }

      // 应用字符替换
      if (this.config.useReplacements && hasReplacements(char, this.config.intensity)) {
        if (shouldApplyGlitch(this.config.density)) {
          processedChar = getRandomReplacement(char, this.config.intensity);
        }
      }

      // 添加基础字符
      result += processedChar;

      // 应用组合字符
      if (this.config.useCombining && shouldApplyGlitch(this.config.density)) {
        const combiningCount = Math.floor(Math.random() * this.config.maxCharsPerPosition) + 1;
        const combiningChars = getRandomCombiningChars(this.config.intensity, combiningCount);
        result += combiningChars.join('');
      }

      // 应用符号字符
      if (this.config.useSymbols && shouldApplyGlitch(this.config.density * 0.7)) {
        const symbolChar = getRandomSymbolChar(this.config.intensity);
        if (symbolChar) {
          result += symbolChar;
        }
      }

      // 应用Zalgo效果（仅在heavy模式下）
      if (this.config.useZalgo && shouldApplyGlitch(this.config.density * 0.5)) {
        const zalgoCount = Math.floor(Math.random() * 2) + 1;
        const zalgoChars = getRandomCombiningChars(this.config.intensity, zalgoCount);
        result += zalgoChars.join('');
      }
    }

    return result;
  }

  /**
   * 生成实时预览
   */
  public generatePreview(text: string): string {
    if (!text.trim()) {
      return '';
    }

    // 预览使用较低的密度以保持可读性
    const previewConfig = {
      ...this.config,
      density: this.config.density * 0.6,
      maxCharsPerPosition: Math.max(1, this.config.maxCharsPerPosition - 1)
    };

    const originalConfig = this.config;
    this.config = previewConfig;
    
    const preview = this.generateSingleVariant(text);
    
    this.config = originalConfig;
    
    return cleanInvalidChars(preview);
  }

  /**
   * 更新生成器配置
   */
  public updateIntensity(intensity: GlitchIntensity): void {
    this.config = GLITCH_CONFIGS[intensity];
  }
}

/**
 * 便捷函数：生成故障文本
 */
export function generateGlitchText(options: GlitchGeneratorOptions): GlitchGeneratorResult {
  const generator = new GlitchTextGenerator(options.intensity);
  return generator.generateVariants(options);
}

/**
 * 便捷函数：生成单个故障文本
 */
export function generateSingleGlitchText(text: string, intensity: GlitchIntensity): string {
  const generator = new GlitchTextGenerator(intensity);
  const result = generator.generateVariants({ text, intensity, variantCount: 1 });
  return result.variants[0] || '';
}

/**
 * 便捷函数：生成预览文本
 */
export function generatePreviewText(text: string, intensity: GlitchIntensity): string {
  const generator = new GlitchTextGenerator(intensity);
  return generator.generatePreview(text);
}

/**
 * 验证生成的文本质量
 */
export function validateGlitchText(originalText: string, glitchText: string): {
  isValid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  
  // 检查长度是否合理（不应该过度膨胀）
  if (glitchText.length > originalText.length * 10) {
    issues.push('Generated text is too long');
  }
  
  // 检查是否包含原始字符的痕迹
  const originalChars = new Set(originalText.toLowerCase().replace(/\s/g, ''));
  const hasOriginalChars = Array.from(originalChars).some(char => 
    glitchText.toLowerCase().includes(char)
  );
  
  if (!hasOriginalChars && originalText.trim().length > 0) {
    issues.push('Generated text has no resemblance to original');
  }
  
  // 检查是否为空
  if (!glitchText.trim() && originalText.trim()) {
    issues.push('Generated text is empty');
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
}

/**
 * 批量生成故障文本
 */
export function batchGenerateGlitchText(
  texts: string[], 
  intensity: GlitchIntensity,
  variantCount: number = 1
): Record<string, string[]> {
  const generator = new GlitchTextGenerator(intensity);
  const results: Record<string, string[]> = {};
  
  texts.forEach(text => {
    const result = generator.generateVariants({ text, intensity, variantCount });
    results[text] = result.variants;
  });
  
  return results;
}