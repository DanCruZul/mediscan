import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'action' | 'gradient';
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-300',
        variant === 'default' && 'bg-white border border-neutral-200/80 hover:shadow-lg hover:border-primary-100',
        variant === 'glass' && 'glass-card',
        variant === 'action' && 'bg-white hover:bg-primary-50 hover:-translate-y-1 shadow-sm hover:shadow-lg',
        variant === 'gradient' && 'bg-gradient-to-br from-primary-500 to-blue-500 text-white',
        className
      )}
      {...props}
    />
  );
}