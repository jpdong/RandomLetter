// 强度控制器的单元测试

import { 
  IntensityController, 
  createIntensityController,
  getIntensityConfig,
  getIntensityDisplayInfo,
  adjustIntensityForPreference
} from '../intensityController';
import { GlitchIntensity } from '../types';

describe('IntensityController', () => {
  describe('基础功能测试', () => {
    test('应该创建默认强度为medium的控制器', () => {
      const controller = new IntensityController();
      expect(controller.getCurrentIntensity()).toBe('medium');
    });

    test('应该创建指定强度的控制器', () => {
      const controller = new IntensityController('heavy');
      expect(controller.getCurrentIntensity()).toBe('heavy');
    });

    test('应该能够设置强度', () => {
      const controller = new IntensityController('light');
      controller.setIntensity('heavy');
      expect(controller.getCurrentIntensity()).toBe('heavy');
    });

    test('应该返回当前配置', () => {
      const controller = new IntensityController('medium');
      const config = controller.getCurrentConfig();
      
      expect(config).toHaveProperty('intensity', 'medium');
      expect(config).toHaveProperty('density');
      expect(config).toHaveProperty('maxCharsPerPosition');
      expect(config).toHaveProperty('useReplacements');
      expect(config).toHaveProperty('useCombining');
      expect(config).toHaveProperty('useSymbols');
    });
  });

  describe('强度值转换测试', () => {
    test('应该正确转换强度到数值', () => {
      const controller = new IntensityController();
      
      controller.setIntensity('light');
      expect(controller.getIntensityValue()).toBe(1);
      
      controller.setIntensity('medium');
      expect(controller.getIntensityValue()).toBe(2);
      
      controller.setIntensity('heavy');
      expect(controller.getIntensityValue()).toBe(3);
    });

    test('应该正确从数值设置强度', () => {
      const controller = new IntensityController();
      
      controller.setIntensityFromValue(1);
      expect(controller.getCurrentIntensity()).toBe('light');
      
      controller.setIntensityFromValue(2);
      expect(controller.getCurrentIntensity()).toBe('medium');
      
      controller.setIntensityFromValue(3);
      expect(controller.getCurrentIntensity()).toBe('heavy');
    });

    test('应该处理超出范围的数值', () => {
      const controller = new IntensityController();
      
      controller.setIntensityFromValue(0);
      expect(controller.getCurrentIntensity()).toBe('light');
      
      controller.setIntensityFromValue(5);
      expect(controller.getCurrentIntensity()).toBe('heavy');
    });
  });

  describe('强度调整测试', () => {
    test('应该能够增加强度', () => {
      const controller = new IntensityController('light');
      
      const newIntensity = controller.increaseIntensity();
      expect(newIntensity).toBe('medium');
      expect(controller.getCurrentIntensity()).toBe('medium');
      
      controller.increaseIntensity();
      expect(controller.getCurrentIntensity()).toBe('heavy');
    });

    test('应该能够减少强度', () => {
      const controller = new IntensityController('heavy');
      
      const newIntensity = controller.decreaseIntensity();
      expect(newIntensity).toBe('medium');
      expect(controller.getCurrentIntensity()).toBe('medium');
      
      controller.decreaseIntensity();
      expect(controller.getCurrentIntensity()).toBe('light');
    });

    test('应该正确检查是否可以调整强度', () => {
      const controller = new IntensityController('light');
      
      expect(controller.canIncreaseIntensity()).toBe(true);
      expect(controller.canDecreaseIntensity()).toBe(false);
      
      controller.setIntensity('heavy');
      expect(controller.canIncreaseIntensity()).toBe(false);
      expect(controller.canDecreaseIntensity()).toBe(true);
      
      controller.setIntensity('medium');
      expect(controller.canIncreaseIntensity()).toBe(true);
      expect(controller.canDecreaseIntensity()).toBe(true);
    });

    test('在边界处不应该超出范围', () => {
      const controller = new IntensityController('light');
      
      controller.decreaseIntensity();
      expect(controller.getCurrentIntensity()).toBe('light');
      
      controller.setIntensity('heavy');
      controller.increaseIntensity();
      expect(controller.getCurrentIntensity()).toBe('heavy');
    });
  });

  describe('显示信息测试', () => {
    test('应该返回强度描述', () => {
      const controller = new IntensityController('medium');
      const description = controller.getIntensityDescription();
      
      expect(description).toBeTruthy();
      expect(typeof description).toBe('string');
    });

    test('应该返回强度指示器', () => {
      const controller = new IntensityController();
      
      controller.setIntensity('light');
      expect(controller.getIntensityIndicator()).toBe('●○○');
      
      controller.setIntensity('medium');
      expect(controller.getIntensityIndicator()).toBe('●●○');
      
      controller.setIntensity('heavy');
      expect(controller.getIntensityIndicator()).toBe('●●●');
    });

    test('应该返回正确的颜色类名', () => {
      const controller = new IntensityController();
      
      controller.setIntensity('light');
      expect(controller.getIntensityColorClass()).toBe('text-green-500');
      
      controller.setIntensity('medium');
      expect(controller.getIntensityColorClass()).toBe('text-yellow-500');
      
      controller.setIntensity('heavy');
      expect(controller.getIntensityColorClass()).toBe('text-red-500');
    });

    test('应该返回正确的背景颜色类名', () => {
      const controller = new IntensityController();
      
      controller.setIntensity('light');
      expect(controller.getIntensityBgColorClass()).toBe('bg-green-100');
      
      controller.setIntensity('medium');
      expect(controller.getIntensityBgColorClass()).toBe('bg-yellow-100');
      
      controller.setIntensity('heavy');
      expect(controller.getIntensityBgColorClass()).toBe('bg-red-100');
    });
  });

  describe('自动调整测试', () => {
    test('应该根据文本长度自动调整强度', () => {
      const controller = new IntensityController('heavy');
      
      // 短文本保持原强度
      let adjusted = controller.autoAdjustForTextLength(5);
      expect(adjusted).toBe('heavy');
      
      // 中等长度文本降低强度
      adjusted = controller.autoAdjustForTextLength(30);
      expect(adjusted).toBe('medium');
      
      // 长文本使用轻微强度
      adjusted = controller.autoAdjustForTextLength(100);
      expect(adjusted).toBe('light');
    });
  });

  describe('配置验证测试', () => {
    test('应该验证有效配置', () => {
      const controller = new IntensityController();
      const config = controller.getCurrentConfig();
      const validation = controller.validateConfig(config);
      
      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    test('应该检测无效的密度值', () => {
      const controller = new IntensityController();
      const config = controller.createCustomConfig({ density: 1.5 });
      const validation = controller.validateConfig(config);
      
      expect(validation.isValid).toBe(false);
      expect(validation.errors).toContain('Density must be between 0 and 1');
    });

    test('应该检测无效的最大字符数', () => {
      const controller = new IntensityController();
      const config = controller.createCustomConfig({ maxCharsPerPosition: 15 });
      const validation = controller.validateConfig(config);
      
      expect(validation.isValid).toBe(false);
      expect(validation.errors).toContain('Max chars per position must be between 1 and 10');
    });
  });

  describe('静态方法测试', () => {
    test('应该返回所有强度选项', () => {
      const intensities = IntensityController.getAllIntensities();
      expect(intensities).toEqual(['light', 'medium', 'heavy']);
    });

    test('应该返回本地化标签', () => {
      expect(IntensityController.getIntensityLabel('light', 'en')).toBe('Light');
      expect(IntensityController.getIntensityLabel('medium', 'zh')).toBe('中等');
      expect(IntensityController.getIntensityLabel('heavy')).toBe('Heavy'); // 默认英文
    });

    test('应该比较强度级别', () => {
      expect(IntensityController.compareIntensities('light', 'medium')).toBeLessThan(0);
      expect(IntensityController.compareIntensities('medium', 'light')).toBeGreaterThan(0);
      expect(IntensityController.compareIntensities('heavy', 'heavy')).toBe(0);
    });

    test('应该验证强度有效性', () => {
      expect(IntensityController.isValidIntensity('light')).toBe(true);
      expect(IntensityController.isValidIntensity('invalid')).toBe(false);
    });
  });
});

describe('便捷函数测试', () => {
  test('createIntensityController应该创建控制器', () => {
    const controller = createIntensityController('heavy');
    expect(controller).toBeInstanceOf(IntensityController);
    expect(controller.getCurrentIntensity()).toBe('heavy');
  });

  test('getIntensityConfig应该返回配置', () => {
    const config = getIntensityConfig('medium');
    expect(config.intensity).toBe('medium');
  });

  test('getIntensityDisplayInfo应该返回显示信息', () => {
    const info = getIntensityDisplayInfo('light');
    
    expect(info).toHaveProperty('label');
    expect(info).toHaveProperty('description');
    expect(info).toHaveProperty('indicator');
    expect(info).toHaveProperty('colorClass');
    expect(info).toHaveProperty('bgColorClass');
    expect(info).toHaveProperty('value');
  });

  test('adjustIntensityForPreference应该根据偏好调整', () => {
    expect(adjustIntensityForPreference('heavy', 'readable')).toBe('medium');
    expect(adjustIntensityForPreference('light', 'extreme')).toBe('medium');
    expect(adjustIntensityForPreference('medium', 'balanced')).toBe('medium');
  });
});