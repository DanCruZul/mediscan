import React from 'react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';
import { Card } from '../ui/Card';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export function ActionButton({ icon, label, onClick }: ActionButtonProps) {
  return (
    <Card
      variant="action"
      onClick={onClick}
      className="group flex flex-col items-center p-4 md:p-6 cursor-pointer hover-lift"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <span className={cn(
        typography.body.base,
        "text-neutral-700 text-center font-medium group-hover:text-primary-600 transition-colors"
      )}>
        {label}
      </span>
    </Card>
  );
}