import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'action';
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300',
        variant === 'default' && 'bg-white/95 backdrop-blur-xl border-neutral-200/80 shadow-sm hover:shadow-md',
        variant === 'glass' && 'bg-white/80 backdrop-blur-xl border-white/20',
        variant === 'action' && 'bg-white hover:bg-primary-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300',
        className
      )}
      {...props}
    />
  );
}