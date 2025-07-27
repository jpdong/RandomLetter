// 故障文本生成器的工具函数

import { GlitchIntensity } from './types';

/**
 * 防抖函数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * 获取随机数组元素
 */
export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * 获取多个随机数组元素
 */
export function getRandomElements<T>(array: T[], count: number): T[] {
  const result: T[] = [];
  const usedIndices = new Set<number>();
  
  while (result.length < count && result.length < array.length) {
    const index = Math.floor(Math.random() * array.length);
    if (!usedIndices.has(index)) {
      usedIndices.add(index);
      result.push(array[index]);
    }
  }
  
  return result;
}

/**
 * 检查是否应该应用故障效果
 */
export function shouldApplyGlitch(probability: number): boolean {
  return Math.random() < probability;
}

/**
 * 验证输入文本
 */
export function validateInput(text: string, maxLength: number): {
  isValid: boolean;
  error?: string;
} {
  if (text.length > maxLength) {
    return {
      isValid: false,
      error: `Text is too long. Maximum ${maxLength} characters allowed.`
    };
  }
  
  return { isValid: true };
}

/**
 * 清理文本（移除多余的空白字符）
 */
export function cleanText(text: string): string {
  return text.trim().replace(/\s+/g, ' ');
}

/**
 * 检查字符是否为字母
 */
export function isLetter(char: string): boolean {
  return /[a-zA-Z]/.test(char);
}

/**
 * 检查字符是否为空白字符
 */
export function isWhitespace(char: string): boolean {
  return /\s/.test(char);
}

/**
 * 生成唯一ID
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * 复制文本到剪贴板（保持向后兼容）
 * @deprecated 使用 clipboardManager.copyToClipboard 代替
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    // 动态导入以避免循环依赖
    const { copyToClipboard: newCopyFunction } = await import('./clipboardManager');
    const result = await newCopyFunction(text);
    return result.success;
  } catch (error) {
    console.error('Failed to copy text:', error);
    return false;
  }
}

/**
 * 格式化强度显示文本
 */
export function formatIntensityLabel(intensity: GlitchIntensity): string {
  const labels = {
    light: 'Light',
    medium: 'Medium',
    heavy: 'Heavy'
  };
  return labels[intensity];
}

/**
 * 获取强度对应的颜色类
 */
export function getIntensityColorClass(intensity: GlitchIntensity): string {
  const colorClasses = {
    light: 'text-green-600',
    medium: 'text-yellow-600',
    heavy: 'text-red-600'
  };
  return colorClasses[intensity];
}