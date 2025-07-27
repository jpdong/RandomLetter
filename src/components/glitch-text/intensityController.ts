// 强度控制逻辑

import { GlitchIntensity, GlitchConfig } from './types';
import { GLITCH_CONFIGS } from './constants';

/**
 * 强度控制器类
 */
export class IntensityController {
  private currentIntensity: GlitchIntensity;
  private config: GlitchConfig;

  constructor(initialIntensity: GlitchIntensity = 'medium') {
    this.currentIntensity = initialIntensity;
    this.config = GLITCH_CONFIGS[initialIntensity];
  }

  /**
   * 设置强度级别
   */
  public setIntensity(intensity: GlitchIntensity): void {
    this.currentIntensity = intensity;
    this.config = GLITCH_CONFIGS[intensity];
  }

  /**
   * 获取当前强度
   */
  public getCurrentIntensity(): GlitchIntensity {
    return this.currentIntensity;
  }

  /**
   * 获取当前配置
   */
  public getCurrentConfig(): GlitchConfig {
    return { ...this.config };
  }

  /**
   * 获取强度的数值表示（用于UI显示）
   */
  public getIntensityValue(): number {
    const values = {
      light: 1,
      medium: 2,
      heavy: 3
    };
    return values[this.currentIntensity];
  }

  /**
   * 从数值设置强度
   */
  public setIntensityFromValue(value: number): void {
    const intensities: GlitchIntensity[] = ['light', 'medium', 'heavy'];
    const index = Math.max(0, Math.min(2, value - 1));
    this.setIntensity(intensities[index]);
  }

  /**
   * 增加强度
   */
  public increaseIntensity(): GlitchIntensity {
    const intensities: GlitchIntensity[] = ['light', 'medium', 'heavy'];
    const currentIndex = intensities.indexOf(this.currentIntensity);
    const nextIndex = Math.min(intensities.length - 1, currentIndex + 1);
    this.setIntensity(intensities[nextIndex]);
    return this.currentIntensity;
  }

  /**
   * 减少强度
   */
  public decreaseIntensity(): GlitchIntensity {
    const intensities: GlitchIntensity[] = ['light', 'medium', 'heavy'];
    const currentIndex = intensities.indexOf(this.currentIntensity);
    const prevIndex = Math.max(0, currentIndex - 1);
    this.setIntensity(intensities[prevIndex]);
    return this.currentIntensity;
  }

  /**
   * 检查是否可以增加强度
   */
  public canIncreaseIntensity(): boolean {
    return this.currentIntensity !== 'heavy';
  }

  /**
   * 检查是否可以减少强度
   */
  public canDecreaseIntensity(): boolean {
    return this.currentIntensity !== 'light';
  }

  /**
   * 获取强度描述
   */
  public getIntensityDescription(): string {
    const descriptions = {
      light: 'Subtle glitch effects with basic character variations',
      medium: 'Moderate glitch effects with combining characters and symbols',
      heavy: 'Intense glitch effects with zalgo characters and heavy distortion'
    };
    return descriptions[this.currentIntensity];
  }

  /**
   * 获取强度的视觉指示器
   */
  public getIntensityIndicator(): string {
    const indicators = {
      light: '●○○',
      medium: '●●○',
      heavy: '●●●'
    };
    return indicators[this.currentIntensity];
  }

  /**
   * 获取强度的颜色类名
   */
  public getIntensityColorClass(): string {
    const colorClasses = {
      light: 'text-green-500',
      medium: 'text-yellow-500',
      heavy: 'text-red-500'
    };
    return colorClasses[this.currentIntensity];
  }

  /**
   * 获取强度的背景颜色类名
   */
  public getIntensityBgColorClass(): string {
    const bgColorClasses = {
      light: 'bg-green-100',
      medium: 'bg-yellow-100',
      heavy: 'bg-red-100'
    };
    return bgColorClasses[this.currentIntensity];
  }

  /**
   * 根据文本长度自动调整强度
   */
  public autoAdjustForTextLength(textLength: number): GlitchIntensity {
    let recommendedIntensity: GlitchIntensity;

    if (textLength <= 10) {
      // 短文本可以使用更高强度
      recommendedIntensity = this.currentIntensity;
    } else if (textLength <= 50) {
      // 中等长度文本建议使用中等强度
      recommendedIntensity = this.currentIntensity === 'heavy' ? 'medium' : this.currentIntensity;
    } else {
      // 长文本建议使用较低强度以保持可读性
      recommendedIntensity = 'light';
    }

    return recommendedIntensity;
  }

  /**
   * 创建自定义配置
   */
  public createCustomConfig(overrides: Partial<GlitchConfig>): GlitchConfig {
    return {
      ...this.config,
      ...overrides
    };
  }

  /**
   * 验证强度配置
   */
  public validateConfig(config: GlitchConfig): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    if (config.density < 0 || config.density > 1) {
      errors.push('Density must be between 0 and 1');
    }

    if (config.maxCharsPerPosition < 1 || config.maxCharsPerPosition > 10) {
      errors.push('Max chars per position must be between 1 and 10');
    }

    if (config.randomness < 0 || config.randomness > 1) {
      errors.push('Randomness must be between 0 and 1');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * 获取所有可用的强度选项
   */
  public static getAllIntensities(): GlitchIntensity[] {
    return ['light', 'medium', 'heavy'];
  }

  /**
   * 获取强度的本地化标签
   */
  public static getIntensityLabel(intensity: GlitchIntensity, locale: string = 'en'): string {
    const labels = {
      en: {
        light: 'Light',
        medium: 'Medium',
        heavy: 'Heavy'
      },
      zh: {
        light: '轻微',
        medium: '中等',
        heavy: '强烈'
      }
    };

    return labels[locale as keyof typeof labels]?.[intensity] || labels.en[intensity];
  }

  /**
   * 比较两个强度级别
   */
  public static compareIntensities(a: GlitchIntensity, b: GlitchIntensity): number {
    const values = { light: 1, medium: 2, heavy: 3 };
    return values[a] - values[b];
  }

  /**
   * 检查强度是否有效
   */
  public static isValidIntensity(intensity: string): intensity is GlitchIntensity {
    return ['light', 'medium', 'heavy'].includes(intensity);
  }
}

/**
 * 便捷函数：创建强度控制器
 */
export function createIntensityController(intensity: GlitchIntensity = 'medium'): IntensityController {
  return new IntensityController(intensity);
}

/**
 * 便捷函数：获取强度配置
 */
export function getIntensityConfig(intensity: GlitchIntensity): GlitchConfig {
  return GLITCH_CONFIGS[intensity];
}

/**
 * 便捷函数：获取强度的显示信息
 */
export function getIntensityDisplayInfo(intensity: GlitchIntensity) {
  const controller = new IntensityController(intensity);
  return {
    label: IntensityController.getIntensityLabel(intensity),
    description: controller.getIntensityDescription(),
    indicator: controller.getIntensityIndicator(),
    colorClass: controller.getIntensityColorClass(),
    bgColorClass: controller.getIntensityBgColorClass(),
    value: controller.getIntensityValue()
  };
}

/**
 * 便捷函数：根据用户偏好调整强度
 */
export function adjustIntensityForPreference(
  baseIntensity: GlitchIntensity,
  userPreference: 'readable' | 'balanced' | 'extreme'
): GlitchIntensity {
  const adjustments = {
    readable: { light: 'light', medium: 'light', heavy: 'medium' },
    balanced: { light: 'light', medium: 'medium', heavy: 'medium' },
    extreme: { light: 'medium', medium: 'heavy', heavy: 'heavy' }
  };

  return adjustments[userPreference][baseIntensity] as GlitchIntensity;
}