import React from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function ScanHeader() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full bg-white border-b border-neutral-200 z-50">
      <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 hover:bg-neutral-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-neutral-700" />
        </button>
        
        <h1 className={cn(typography.heading.h2, "text-neutral-800")}>
          Escáner de Piel
        </h1>
        
        <button className="p-2 -mr-2 hover:bg-neutral-100 rounded-full transition-colors">
          <HelpCircle className="w-5 h-5 text-neutral-700" />
        </button>
      </div>
    </header>
  );
}