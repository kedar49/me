'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useThemeTransition } from '@/hooks/useThemeTransition';

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme, mounted, isTransitioning } = useThemeTransition();

  if (!mounted) return null;
  
  // Add a subtle overlay during theme transition
  const transitionOverlay = isTransitioning ? (
    <div 
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 pointer-events-none"
      style={{ opacity: isTransitioning ? 0.5 : 0 }}
    />
  ) : null;

  return (
    <>
      {transitionOverlay}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="group w-9 h-9 relative transition-all ease-in-out outline-dashed outline-muted outline-[0.2em] hover:bg-transparent hover:text-primary overflow-hidden"
              disabled={isTransitioning}
            >
              <span className="sr-only">Toggle theme</span>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-20 flex items-center justify-center h-full w-full">
                <div className="relative w-6 h-6">
                  <MoonIcon
                    className="h-6 w-6 absolute transition-all duration-300 ease-in-out"
                    style={{
                      opacity: resolvedTheme === 'dark' ? 1 : 0,
                      transform: `scale(${resolvedTheme === 'dark' ? 1 : 0.5}) rotate(${resolvedTheme === 'dark' ? '0deg' : '-90deg'})`,
                    }}
                  />
                  <SunIcon
                    className="h-6 w-6 absolute transition-all duration-300 ease-in-out"
                    style={{
                      opacity: resolvedTheme === 'light' ? 1 : 0,
                      transform: `scale(${resolvedTheme === 'light' ? 1 : 0.5}) rotate(${resolvedTheme === 'light' ? '0deg' : '90deg'})`,
                    }}
                  />
                </div>
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Toggle theme</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
