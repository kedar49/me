'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';

interface LinkHoverProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function LinkHover({ href, children, className, external = false }: LinkHoverProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  const linkClasses = cn(
    'relative inline-flex items-center group transition-colors duration-300',
    isActive ? 'text-primary font-medium' : 'hover:text-primary',
    className
  );

  const linkContent = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
      {!isActive && (
        <span 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundSize: '200% 100%' }}
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} className={linkClasses} target="_blank" rel="noopener noreferrer">
        {linkContent}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses}>
      {linkContent}
    </Link>
  );
}