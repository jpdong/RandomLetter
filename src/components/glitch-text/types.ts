// 故障文本生成器的TypeScript类型定义

export type GlitchIntensity = 'light' | 'medium' | 'heavy';

export interface GlitchTextGeneratorProps {}

export interface GlitchTextState {
  inputText: string;
  glitchIntensity: GlitchIntensity;
  generatedVariants: string[];
  isGenerating: boolean;
  copySuccess: string | null;
}

export interface GlitchTextVariantProps {
  text: string;
  onCopy: (text: string) => void;
  index: number;
}

export interface GlitchCharacterSets {
  combining: string[]; // 组合字符 (U+0300-U+036F)
  zalgo: string[];     // Zalgo字符
  symbols: string[];   // 特殊符号
  modifiers: string[]; // 修饰符
  replacements: Record<string, string[]>; // 字符替换映射
}

export interface GlitchConfig {
  intensity: GlitchIntensity;
  density: number;
  maxCharsPerPosition: number;
  useReplacements: boolean;
  useCombining: boolean;
  useSymbols: boolean;
  useZalgo?: boolean;
  randomness: number;
}

export interface GlitchGeneratorOptions {
  text: string;
  intensity: GlitchIntensity;
  variantCount?: number;
}

export interface GlitchGeneratorResult {
  variants: string[];
  preview: string;
}