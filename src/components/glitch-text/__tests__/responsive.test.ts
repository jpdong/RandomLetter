// 响应式功能的单元测试

import { 
  ResponsiveManager, 
  BREAKPOINTS,
  getResponsiveClasses,
  getResponsiveTextSize,
  getResponsiveSpacing,
  getResponsiveColumns,
  isTouchDevice,
  getTouchFriendlySize,
  getDeviceType
} from '../responsive';

// Mock window object
const mockWindow = {
  innerWidth: 1024,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn()
};

Object.defineProperty(global, 'window', {
  value: mockWindow,
  writable: true
});

// Mock navigator
Object.defineProperty(global, 'navigator', {
  value: {
    maxTouchPoints: 0,
    msMaxTouchPoints: 0
  },
  writable: true
});

describe('ResponsiveManager', () => {
  let manager: ResponsiveManager;

  beforeEach(() => {
    // Reset window width
    mockWindow.innerWidth = 1024;
    jest.clearAllMocks();
    
    // Get fresh instance
    manager = ResponsiveManager.getInstance();
  });

  describe('单例模式测试', () => {
    test('应该返回同一个实例', () => {
      const instance1 = ResponsiveManager.getInstance();
      const instance2 = ResponsiveManager.getInstance();
      
      expect(instance1).toBe(instance2);
    });
  });

  describe('断点检测测试', () => {
    test('应该正确检测lg断点', () => {
      mockWindow.innerWidth = 1024;
      const currentBreakpoint = manager.getCurrentBreakpoint();
      
      expect(currentBreakpoint).toBe('lg');
    });

    test('应该正确检测md断点', () => {
      mockWindow.innerWidth = 800;
      const currentBreakpoint = manager.getCurrentBreakpoint();
      
      expect(currentBreakpoint).toBe('md');
    });

    test('应该正确检测sm断点', () => {
      mockWindow.innerWidth = 600;
      const currentBreakpoint = manager.getCurrentBreakpoint();
      
      expect(currentBreakpoint).toBe('sm');
    });

    test('应该正确检测xs断点', () => {
      mockWindow.innerWidth = 400;
      const currentBreakpoint = manager.getCurrentBreakpoint();
      
      expect(currentBreakpoint).toBe('xs');
    });
  });

  describe('断点比较测试', () => {
    test('应该正确检查断点向上', () => {
      mockWindow.innerWidth = 1024; // lg
      
      expect(manager.isBreakpointUp('md')).toBe(true);
      expect(manager.isBreakpointUp('lg')).toBe(true);
      expect(manager.isBreakpointUp('xl')).toBe(false);
    });

    test('应该正确检查断点向下', () => {
      mockWindow.innerWidth = 800; // md
      
      expect(manager.isBreakpointDown('lg')).toBe(true);
      expect(manager.isBreakpointDown('md')).toBe(true);
      expect(manager.isBreakpointDown('sm')).toBe(false);
    });
  });

  describe('设备类型检测测试', () => {
    test('应该正确检测移动设备', () => {
      mockWindow.innerWidth = 500;
      
      expect(manager.isMobile()).toBe(true);
      expect(manager.isTablet()).toBe(false);
      expect(manager.isDesktop()).toBe(false);
    });

    test('应该正确检测平板设备', () => {
      mockWindow.innerWidth = 800;
      
      expect(manager.isMobile()).toBe(false);
      expect(manager.isTablet()).toBe(true);
      expect(manager.isDesktop()).toBe(false);
    });

    test('应该正确检测桌面设备', () => {
      mockWindow.innerWidth = 1200;
      
      expect(manager.isMobile()).toBe(false);
      expect(manager.isTablet()).toBe(false);
      expect(manager.isDesktop()).toBe(true);
    });
  });

  describe('监听器测试', () => {
    test('应该能够添加和移除监听器', () => {
      const listener = jest.fn();
      const unsubscribe = manager.addListener(listener);
      
      expect(typeof unsubscribe).toBe('function');
      
      // 模拟窗口大小变化
      mockWindow.innerWidth = 500;
      // 这里需要手动触发更新，因为我们mock了addEventListener
      
      unsubscribe();
      expect(listener).not.toHaveBeenCalled(); // 因为我们mock了事件
    });
  });
});

describe('响应式工具函数测试', () => {
  describe('getResponsiveClasses', () => {
    test('应该生成正确的响应式类名', () => {
      const classes = getResponsiveClasses({
        base: 'text-base',
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl'
      });
      
      expect(classes).toContain('text-base');
      expect(classes).toContain('sm:text-lg');
      expect(classes).toContain('md:text-xl');
      expect(classes).toContain('lg:text-2xl');
    });

    test('应该处理空配置', () => {
      const classes = getResponsiveClasses({});
      expect(classes).toBe('');
    });
  });

  describe('getResponsiveTextSize', () => {
    test('应该返回正确的响应式文本大小', () => {
      const size = getResponsiveTextSize('lg');
      expect(size).toContain('text-lg');
      expect(size).toContain('sm:text-xl');
      expect(size).toContain('md:text-2xl');
    });

    test('应该处理无效尺寸', () => {
      // @ts-ignore - 测试无效输入
      const size = getResponsiveTextSize('invalid');
      expect(size).toContain('text-base'); // 应该回退到默认值
    });
  });

  describe('getResponsiveSpacing', () => {
    test('应该返回正确的响应式间距', () => {
      const spacing = getResponsiveSpacing('md');
      expect(spacing).toContain('p-4');
      expect(spacing).toContain('sm:p-6');
      expect(spacing).toContain('md:p-8');
    });
  });

  describe('getResponsiveColumns', () => {
    test('应该生成正确的网格列类名', () => {
      const columns = getResponsiveColumns({
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4
      });
      
      expect(columns).toContain('grid-cols-1');
      expect(columns).toContain('sm:grid-cols-2');
      expect(columns).toContain('md:grid-cols-3');
      expect(columns).toContain('lg:grid-cols-4');
    });
  });
});

describe('触摸设备检测测试', () => {
  test('应该检测非触摸设备', () => {
    // 默认设置为非触摸设备
    expect(isTouchDevice()).toBe(false);
  });

  test('应该检测触摸设备（ontouchstart）', () => {
    Object.defineProperty(window, 'ontouchstart', {
      value: true,
      writable: true
    });
    
    expect(isTouchDevice()).toBe(true);
    
    // 清理
    delete (window as any).ontouchstart;
  });

  test('应该检测触摸设备（maxTouchPoints）', () => {
    Object.defineProperty(navigator, 'maxTouchPoints', {
      value: 1,
      writable: true
    });
    
    expect(isTouchDevice()).toBe(true);
    
    // 重置
    Object.defineProperty(navigator, 'maxTouchPoints', {
      value: 0,
      writable: true
    });
  });

  describe('getTouchFriendlySize', () => {
    test('非触摸设备应该返回原始尺寸', () => {
      const size = getTouchFriendlySize('w-8 h-8');
      expect(size).toBe('w-8 h-8');
    });

    test('触摸设备应该返回更大的尺寸', () => {
      // Mock触摸设备
      Object.defineProperty(window, 'ontouchstart', {
        value: true,
        writable: true
      });
      
      const size = getTouchFriendlySize('w-8 h-8');
      expect(size).toBe('w-12 h-12');
      
      // 清理
      delete (window as any).ontouchstart;
    });

    test('应该处理未映射的尺寸', () => {
      const size = getTouchFriendlySize('custom-size');
      expect(size).toBe('custom-size');
    });
  });
});

describe('getDeviceType', () => {
  test('应该返回正确的设备类型', () => {
    // 测试移动设备
    mockWindow.innerWidth = 500;
    expect(getDeviceType()).toBe('mobile');
    
    // 测试平板设备
    mockWindow.innerWidth = 800;
    expect(getDeviceType()).toBe('tablet');
    
    // 测试桌面设备
    mockWindow.innerWidth = 1200;
    expect(getDeviceType()).toBe('desktop');
  });
});

describe('服务端渲染兼容性测试', () => {
  test('应该在没有window对象时正常工作', () => {
    const originalWindow = global.window;
    // @ts-ignore
    delete global.window;
    
    // 这些函数应该不会抛出错误
    expect(() => {
      getResponsiveClasses({ base: 'test' });
      getResponsiveTextSize('base');
      getResponsiveSpacing('md');
    }).not.toThrow();
    
    // 恢复window对象
    global.window = originalWindow;
  });
});