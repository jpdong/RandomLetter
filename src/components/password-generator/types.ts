export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeSimilar: boolean;
  excludeAmbiguous: boolean;
  customCharacters: string;
  excludeCharacters: string;
  requireEachType: boolean;
  noRepeatingChars: boolean;
}

export interface PasswordStrength {
  score: number; // 0-4
  label: 'Very Weak' | 'Weak' | 'Fair' | 'Good' | 'Strong';
  entropy: number;
  crackTime: string;
  feedback: string[];
  color: string;
}

export interface GeneratedPassword {
  id: string;
  password: string;
  strength: PasswordStrength;
  options: PasswordOptions;
  timestamp: number;
}

export interface CharacterSets {
  uppercase: string;
  lowercase: string;
  numbers: string;
  symbols: string;
  similar: string;
  ambiguous: string;
}