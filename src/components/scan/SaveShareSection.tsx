import React from 'react';
import { Save, Share2, FileText, PenLine } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function SaveShareSection() {
  return (
    <Card className="p-4 mb-6">
      <div className="grid grid-cols-2 gap-3">
        <button className="flex flex-col items-center gap-2 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
          <Save className="w-5 h-5 text-neutral-600" />
          <span className={cn(typography.body.small, "text-neutral-700")}>
            Guardar
          </span>
        </button>

        <button className="flex flex-col items-center gap-2 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
          <Share2 className="w-5 h-5 text-neutral-600" />
          <span className={cn(typography.body.small, "text-neutral-700")}>
            Compartir
          </span>
        </button>

        <button className="flex flex-col items-center gap-2 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
          <FileText className="w-5 h-5 text-neutral-600" />
          <span className={cn(typography.body.small, "text-neutral-700")}>
            Exportar
          </span>
        </button>

        <button className="flex flex-col items-center gap-2 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
          <PenLine className="w-5 h-5 text-neutral-600" />
          <span className={cn(typography.body.small, "text-neutral-700")}>
            Notas
          </span>
        </button>
      </div>
    </Card>
  );
}