import { PasswordOptions, PasswordStrength, GeneratedPassword } from './types';
import { CHARACTER_SETS, PASSWORD_STRENGTH_CONFIG, CRACK_TIME_ESTIMATES } from './constants';

export class PasswordGenerator {
  private static getCharacterPool(options: PasswordOptions): string {
    let pool = '';
    
    if (options.includeUppercase) pool += CHARACTER_SETS.uppercase;
    if (options.includeLowercase) pool += CHARACTER_SETS.lowercase;
    if (options.includeNumbers) pool += CHARACTER_SETS.numbers;
    if (options.includeSymbols) pool += CHARACTER_SETS.symbols;
    
    if (options.customCharacters) {
      pool += options.customCharacters;
    }
    
    if (options.excludeSimilar) {
      pool = pool.replace(new RegExp(`[${CHARACTER_SETS.similar.replace(/[\[\]\\-]/g, '\\$&')}]`, 'g'), '');
    }
    
    if (options.excludeAmbiguous) {
      pool = pool.replace(new RegExp(`[${CHARACTER_SETS.ambiguous.replace(/[\[\]\\-]/g, '\\$&')}]`, 'g'), '');
    }
    
    if (options.excludeCharacters) {
      pool = pool.replace(new RegExp(`[${options.excludeCharacters.replace(/[\[\]\\-]/g, '\\$&')}]`, 'g'), '');
    }
    
    return Array.from(new Set(pool)).join('');
  }

  private static getSecureRandomInt(max: number): number {
    if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
      const array = new Uint32Array(1);
      window.crypto.getRandomValues(array);
      return array[0] % max;
    }
    return Math.floor(Math.random() * max);
  }

  private static shuffleString(str: string): string {
    const array = str.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = this.getSecureRandomInt(i + 1);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
  }

  static generate(options: PasswordOptions): string {
    const pool = this.getCharacterPool(options);
    
    if (pool.length === 0) {
      throw new Error('No characters available for password generation');
    }

    let password = '';
    const requiredChars: string[] = [];

    if (options.requireEachType) {
      if (options.includeUppercase) {
        const upperPool = CHARACTER_SETS.uppercase.split('').filter(c => pool.includes(c));
        if (upperPool.length > 0) {
          requiredChars.push(upperPool[this.getSecureRandomInt(upperPool.length)]);
        }
      }
      if (options.includeLowercase) {
        const lowerPool = CHARACTER_SETS.lowercase.split('').filter(c => pool.includes(c));
        if (lowerPool.length > 0) {
          requiredChars.push(lowerPool[this.getSecureRandomInt(lowerPool.length)]);
        }
      }
      if (options.includeNumbers) {
        const numPool = CHARACTER_SETS.numbers.split('').filter(c => pool.includes(c));
        if (numPool.length > 0) {
          requiredChars.push(numPool[this.getSecureRandomInt(numPool.length)]);
        }
      }
      if (options.includeSymbols) {
        const symPool = CHARACTER_SETS.symbols.split('').filter(c => pool.includes(c));
        if (symPool.length > 0) {
          requiredChars.push(symPool[this.getSecureRandomInt(symPool.length)]);
        }
      }
    }

    for (let i = 0; i < options.length; i++) {
      let char: string;
      let attempts = 0;
      const maxAttempts = 100;

      do {
        if (i < requiredChars.length) {
          char = requiredChars[i];
        } else {
          char = pool[this.getSecureRandomInt(pool.length)];
        }
        attempts++;
      } while (
        options.noRepeatingChars && 
        password.length > 0 && 
        password[password.length - 1] === char && 
        attempts < maxAttempts
      );

      password += char;
    }

    if (options.requireEachType && requiredChars.length > 0) {
      password = this.shuffleString(password);
    }

    return password;
  }

  static calculateStrength(password: string, options: PasswordOptions): PasswordStrength {
    const length = password.length;
    const charsetSize = this.getCharacterPool(options).length;
    
    const entropy = length * Math.log2(charsetSize);
    
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^A-Za-z0-9]/.test(password);
    const hasRepeating = /(.)\1{2,}/.test(password);
    
    let score = 0;
    const feedback: string[] = [];

    if (length >= 8) score += 1;
    else feedback.push('Use at least 8 characters');

    if (length >= 12) score += 1;
    else if (length >= 8) feedback.push('Consider using 12+ characters for better security');

    if (hasUpper && hasLower) score += 1;
    else feedback.push('Include both uppercase and lowercase letters');

    if (hasNumbers) score += 1;
    else feedback.push('Include numbers');

    if (hasSymbols) score += 1;
    else feedback.push('Include special symbols');

    if (hasRepeating) {
      score = Math.max(0, score - 1);
      feedback.push('Avoid repeating characters');
    }

    const labels: PasswordStrength['label'][] = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const label = labels[Math.min(score, 4)];
    const color = PASSWORD_STRENGTH_CONFIG.colors[label];

    const crackTime = this.estimateCrackTime(entropy);

    return {
      score,
      label,
      entropy: Math.round(entropy * 10) / 10,
      crackTime,
      feedback,
      color
    };
  }

  private static estimateCrackTime(entropy: number): string {
    const guessesPerSecond = 1e9;
    const averageGuesses = Math.pow(2, entropy - 1);
    const seconds = averageGuesses / guessesPerSecond;

    if (seconds < 1) return CRACK_TIME_ESTIMATES.instant;
    if (seconds < 60) return CRACK_TIME_ESTIMATES.seconds;
    if (seconds < 3600) return CRACK_TIME_ESTIMATES.minutes;
    if (seconds < 86400) return CRACK_TIME_ESTIMATES.hours;
    if (seconds < 2592000) return CRACK_TIME_ESTIMATES.days;
    if (seconds < 31536000) return CRACK_TIME_ESTIMATES.months;
    if (seconds < 3153600000) return CRACK_TIME_ESTIMATES.years;
    return CRACK_TIME_ESTIMATES.centuries;
  }

  static generateMultiple(options: PasswordOptions, count: number = 5): GeneratedPassword[] {
    const passwords: GeneratedPassword[] = [];
    
    for (let i = 0; i < count; i++) {
      const password = this.generate(options);
      const strength = this.calculateStrength(password, options);
      
      passwords.push({
        id: `pwd_${Date.now()}_${i}`,
        password,
        strength,
        options: { ...options },
        timestamp: Date.now()
      });
    }
    
    return passwords;
  }
}