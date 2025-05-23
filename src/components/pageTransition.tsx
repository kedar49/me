'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] // Custom ease curve for smooth transitions
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}