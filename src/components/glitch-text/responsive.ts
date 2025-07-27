// 响应式设计工具类

export interface BreakpointConfig {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export const BREAKPOINTS: BreakpointConfig = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};

export type BreakpointKey = keyof BreakpointConfig;

/**
 * 响应式管理器类
 */
export class ResponsiveManager {
  private static instance: ResponsiveManager;
  private currentBreakpoint: BreakpointKey = 'md';
  private listeners: Array<(breakpoint: BreakpointKey) => void> = [];

  private constructor() {
    if (typeof window !== 'undefined') {
      this.updateBreakpoint();
      window.addEventListener('resize', this.handleResize);
    }
  }

  public static getInstance(): ResponsiveManager {
    if (!ResponsiveManager.instance) {
      ResponsiveManager.instance = new ResponsiveManager();
    }
    return ResponsiveManager.instance;
  }

  private handleResize = () => {
    this.updateBreakpoint();
  };

  private updateBreakpoint() {
    const width = window.innerWidth;
    let newBreakpoint: BreakpointKey = 'xs';

    if (width >= BREAKPOINTS.xxl) {
      newBreakpoint = 'xxl';
    } else if (width >= BREAKPOINTS.xl) {
      newBreakpoint = 'xl';
    } else if (width >= BREAKPOINTS.lg) {
      newBreakpoint = 'lg';
    } else if (width >= BREAKPOINTS.md) {
      newBreakpoint = 'md';
    } else if (width >= BREAKPOINTS.sm) {
      newBreakpoint = 'sm';
    }

    if (newBreakpoint !== this.currentBreakpoint) {
      this.currentBreakpoint = newBreakpoint;
      this.notifyListeners();
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentBreakpoint));
  }

  public getCurrentBreakpoint(): BreakpointKey {
    return this.currentBreakpoint;
  }

  public addListener(listener: (breakpoint: BreakpointKey) => void): () => void {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  public isBreakpoint(breakpoint: BreakpointKey): boolean {
    return this.currentBreakpoint === breakpoint;
  }

  public isBreakpointUp(breakpoint: BreakpointKey): boolean {
    return BREAKPOINTS[this.currentBreakpoint] >= BREAKPOINTS[breakpoint];
  }

  public isBreakpointDown(breakpoint: BreakpointKey): boolean {
    return BREAKPOINTS[this.currentBreakpoint] <= BREAKPOINTS[breakpoint];
  }

  public isMobile(): boolean {
    return this.isBreakpointDown('sm');
  }

  public isTablet(): boolean {
    return this.isBreakpoint('md') || this.isBreakpoint('sm');
  }

  public isDesktop(): boolean {
    return this.isBreakpointUp('lg');
  }

  public destroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize);
    }
    this.listeners = [];
  }
}

/**
 * 获取响应式类名
 */
export function getResponsiveClasses(config: {
  base?: string;
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
}): string {
  const classes: string[] = [];
  
  if (config.base) classes.push(config.base);
  if (config.xs) classes.push(`xs:${config.xs}`);
  if (config.sm) classes.push(`sm:${config.sm}`);
  if (config.md) classes.push(`md:${config.md}`);
  if (config.lg) classes.push(`lg:${config.lg}`);
  if (config.xl) classes.push(`xl:${config.xl}`);
  if (config.xxl) classes.push(`2xl:${config.xxl}`);
  
  return classes.join(' ');
}

/**
 * 获取响应式文本大小
 */
export function getResponsiveTextSize(size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'): string {
  const sizeMap = {
    xs: 'text-xs sm:text-sm md:text-base',
    sm: 'text-sm sm:text-base md:text-lg',
    base: 'text-base sm:text-lg md:text-xl',
    lg: 'text-lg sm:text-xl md:text-2xl',
    xl: 'text-xl sm:text-2xl md:text-3xl',
    '2xl': 'text-2xl sm:text-3xl md:text-4xl',
    '3xl': 'text-3xl sm:text-4xl md:text-5xl',
    '4xl': 'text-4xl sm:text-5xl md:text-6xl',
    '5xl': 'text-5xl sm:text-6xl md:text-7xl',
    '6xl': 'text-6xl sm:text-7xl md:text-8xl'
  };
  
  return sizeMap[size] || sizeMap.base;
}

/**
 * 获取响应式间距
 */
export function getResponsiveSpacing(spacing: 'xs' | 'sm' | 'md' | 'lg' | 'xl'): string {
  const spacingMap = {
    xs: 'p-2 sm:p-3 md:p-4',
    sm: 'p-3 sm:p-4 md:p-6',
    md: 'p-4 sm:p-6 md:p-8',
    lg: 'p-6 sm:p-8 md:p-12',
    xl: 'p-8 sm:p-12 md:p-16'
  };
  
  return spacingMap[spacing] || spacingMap.md;
}

/**
 * 获取响应式网格列数
 */
export function getResponsiveColumns(config: {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}): string {
  const classes: string[] = [];
  
  if (config.xs) classes.push(`grid-cols-${config.xs}`);
  if (config.sm) classes.push(`sm:grid-cols-${config.sm}`);
  if (config.md) classes.push(`md:grid-cols-${config.md}`);
  if (config.lg) classes.push(`lg:grid-cols-${config.lg}`);
  if (config.xl) classes.push(`xl:grid-cols-${config.xl}`);
  
  return classes.join(' ');
}

/**
 * 检查是否为触摸设备
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore
    navigator.msMaxTouchPoints > 0
  );
}

/**
 * 获取触摸友好的尺寸
 */
export function getTouchFriendlySize(baseSize: string): string {
  if (!isTouchDevice()) return baseSize;
  
  const touchSizeMap: Record<string, string> = {
    'w-8 h-8': 'w-12 h-12',
    'w-10 h-10': 'w-14 h-14',
    'w-12 h-12': 'w-16 h-16',
    'px-2 py-1': 'px-3 py-2',
    'px-3 py-2': 'px-4 py-3',
    'px-4 py-2': 'px-6 py-3',
    'text-xs': 'text-sm',
    'text-sm': 'text-base',
    'text-base': 'text-lg'
  };
  
  return touchSizeMap[baseSize] || baseSize;
}

/**
 * 获取设备类型
 */
export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  const manager = ResponsiveManager.getInstance();
  
  if (manager.isMobile()) return 'mobile';
  if (manager.isTablet()) return 'tablet';
  return 'desktop';
}

// useResponsive hook 已移动到 hooks/useResponsive.ts