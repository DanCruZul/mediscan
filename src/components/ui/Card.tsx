import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'action';
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-neutral-200/80',
        variant === 'default' && 'bg-white shadow-sm hover:shadow-md transition-shadow',
        variant === 'glass' && 'bg-white/80 backdrop-blur-sm',
        variant === 'action' && 'bg-white hover:bg-primary-50 transition-all duration-200',
        className
      )}
      {...props}
    />
  );
}