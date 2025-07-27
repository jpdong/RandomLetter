// 剪贴板管理器的单元测试

import { ClipboardManager, copyToClipboard, checkClipboardSupport } from '../clipboardManager';

// Mock navigator.clipboard
const mockClipboard = {
  writeText: jest.fn(),
  readText: jest.fn()
};

// Mock navigator.permissions
const mockPermissions = {
  query: jest.fn()
};

// Mock document.execCommand
const mockExecCommand = jest.fn();

// 设置全局mocks
Object.defineProperty(global, 'navigator', {
  value: {
    clipboard: mockClipboard,
    permissions: mockPermissions
  },
  writable: true
});

Object.defineProperty(global, 'document', {
  value: {
    execCommand: mockExecCommand,
    createElement: jest.fn(() => ({
      style: {},
      setAttribute: jest.fn(),
      focus: jest.fn(),
      select: jest.fn(),
      setSelectionRange: jest.fn()
    })),
    body: {
      appendChild: jest.fn(),
      removeChild: jest.fn()
    }
  },
  writable: true
});

Object.defineProperty(global, 'window', {
  value: {
    isSecureContext: true
  },
  writable: true
});

describe('ClipboardManager', () => {
  let manager: ClipboardManager;

  beforeEach(() => {
    // 重置所有mocks
    jest.clearAllMocks();
    
    // 获取新的管理器实例
    manager = ClipboardManager.getInstance();
  });

  describe('单例模式测试', () => {
    test('应该返回同一个实例', () => {
      const instance1 = ClipboardManager.getInstance();
      const instance2 = ClipboardManager.getInstance();
      
      expect(instance1).toBe(instance2);
    });
  });

  describe('支持检查测试', () => {
    test('应该正确检查现代API支持', () => {
      const support = manager.checkSupport();
      
      expect(support).toHaveProperty('modern');
      expect(support).toHaveProperty('legacy');
      expect(support).toHaveProperty('secure');
    });

    test('在安全上下文中应该支持现代API', () => {
      const support = manager.checkSupport();
      
      expect(support.modern).toBe(true);
      expect(support.secure).toBe(true);
    });
  });

  describe('现代API复制测试', () => {
    test('应该成功使用现代API复制文本', async () => {
      const testText = 'Hello World';
      mockClipboard.writeText.mockResolvedValue(undefined);

      const result = await manager.copyText(testText);

      expect(result.success).toBe(true);
      expect(result.method).toBe('modern');
      expect(mockClipboard.writeText).toHaveBeenCalledWith(testText);
    });

    test('现代API失败时应该返回错误', async () => {
      const testText = 'Hello World';
      const error = new Error('Permission denied');
      mockClipboard.writeText.mockRejectedValue(error);

      const result = await manager.copyText(testText, { fallbackToLegacy: false });

      expect(result.success).toBe(false);
      expect(result.error).toContain('All clipboard methods failed');
    });

    test('应该处理超时情况', async () => {
      const testText = 'Hello World';
      mockClipboard.writeText.mockImplementation(() => 
        new Promise(resolve => setTimeout(resolve, 1000))
      );

      const result = await manager.copyText(testText, { 
        fallbackToLegacy: false, 
        timeout: 100 
      });

      expect(result.success).toBe(false);
      expect(result.error).toContain('timed out');
    });
  });

  describe('传统API复制测试', () => {
    test('应该成功使用传统API复制文本', async () => {
      // 禁用现代API
      Object.defineProperty(global, 'navigator', {
        value: {},
        writable: true
      });

      const testText = 'Hello World';
      mockExecCommand.mockReturnValue(true);

      const newManager = ClipboardManager.getInstance();
      const result = await newManager.copyText(testText);

      expect(result.success).toBe(true);
      expect(result.method).toBe('legacy');
      expect(mockExecCommand).toHaveBeenCalledWith('copy');
    });

    test('传统API失败时应该返回错误', async () => {
      // 禁用现代API
      Object.defineProperty(global, 'navigator', {
        value: {},
        writable: true
      });

      const testText = 'Hello World';
      mockExecCommand.mockReturnValue(false);

      const newManager = ClipboardManager.getInstance();
      const result = await newManager.copyText(testText);

      expect(result.success).toBe(false);
      expect(result.error).toContain('execCommand failed');
    });
  });

  describe('读取功能测试', () => {
    test('应该能够读取剪贴板内容', async () => {
      const testText = 'Clipboard content';
      mockClipboard.readText.mockResolvedValue(testText);

      const result = await manager.readText();

      expect(result).toBe(testText);
      expect(mockClipboard.readText).toHaveBeenCalled();
    });

    test('读取失败时应该返回null', async () => {
      mockClipboard.readText.mockRejectedValue(new Error('Permission denied'));

      const result = await manager.readText();

      expect(result).toBeNull();
    });
  });

  describe('权限检查测试', () => {
    test('应该检查读取权限', async () => {
      mockPermissions.query.mockResolvedValue({ state: 'granted' });

      const hasPermission = await manager.checkReadPermission();

      expect(hasPermission).toBe(true);
      expect(mockPermissions.query).toHaveBeenCalledWith({ name: 'clipboard-read' });
    });

    test('应该检查写入权限', async () => {
      mockPermissions.query.mockResolvedValue({ state: 'denied' });

      const hasPermission = await manager.checkWritePermission();

      expect(hasPermission).toBe(false);
      expect(mockPermissions.query).toHaveBeenCalledWith({ name: 'clipboard-write' });
    });

    test('权限查询失败时应该返回false', async () => {
      mockPermissions.query.mockRejectedValue(new Error('Not supported'));

      const hasPermission = await manager.checkReadPermission();

      expect(hasPermission).toBe(false);
    });
  });

  describe('手动复制回退测试', () => {
    test('应该创建手动复制模态框', () => {
      const testText = 'Manual copy text';
      const mockModal = {
        className: '',
        style: { zIndex: '' },
        appendChild: jest.fn(),
        addEventListener: jest.fn()
      };
      
      const mockTextarea = {
        focus: jest.fn(),
        select: jest.fn()
      };

      const mockButton = {
        addEventListener: jest.fn()
      };

      (document.createElement as jest.Mock)
        .mockReturnValueOnce(mockModal)
        .mockReturnValueOnce({ 
          className: '', 
          innerHTML: '',
          querySelector: jest.fn()
            .mockReturnValueOnce(mockTextarea)
            .mockReturnValueOnce(mockButton)
        });

      const result = manager.createManualCopyFallback(testText);

      expect(result).toHaveProperty('element');
      expect(result).toHaveProperty('cleanup');
      expect(typeof result.cleanup).toBe('function');
    });
  });
});

describe('便捷函数测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('copyToClipboard应该工作', async () => {
    mockClipboard.writeText.mockResolvedValue(undefined);

    const result = await copyToClipboard('Test text');

    expect(result.success).toBe(true);
    expect(mockClipboard.writeText).toHaveBeenCalledWith('Test text');
  });

  test('checkClipboardSupport应该返回支持信息', () => {
    const support = checkClipboardSupport();

    expect(support).toHaveProperty('modern');
    expect(support).toHaveProperty('legacy');
    expect(support).toHaveProperty('secure');
  });
});

describe('错误处理测试', () => {
  test('应该处理undefined navigator', async () => {
    Object.defineProperty(global, 'navigator', {
      value: undefined,
      writable: true
    });

    const manager = ClipboardManager.getInstance();
    const result = await manager.copyText('test');

    expect(result.success).toBe(false);
  });

  test('应该处理非安全上下文', async () => {
    Object.defineProperty(global, 'window', {
      value: {
        isSecureContext: false
      },
      writable: true
    });

    const manager = ClipboardManager.getInstance();
    const support = manager.checkSupport();

    expect(support.secure).toBe(false);
    expect(support.modern).toBe(false);
  });
});