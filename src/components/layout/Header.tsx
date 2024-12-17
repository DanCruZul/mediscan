import React from 'react';
import { Settings, User, Activity } from 'lucide-react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 h-16">
        <div className="flex items-center gap-2">
          <Activity className="w-6 h-6 text-primary-600" />
          <h1 className={cn(typography.heading.h2, "text-primary-700")}>SaludAI</h1>
        </div>
        <div className="flex gap-2">
          <button className="p-2.5 hover:bg-neutral-100 rounded-full transition-colors">
            <Settings className="w-5 h-5 text-neutral-700" />
          </button>
          <button className="p-2.5 hover:bg-neutral-100 rounded-full transition-colors">
            <User className="w-5 h-5 text-neutral-700" />
          </button>
        </div>
      </div>
    </header>
  );
}