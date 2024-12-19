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
      className="group flex flex-col items-center p-6 cursor-pointer overflow-hidden relative"
    >
      {/* Gradient background that shows on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10 space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className={cn(typography.body.base, "text-neutral-700 text-center font-medium block")}>
          {label}
        </span>
      </div>
    </Card>
  );
}