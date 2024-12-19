import React from 'react';
import { Card } from '../ui/Card';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

interface DetailedAnalysisProps {
  analysis: any;
}

export function DetailedAnalysis({ analysis }: DetailedAnalysisProps) {
  return (
    <Card className="p-4 mb-6">
      <h3 className={cn(typography.heading.h3, "text-neutral-800 mb-4")}>
        Análisis Detallado
      </h3>

      <div className="space-y-4">
        <div>
          <h4 className={cn(typography.body.base, "font-medium text-neutral-800 mb-2")}>
            Descripción
          </h4>
          <p className={cn(typography.body.base, "text-neutral-600")}>
            Inflamación de la piel caracterizada por enrojecimiento y picazón, probablemente causada por el contacto con un irritante.
          </p>
        </div>

        <div>
          <h4 className={cn(typography.body.base, "font-medium text-neutral-800 mb-2")}>
            Causas Posibles
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li className={cn(typography.body.base, "text-neutral-600")}>
              Exposición a productos químicos
            </li>
            <li className={cn(typography.body.base, "text-neutral-600")}>
              Reacción a cosméticos
            </li>
            <li className={cn(typography.body.base, "text-neutral-600")}>
              Contacto con plantas irritantes
            </li>
          </ul>
        </div>

        <div>
          <h4 className={cn(typography.body.base, "font-medium text-neutral-800 mb-2")}>
            Síntomas Comunes
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li className={cn(typography.body.base, "text-neutral-600")}>
              Enrojecimiento de la piel
            </li>
            <li className={cn(typography.body.base, "text-neutral-600")}>
              Picazón o ardor
            </li>
            <li className={cn(typography.body.base, "text-neutral-600")}>
              Inflamación localizada
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}