import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

interface ResultsSectionProps {
  result: any;
}

export function ResultsSection({ result }: ResultsSectionProps) {
  return (
    <div className="space-y-4 mb-6">
      <div className="aspect-square rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?w=800"
          alt="Scanned area"
          className="w-full h-full object-cover"
        />
      </div>

      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className={cn(typography.heading.h3, "text-neutral-800")}>
              Nivel de Riesgo: Moderado
            </h3>
            <p className={cn(typography.body.small, "text-neutral-600")}>
              3 de 5 en la escala de riesgo
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <p className={cn(typography.body.base, "font-medium text-neutral-800")}>
              Diagnóstico Primario
            </p>
            <p className={cn(typography.body.base, "text-neutral-600")}>
              Dermatitis de Contacto
            </p>
          </div>

          <div>
            <p className={cn(typography.body.base, "font-medium text-neutral-800")}>
              Nivel de Confianza
            </p>
            <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-primary-600 h-full rounded-full"
                style={{ width: '85%' }}
              />
            </div>
            <p className={cn(typography.body.small, "text-neutral-600 mt-1")}>
              85% de precisión
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}