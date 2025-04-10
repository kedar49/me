'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export function HoverCard({ children, className = '' }: HoverCardProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 } 
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  );
}

interface ButtonHoverEffectProps {
  children: React.ReactNode;
  className?: string;
}

export function ButtonHoverEffect({ children, className = '' }: ButtonHoverEffectProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <motion.div 
        className="absolute inset-0 bg-primary/10 rounded-md opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 1,
          transition: { duration: 0.2 } 
        }}
      />
      {children}
    </motion.div>
  );
}

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInView({ children, delay = 0, className = '' }: FadeInViewProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}