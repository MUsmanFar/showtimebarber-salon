"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'group relative inline-flex items-center justify-center rounded-sm font-montserrat font-semibold tracking-wider uppercase overflow-hidden transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]': variant === 'primary',
            'border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]': variant === 'outline',
            'text-gold-500 hover:bg-white/5': variant === 'ghost',
            'h-9 px-4 text-xs': size === 'sm',
            'h-12 px-8 text-sm': size === 'md',
            'h-14 px-10 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {variant === 'primary' && (
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        )}
        <span className="relative z-10 flex items-center justify-center">{children as React.ReactNode}</span>
      </motion.button>
    );
  }
);
Button.displayName = 'Button';
