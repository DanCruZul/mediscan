import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

interface SimilarCasesProps {
  cases: any;
}

export function SimilarCases({ cases }: SimilarCasesProps) {
  return (
    <Card className="p-4 mb-6">
      <h3 className={cn(typography.heading.h3, "text-neutral-800 mb-4")}>
        Casos Similares
      </h3>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {[1, 2].map((item) => (
          <div key={item} className="space-y-2">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-150501592088${item}?w=400`}
                alt={`Caso similar ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className={cn(typography.body.small, "text-neutral-700 font-medium")}>
              Dermatitis de Contacto
            </p>
            <p className={cn(typography.body.small, "text-neutral-600")}>
              Coincidencia: 85%
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg text-orange-700">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <p className={cn(typography.body.small)}>
          Las imágenes son solo referencias. Consulte siempre con un profesional de la salud para un diagnóstico preciso.
        </p>
      </div>
    </Card>
  );
}