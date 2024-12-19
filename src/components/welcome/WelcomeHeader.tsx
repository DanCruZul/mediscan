import React from 'react';
import { Activity, Globe } from 'lucide-react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function WelcomeHeader() {
  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Activity className="w-6 h-6 text-primary-600" />
          <h1 className={cn(typography.heading.h2, "text-primary-700")}>SaludAI</h1>
        </div>
        
        <button className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-800">
          <Globe className="w-4 h-4" />
          <span>ES</span>
        </button>
      </div>
    </header>
  );
}