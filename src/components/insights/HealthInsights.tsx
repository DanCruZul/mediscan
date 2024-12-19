import React from 'react';
import { TrendingUp, Activity, AlertCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function HealthInsights() {
  return (
    <Card className="mb-6 p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary-600" />
        <h2 className={cn(typography.heading.h3, "text-neutral-800")}>
          Resumen de Salud
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
          <Activity className="w-5 h-5 text-primary-600 mt-0.5" />
          <div>
            <p className={cn(typography.body.base, "font-medium text-neutral-800")}>
              Actividad Semanal
            </p>
            <p className={cn(typography.body.small, "text-neutral-600")}>
              3 análisis de piel · 2 consultas · 1 cuestionario
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
          <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
          <div>
            <p className={cn(typography.body.base, "font-medium text-neutral-800")}>
              Acciones Recomendadas
            </p>
            <p className={cn(typography.body.small, "text-neutral-600")}>
              Programar revisión de seguimiento · Actualizar historial médico
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}