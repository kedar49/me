'use client';

import { Menu, ExternalLink, Brain } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef, useCallback } from 'react';

import CustomThemeToggle from '@/components/CustomThemeToggle';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';

import { GlowingDot } from './glowingDot';

const navItems = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'edu',
    path: '/edu',
  },
  {
    name: 'misc.',
    path: '/misc',
  },
];

const externalBlog = {
  name: 'neuronreads',
  url: 'https://neuronreads.vercel.app/',
};

const itemsWithGlowingDot: string[] = [];

export function Navbar() {
  // Add keyframes for mobile nav animations
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `;
    if (!document.head.querySelector('style[data-nav-animations]')) {
      style.setAttribute('data-nav-animations', 'true');
      document.head.appendChild(style);
    }
  }
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isOpen, setIsOpen] = useState(false);
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const isCurrentPathActive = (path: string, pathname: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const getCurrentPageIndex = useCallback(() => {
    return navItems.findIndex(({ path }) => {
      return isCurrentPathActive(path, pathname);
    });
  }, [pathname]);

  useEffect(() => {
    setActiveIndex(getCurrentPageIndex());
  }, [getCurrentPageIndex]);

  const handleNavigation = (index: string) => {
    setIsOpen(false);
    setActiveIndex(Number(index));
  };

  return (
    <aside className="mb-16 w-full mx-auto font-departure-mono">
      <div className="flex justify-between items-center">
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="p-2">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="border-b border-muted/20 pb-4">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <SheetTitle className="text-left cursor-pointer hover:text-primary transition-all duration-200 font-geist-mono text-lg">
                    kedar sathe
                  </SheetTitle>
                </Link>
                <SheetDescription className="sr-only">
                  Navigation menu for kedar sathe&apos;s personal website
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-1 font-departure-mono">
                {Object.entries(navItems).map(([index, { name, path }]) => {
                  const isActive = isCurrentPathActive(path, pathname);
                  return (
                    <Link
                      key={path}
                      href={path}
                      passHref
                      onClick={() => handleNavigation(index)}
                      ref={el => {
                        navRefs.current[index] = el;
                      }}
                      className={`group w-full text-left py-3 px-2 rounded-lg transition-all duration-300 ease-out transform hover:translate-x-1 hover:bg-muted/30 ${
                        isActive 
                          ? 'text-primary bg-muted/20 translate-x-1' 
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                      style={{
                        animationDelay: `${parseInt(index) * 100}ms`,
                        animation: isOpen ? 'slideInLeft 0.4s ease-out forwards' : 'none'
                      }}
                    >
                      {itemsWithGlowingDot.includes(name) && !isActive && (
                        <div className="relative top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <GlowingDot />
                        </div>
                      )}
                      <span className="z-10 relative">{name}</span>
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-muted/10 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : ''}`} />
                    </Link>
                  );
                })}
                
                {/* External Blog Link */}
                <div className="mt-6 pt-4 border-t border-muted/20">
                  <a
                    href={externalBlog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex items-center justify-between py-3 px-2 rounded-lg transition-all duration-300 ease-out transform hover:translate-x-1 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 text-muted-foreground hover:text-primary"
                    style={{
                      animationDelay: `${navItems.length * 100}ms`,
                      animation: isOpen ? 'slideInLeft 0.4s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Brain className="h-4 w-4 text-blue-500 group-hover:text-purple-500 transition-colors duration-300" />
                      <span className="z-10 relative font-medium">{externalBlog.name}</span>
                    </div>
                    <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="hidden lg:flex relative flex-wrap items-center gap-0">
          {activeIndex !== -1 && (
            <div
              className="absolute bottom-0 left-0 hidden lg:block outline-dashed outline-[0.2em] outline-muted transition-all duration-300 ease-out rounded-md"
              style={{
                width: navRefs.current[activeIndex]?.offsetWidth,
                height: navRefs.current[activeIndex]?.offsetHeight,
                transform: `translateX(${navRefs.current[activeIndex]?.offsetLeft || 0}px)`,
              }}
            />
          )}
          {Object.entries(navItems).map(([index, { name, path }]) => {
            const isActive = isCurrentPathActive(path, pathname);
            return (
              <Link
                key={path}
                href={path}
                passHref
                onMouseEnter={() => setActiveIndex(Number(index))}
                onMouseLeave={() => setActiveIndex(getCurrentPageIndex())}
                ref={el => {
                  navRefs.current[index] = el;
                }}
                className={`group relative transition-colors py-1 px-3 lg:py-2 lg:px-5 rounded-md ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-muted-foreground'
                }`}
              >
                {itemsWithGlowingDot.includes(name) && !isActive && (
                  <div className="absolute top-1 right-1">
                    <GlowingDot />
                  </div>
                )}
                <span className="z-10">{name}</span>
              </Link>
            );
          })}
          
          {/* External Blog Link - Desktop */}
          <a
            href={externalBlog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition-all duration-300 py-1 px-3 lg:py-2 lg:px-5 rounded-md text-muted-foreground hover:text-primary flex items-center space-x-1 ml-2 border-l border-muted/30 pl-4"
          >
            <Brain className="h-4 w-4 text-blue-500 group-hover:text-purple-500 transition-colors duration-300" />
            <span className="z-10 font-medium">{externalBlog.name}</span>
            <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
          </a>
        </nav>
        <div className="flex-shrink-0 ml-4">
          <CustomThemeToggle />
        </div>
      </div>
    </aside>
  );
}
