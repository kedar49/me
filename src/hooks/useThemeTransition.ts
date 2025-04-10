'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

/**
 * A custom hook that provides smooth theme transitions
 * with a fade effect when switching between light and dark modes.
 */
export function useThemeTransition() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle theme toggle with transition
  const toggleTheme = () => {
    if (!mounted) return;
    
    setIsTransitioning(true);
    
    // Short delay to allow the fade effect to start
    setTimeout(() => {
      if (resolvedTheme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
      
      // Allow time for the theme to change before ending transition
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 50);
  };

  // Handle component mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    theme,
    resolvedTheme,
    toggleTheme,
    isTransitioning,
    mounted
  };
}