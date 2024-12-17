import React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';
import { Card } from '../ui/Card';

interface ActivityCardProps {
  days: number;
  id: number;
}

export function ActivityCard({ days, id }: ActivityCardProps) {
  return (
    <Card className="min-w-[180px] md:min-w-[220px] p-4 hover:bg-neutral-50 cursor-pointer transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="w-4 h-4 text-neutral-500" />
        <span className={cn(typography.body.small, "text-neutral-600")}>
          Hace {days} días
        </span>
      </div>
      <p className={cn(typography.body.base, "font-medium text-neutral-800")}>
        Análisis de Piel #{id}
      </p>
      <div className="mt-2 w-full bg-neutral-100 h-1 rounded-full overflow-hidden">
        <div className="bg-primary-500 w-3/4 h-full rounded-full" />
      </div>
    </Card>
  );
}