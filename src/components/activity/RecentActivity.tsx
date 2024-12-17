import React from 'react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';
import { Card } from '@/components/ui/Card';
import { ActivityCard } from './ActivityCard';

export function RecentActivity() {
  return (
    <Card className="p-4 md:p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className={cn(typography.heading.h3, "text-neutral-800")}>
          Revisiones Recientes
        </h2>
        <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-700">
          Ver Todo
        </a>
      </div>
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {[1, 2, 3].map((item) => (
          <ActivityCard key={item} days={item} id={item} />
        ))}
      </div>
    </Card>
  );
}