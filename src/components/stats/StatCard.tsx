import React from 'react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';
import { Card } from '../ui/Card';

interface StatCardProps {
  label: string;
  value: string;
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <Card className="p-4 hover:bg-neutral-50 transition-colors">
      <p className={cn(typography.body.small, "text-neutral-600 mb-1")}>
        {label}
      </p>
      <p className={cn(typography.heading.h3, "text-neutral-800 font-semibold")}>
        {value}
      </p>
    </Card>
  );
}