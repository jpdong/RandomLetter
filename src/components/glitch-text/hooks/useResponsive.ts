'use client';

import { useState, useEffect } from 'react';
import { ResponsiveManager, BreakpointKey } from '../responsive';

/**
 * React Hook: 使用响应式断点
 */
export function useResponsive() {
  const [breakpoint, setBreakpoint] = useState<BreakpointKey>('md');
  
  useEffect(() => {
    const manager = ResponsiveManager.getInstance();
    setBreakpoint(manager.getCurrentBreakpoint());
    
    const unsubscribe = manager.addListener(setBreakpoint);
    return unsubscribe;
  }, []);
  
  const manager = ResponsiveManager.getInstance();
  
  return {
    breakpoint,
    isMobile: manager.isMobile(),
    isTablet: manager.isTablet(),
    isDesktop: manager.isDesktop(),
    isBreakpointUp: (bp: BreakpointKey) => manager.isBreakpointUp(bp),
    isBreakpointDown: (bp: BreakpointKey) => manager.isBreakpointDown(bp)
  };
}