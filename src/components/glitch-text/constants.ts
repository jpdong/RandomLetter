// 故障文本生成器的常量定义

import { GlitchConfig, GlitchCharacterSets } from './types';

// 最大输入长度限制
export const MAX_INPUT_LENGTH = 500;

// 默认生成的变体数量
export const DEFAULT_VARIANT_COUNT = 5;

// 防抖延迟时间（毫秒）
export const DEBOUNCE_DELAY = 300;

// 复制成功提示显示时间（毫秒）
export const COPY_SUCCESS_DURATION = 2000;

// 轻微故障字符集
export const LIGHT_GLITCH_CHARS: GlitchCharacterSets = {
  combining: [
    '\u0300', // 重音符（grave accent）
    '\u0301', // 锐音符（acute accent）
    '\u0302', // 扬抑符（circumflex accent）
    '\u0303', // 波浪号（tilde）
  ],
  zalgo: [],
  symbols: [],
  modifiers: [],
  replacements: {
    'a': ['à', 'á', 'â', 'ã', 'ä', 'å', 'ā', 'ă', 'ą'],
    'e': ['è', 'é', 'ê', 'ë', 'ē', 'ĕ', 'ė', 'ę', 'ě'],
    'i': ['ì', 'í', 'î', 'ï', 'ī', 'ĭ', 'į', 'ı'],
    'o': ['ò', 'ó', 'ô', 'õ', 'ö', 'ō', 'ŏ', 'ő', 'ø'],
    'u': ['ù', 'ú', 'û', 'ü', 'ū', 'ŭ', 'ů', 'ű', 'ų'],
    'n': ['ñ', 'ń', 'ň', 'ņ', 'ŋ'],
    'c': ['ç', 'ć', 'ĉ', 'ċ', 'č'],
    's': ['ś', 'ŝ', 'ş', 'š'],
    'z': ['ź', 'ż', 'ž'],
    'y': ['ý', 'ÿ', 'ŷ'],
    'l': ['ĺ', 'ļ', 'ľ', 'ŀ', 'ł'],
    'r': ['ŕ', 'ŗ', 'ř'],
    't': ['ţ', 'ť', 'ŧ'],
    'd': ['ď', 'đ'],
    'g': ['ĝ', 'ğ', 'ġ', 'ģ'],
    'h': ['ĥ', 'ħ'],
    'j': ['ĵ'],
    'k': ['ķ', 'ĸ'],
    'w': ['ŵ'],
    'A': ['À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Ā', 'Ă', 'Ą'],
    'E': ['È', 'É', 'Ê', 'Ë', 'Ē', 'Ĕ', 'Ė', 'Ę', 'Ě'],
    'I': ['Ì', 'Í', 'Î', 'Ï', 'Ī', 'Ĭ', 'Į', 'İ'],
    'O': ['Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ō', 'Ŏ', 'Ő', 'Ø'],
    'U': ['Ù', 'Ú', 'Û', 'Ü', 'Ū', 'Ŭ', 'Ů', 'Ű', 'Ų'],
    'N': ['Ñ', 'Ń', 'Ň', 'Ņ', 'Ŋ'],
    'C': ['Ç', 'Ć', 'Ĉ', 'Ċ', 'Č'],
    'S': ['Ś', 'Ŝ', 'Ş', 'Š'],
    'Z': ['Ź', 'Ż', 'Ž'],
    'Y': ['Ý', 'Ÿ', 'Ŷ'],
    'L': ['Ĺ', 'Ļ', 'Ľ', 'Ŀ', 'Ł'],
    'R': ['Ŕ', 'Ŗ', 'Ř'],
    'T': ['Ţ', 'Ť', 'Ŧ'],
    'D': ['Ď', 'Đ'],
    'G': ['Ĝ', 'Ğ', 'Ġ', 'Ģ'],
    'H': ['Ĥ', 'Ħ'],
    'J': ['Ĵ'],
    'K': ['Ķ'],
    'W': ['Ŵ']
  }
};

// 中等故障字符集
export const MEDIUM_GLITCH_CHARS: GlitchCharacterSets = {
  combining: [
    ...LIGHT_GLITCH_CHARS.combining,
    '\u0304', // 上划线（macron）
    '\u0305', // 上划线（overline）
    '\u0306', // 短音符（breve）
    '\u0307', // 上点（dot above）
    '\u0308', // 分音符（diaeresis）
    '\u0309', // 钩符（hook above）
  ],
  zalgo: [
    '\u030D', // 垂直线上方
    '\u030E', // 双垂直线上方
    '\u0310', // 烛台上方
    '\u0312', // 转向逗号上方
  ],
  symbols: [
    '\u0336', // 长删除线
    '\u0337', // 短删除线
    '\u0338', // 长斜删除线
    '\u0335', // 短删除线
    '\u0334', // 双删除线
  ],
  modifiers: [
    '\u030A', // 上圆圈
    '\u030B', // 双锐音符
    '\u030C', // 抑扬符
    '\u030F', // 双重音符
    '\u0311', // 倒短音符
  ],
  replacements: {
    ...LIGHT_GLITCH_CHARS.replacements,
    // 添加更多特殊字符变体
    'f': ['ƒ'],
    'p': ['þ'],
    'b': ['ƀ'],
    'v': ['ʋ'],
    'm': ['ɱ'],
    'F': ['Ƒ'],
    'P': ['Þ'],
    'B': ['Ɓ'],
    'V': ['Ʋ'],
    'M': ['Ɱ']
  }
};

// 强烈故障字符集
export const HEAVY_GLITCH_CHARS: GlitchCharacterSets = {
  combining: [
    ...MEDIUM_GLITCH_CHARS.combining,
    '\u031A', // 左角上方
    '\u031B', // 角上方
    '\u031C', // 左半圆下方
    '\u031D', // 上半圆下方
    '\u031E', // 下半圆上方
    '\u031F', // 加号下方
    '\u0320', // 减号下方
    '\u0321', // 钩下方
    '\u0322', // 点下方
    '\u0323', // 点下方
    '\u0324', // 分音符下方
    '\u0325', // 圆圈下方
    '\u0326', // 逗号下方
    '\u0327', // 下加符
    '\u0328', // 反尾下方
  ],
  zalgo: [
    ...MEDIUM_GLITCH_CHARS.zalgo,
    '\u0316', // 重音符下方
    '\u0317', // 锐音符下方
    '\u0318', // 左钩下方
    '\u0319', // 右钩下方
    '\u031A', // 左角上方
    '\u031B', // 角上方
    '\u031C', // 左半圆下方
    '\u031D', // 上半圆下方
    '\u031E', // 下半圆上方
    '\u031F', // 加号下方
    '\u0320', // 减号下方
    '\u0329', // 垂直线下方
    '\u032A', // 桥下方
    '\u032B', // 倒桥下方
    '\u032C', // 抑扬符下方
    '\u032D', // 扬抑符下方
    '\u032E', // 短音符下方
    '\u032F', // 倒短音符下方
    '\u0330', // 波浪号下方
  ],
  symbols: [
    ...MEDIUM_GLITCH_CHARS.symbols,
    '\u0489', // 双重音符组合
    '\u20E3', // 组合圆圈反斜杠
    '\u20E4', // 组合圆圈反斜杠
    '\u0333', // 双下划线
    '\u0339', // 右半圆下方
    '\u033A', // 倒桥下方
    '\u033B', // 方形下方
    '\u033C', // 海鸥下方
    '\u033D', // X上方
    '\u033E', // 垂直波浪号
    '\u033F', // 双上划线
  ],
  modifiers: [
    ...MEDIUM_GLITCH_CHARS.modifiers,
    '\u0313', // 逗号上方
    '\u0314', // 反逗号上方
    '\u0315', // 逗号上方右
    '\u0340', // 组合重音符
    '\u0341', // 组合锐音符
    '\u0342', // 组合希腊长音符
    '\u0343', // 组合希腊短音符
    '\u0344', // 组合希腊分音符
    '\u0345', // 组合希腊下标碘
  ],
  replacements: {
    ...MEDIUM_GLITCH_CHARS.replacements,
    // 添加更多极端变体和符号
    'x': ['×', 'χ', 'ж'],
    'q': ['ʠ', 'ɋ'],
    '0': ['⊘', '∅', 'Ø', 'ø'],
    '1': ['¹', '₁', 'ⅰ', 'Ⅰ'],
    '2': ['²', '₂', 'ⅱ', 'Ⅱ'],
    '3': ['³', '₃', 'ⅲ', 'Ⅲ'],
    '4': ['⁴', '₄', 'ⅳ', 'Ⅳ'],
    '5': ['⁵', '₅', 'ⅴ', 'Ⅴ'],
    '6': ['⁶', '₆', 'ⅵ', 'Ⅵ'],
    '7': ['⁷', '₇', 'ⅶ', 'Ⅶ'],
    '8': ['⁸', '₈', 'ⅷ', 'Ⅷ'],
    '9': ['⁹', '₉', 'ⅸ', 'Ⅸ'],
    'X': ['×', 'Χ', 'Ж'],
    'Q': ['ʠ', 'Ɋ']
  }
};

// 故障生成配置
export const GLITCH_CONFIGS: Record<string, GlitchConfig> = {
  light: {
    intensity: 'light',
    density: 0.3,
    maxCharsPerPosition: 2,
    useReplacements: true,
    useCombining: true,
    useSymbols: false,
    randomness: 0.4
  },
  medium: {
    intensity: 'medium',
    density: 0.5,
    maxCharsPerPosition: 3,
    useReplacements: true,
    useCombining: true,
    useSymbols: true,
    randomness: 0.6
  },
  heavy: {
    intensity: 'heavy',
    density: 0.8,
    maxCharsPerPosition: 5,
    useReplacements: true,
    useCombining: true,
    useSymbols: true,
    useZalgo: true,
    randomness: 0.8
  }
};

// 示例文本
export const EXAMPLE_TEXTS = [
  'Hello World',
  'Glitch Effect',
  'Creative Text',
  'Digital Art',
  'Cyberpunk Style'
];

// 占位符文本
export const PLACEHOLDER_TEXT = 'Enter your text here...';

// 错误消息
export const ERROR_MESSAGES = {
  COPY_FAILED: 'Failed to copy text. Please select and copy manually.',
  TEXT_TOO_LONG: `Text is too long. Maximum ${MAX_INPUT_LENGTH} characters allowed.`,
  GENERATION_FAILED: 'Failed to generate glitch text. Please try again.'
};