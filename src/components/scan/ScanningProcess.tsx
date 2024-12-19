import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

interface ScanningProcessProps {
  onComplete: (result: any) => void;
  onCancel: () => void;
}

export function ScanningProcess({ onComplete, onCancel }: ScanningProcessProps) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          onComplete({ /* mock result */ });
          return p;
        }
        return p + 10;
      });
    }, 500);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="text-center space-y-6">
      <div className="relative w-24 h-24 mx-auto">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="48"
            cy="48"
            r="44"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-neutral-100"
          />
          <circle
            cx="48"
            cy="48"
            r="44"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 44}`}
            strokeDashoffset={`${2 * Math.PI * 44 * (1 - progress / 100)}`}
            className="text-primary-600 transition-all duration-200"
          />
        </svg>
      </div>

      <div>
        <h2 className={cn(typography.heading.h3, "text-neutral-800 mb-2")}>
          Analizando imagen
        </h2>
        <p className={cn(typography.body.base, "text-neutral-600")}>
          Nuestro sistema está procesando su imagen
        </p>
      </div>

      <button
        onClick={onCancel}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
      >
        <X className="w-4 h-4" />
        Cancelar
      </button>
    </div>
  );
}