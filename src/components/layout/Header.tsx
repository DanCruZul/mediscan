import React from 'react';
import { Bell, Settings, Activity } from 'lucide-react';
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
        
        <div className="flex items-center gap-4">
          <button className="p-2.5 hover:bg-neutral-100 rounded-full transition-colors relative">
            <Bell className="w-5 h-5 text-neutral-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent-red rounded-full" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-neutral-800">María García</p>
              <p className="text-xs text-neutral-600">Premium</p>
            </div>
            <button className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary-200 hover:border-primary-300 transition-colors">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}