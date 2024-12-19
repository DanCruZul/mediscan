import React from 'react';
import { Crown, ChevronRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function SubscriptionBar() {
  return (
    <Card className="mb-6 p-4 bg-gradient-to-r from-primary-50 to-primary-100/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
            <Crown className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h3 className={cn(typography.body.base, "font-medium text-neutral-800")}>
              Plan Premium
            </h3>
            <p className={cn(typography.body.small, "text-neutral-600")}>
              25 días restantes
            </p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700">
          Renovar
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </Card>
  );
}