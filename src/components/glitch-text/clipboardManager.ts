// 剪贴板管理器

export interface ClipboardResult {
  success: boolean;
  error?: string;
  method?: 'modern' | 'legacy' | 'manual';
}

export interface ClipboardOptions {
  fallbackToLegacy?: boolean;
  showManualFallback?: boolean;
  timeout?: number;
}

/**
 * 剪贴板管理器类
 */
export class ClipboardManager {
  private static instance: ClipboardManager;
  private isModernAPISupported: boolean;
  private isSecureContext: boolean;

  private constructor() {
    this.isModernAPISupported = typeof navigator !== 'undefined' && 'clipboard' in navigator;
    this.isSecureContext = typeof window !== 'undefined' && window.isSecureContext;
  }

  /**
   * 获取单例实例
   */
  public static getInstance(): ClipboardManager {
    if (!ClipboardManager.instance) {
      ClipboardManager.instance = new ClipboardManager();
    }
    return ClipboardManager.instance;
  }

  /**
   * 检查剪贴板API支持情况
   */
  public checkSupport(): {
    modern: boolean;
    legacy: boolean;
    secure: boolean;
  } {
    return {
      modern: this.isModernAPISupported && this.isSecureContext,
      legacy: typeof document !== 'undefined' && 'execCommand' in document,
      secure: this.isSecureContext
    };
  }

  /**
   * 复制文本到剪贴板
   */
  public async copyText(
    text: string, 
    options: ClipboardOptions = {}
  ): Promise<ClipboardResult> {
    const {
      fallbackToLegacy = true,
      timeout = 5000
    } = options;

    // 首先尝试现代剪贴板API
    if (this.isModernAPISupported && this.isSecureContext) {
      try {
        const result = await this.copyWithModernAPI(text, timeout);
        if (result.success) {
          return result;
        }
      } catch (error) {
        console.warn('Modern clipboard API failed:', error);
      }
    }

    // 降级到传统方法
    if (fallbackToLegacy) {
      try {
        const result = await this.copyWithLegacyAPI(text);
        if (result.success) {
          return result;
        }
      } catch (error) {
        console.warn('Legacy clipboard API failed:', error);
      }
    }

    // 所有方法都失败了
    return {
      success: false,
      error: 'All clipboard methods failed. Please copy manually.',
      method: 'manual'
    };
  }

  /**
   * 使用现代剪贴板API复制
   */
  private async copyWithModernAPI(text: string, timeout: number): Promise<ClipboardResult> {
    return new Promise((resolve) => {
      const timeoutId = setTimeout(() => {
        resolve({
          success: false,
          error: 'Clipboard operation timed out',
          method: 'modern'
        });
      }, timeout);

      navigator.clipboard.writeText(text)
        .then(() => {
          clearTimeout(timeoutId);
          resolve({
            success: true,
            method: 'modern'
          });
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          resolve({
            success: false,
            error: error.message || 'Modern clipboard API failed',
            method: 'modern'
          });
        });
    });
  }

  /**
   * 使用传统方法复制
   */
  private async copyWithLegacyAPI(text: string): Promise<ClipboardResult> {
    return new Promise((resolve) => {
      try {
        // 创建临时文本区域
        const textArea = document.createElement('textarea');
        textArea.value = text;
        
        // 设置样式使其不可见
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        textArea.style.opacity = '0';
        textArea.style.pointerEvents = 'none';
        textArea.setAttribute('readonly', '');
        textArea.setAttribute('aria-hidden', 'true');
        
        // 添加到DOM
        document.body.appendChild(textArea);
        
        // 选择文本
        textArea.focus();
        textArea.select();
        textArea.setSelectionRange(0, text.length);
        
        // 执行复制命令
        const success = document.execCommand('copy');
        
        // 清理
        document.body.removeChild(textArea);
        
        resolve({
          success,
          error: success ? undefined : 'execCommand failed',
          method: 'legacy'
        });
      } catch (error) {
        resolve({
          success: false,
          error: error instanceof Error ? error.message : 'Legacy clipboard failed',
          method: 'legacy'
        });
      }
    });
  }

  /**
   * 读取剪贴板内容（如果支持）
   */
  public async readText(): Promise<string | null> {
    if (!this.isModernAPISupported || !this.isSecureContext) {
      return null;
    }

    try {
      return await navigator.clipboard.readText();
    } catch (error) {
      console.warn('Failed to read clipboard:', error);
      return null;
    }
  }

  /**
   * 检查是否有读取权限
   */
  public async checkReadPermission(): Promise<boolean> {
    if (!this.isModernAPISupported || !this.isSecureContext) {
      return false;
    }

    try {
      const permission = await navigator.permissions.query({ name: 'clipboard-read' as PermissionName });
      return permission.state === 'granted';
    } catch (error) {
      return false;
    }
  }

  /**
   * 检查是否有写入权限
   */
  public async checkWritePermission(): Promise<boolean> {
    if (!this.isModernAPISupported || !this.isSecureContext) {
      return false;
    }

    try {
      const permission = await navigator.permissions.query({ name: 'clipboard-write' as PermissionName });
      return permission.state === 'granted';
    } catch (error) {
      return false;
    }
  }

  /**
   * 创建手动复制提示
   */
  public createManualCopyFallback(text: string): {
    element: HTMLElement;
    cleanup: () => void;
  } {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.style.zIndex = '9999';

    const content = document.createElement('div');
    content.className = 'bg-white rounded-lg p-6 max-w-md mx-4';
    content.innerHTML = `
      <h3 class="text-lg font-semibold mb-4">Copy Text Manually</h3>
      <p class="text-gray-600 mb-4">Please select the text below and copy it manually:</p>
      <textarea 
        readonly 
        class="w-full h-32 p-3 border rounded-md font-mono text-sm resize-none"
        style="font-family: monospace;"
      >${text}</textarea>
      <div class="flex justify-end gap-2 mt-4">
        <button class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          Close
        </button>
      </div>
    `;

    modal.appendChild(content);

    // 添加事件监听器
    const textarea = content.querySelector('textarea') as HTMLTextAreaElement;
    const closeButton = content.querySelector('button') as HTMLButtonElement;

    // 自动选择文本
    setTimeout(() => {
      textarea.focus();
      textarea.select();
    }, 100);

    const cleanup = () => {
      if (modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    };

    closeButton.addEventListener('click', cleanup);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        cleanup();
      }
    });

    // 添加到DOM
    document.body.appendChild(modal);

    return { element: modal, cleanup };
  }
}

/**
 * 便捷函数：复制文本
 */
export async function copyToClipboard(
  text: string, 
  options?: ClipboardOptions
): Promise<ClipboardResult> {
  const manager = ClipboardManager.getInstance();
  return manager.copyText(text, options);
}

/**
 * 便捷函数：检查剪贴板支持
 */
export function checkClipboardSupport() {
  const manager = ClipboardManager.getInstance();
  return manager.checkSupport();
}

/**
 * 便捷函数：创建手动复制回退
 */
export function createManualCopyFallback(text: string) {
  const manager = ClipboardManager.getInstance();
  return manager.createManualCopyFallback(text);
}

/**
 * React Hook：使用剪贴板
 */
export function useClipboard() {
  const manager = ClipboardManager.getInstance();

  return {
    copy: (text: string, options?: ClipboardOptions) => manager.copyText(text, options),
    read: () => manager.readText(),
    checkSupport: () => manager.checkSupport(),
    checkReadPermission: () => manager.checkReadPermission(),
    checkWritePermission: () => manager.checkWritePermission(),
    createManualFallback: (text: string) => manager.createManualCopyFallback(text)
  };
}