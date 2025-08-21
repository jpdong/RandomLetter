import { CharacterSets, PasswordOptions } from './types';

export const CHARACTER_SETS: CharacterSets = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  similar: '0Oo1lI|',
  ambiguous: '{}[]()/\\\'"`~,;.<>'
};

export const DEFAULT_OPTIONS: PasswordOptions = {
  length: 16,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true,
  excludeSimilar: false,
  excludeAmbiguous: false,
  customCharacters: '',
  excludeCharacters: '',
  requireEachType: true,
  noRepeatingChars: false
};

export const PASSWORD_STRENGTH_CONFIG = {
  colors: {
    'Very Weak': '#ff4757',
    'Weak': '#ff6b6b',
    'Fair': '#ffa726',
    'Good': '#66bb6a',
    'Strong': '#2ed573'
  },
  minLength: {
    'Very Weak': 0,
    'Weak': 6,
    'Fair': 8,
    'Good': 12,
    'Strong': 16
  }
};

export const CRACK_TIME_ESTIMATES = {
  instant: 'Less than a second',
  seconds: 'Seconds',
  minutes: 'Minutes',
  hours: 'Hours',
  days: 'Days',
  months: 'Months',
  years: 'Years',
  centuries: 'Centuries'
};