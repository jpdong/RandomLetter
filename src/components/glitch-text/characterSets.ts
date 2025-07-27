// 字符集管理器

import { GlitchIntensity, GlitchCharacterSets } from './types';
import { LIGHT_GLITCH_CHARS, MEDIUM_GLITCH_CHARS, HEAVY_GLITCH_CHARS } from './constants';

/**
 * 获取指定强度的字符集
 */
export function getCharacterSet(intensity: GlitchIntensity): GlitchCharacterSets {
  switch (intensity) {
    case 'light':
      return LIGHT_GLITCH_CHARS;
    case 'medium':
      return MEDIUM_GLITCH_CHARS;
    case 'heavy':
      return HEAVY_GLITCH_CHARS;
    default:
      return LIGHT_GLITCH_CHARS;
  }
}

/**
 * 获取所有可用的组合字符
 */
export function getAllCombiningChars(intensity: GlitchIntensity): string[] {
  const charSet = getCharacterSet(intensity);
  return [...charSet.combining, ...charSet.zalgo, ...charSet.modifiers];
}

/**
 * 获取所有可用的符号字符
 */
export function getAllSymbolChars(intensity: GlitchIntensity): string[] {
  const charSet = getCharacterSet(intensity);
  return charSet.symbols;
}

/**
 * 获取字符的替换变体
 */
export function getCharacterReplacements(char: string, intensity: GlitchIntensity): string[] {
  const charSet = getCharacterSet(intensity);
  return charSet.replacements[char] || [];
}

/**
 * 检查字符是否有替换变体
 */
export function hasReplacements(char: string, intensity: GlitchIntensity): boolean {
  const charSet = getCharacterSet(intensity);
  return char in charSet.replacements;
}

/**
 * 获取随机组合字符
 */
export function getRandomCombiningChar(intensity: GlitchIntensity): string {
  const combiningChars = getAllCombiningChars(intensity);
  return combiningChars[Math.floor(Math.random() * combiningChars.length)];
}

/**
 * 获取随机符号字符
 */
export function getRandomSymbolChar(intensity: GlitchIntensity): string {
  const symbolChars = getAllSymbolChars(intensity);
  if (symbolChars.length === 0) return '';
  return symbolChars[Math.floor(Math.random() * symbolChars.length)];
}

/**
 * 获取字符的随机替换
 */
export function getRandomReplacement(char: string, intensity: GlitchIntensity): string {
  const replacements = getCharacterReplacements(char, intensity);
  if (replacements.length === 0) return char;
  return replacements[Math.floor(Math.random() * replacements.length)];
}

/**
 * 获取多个随机组合字符
 */
export function getRandomCombiningChars(intensity: GlitchIntensity, count: number): string[] {
  const combiningChars = getAllCombiningChars(intensity);
  const result: string[] = [];
  
  for (let i = 0; i < count && combiningChars.length > 0; i++) {
    const randomChar = combiningChars[Math.floor(Math.random() * combiningChars.length)];
    result.push(randomChar);
  }
  
  return result;
}

/**
 * 验证Unicode字符是否有效
 */
export function isValidUnicodeChar(char: string): boolean {
  try {
    // 检查字符是否能正确编码和解码
    return char === decodeURIComponent(encodeURIComponent(char));
  } catch {
    return false;
  }
}

/**
 * 清理无效的Unicode字符
 */
export function cleanInvalidChars(text: string): string {
  return text
    .split('')
    .filter(char => isValidUnicodeChar(char))
    .join('');
}