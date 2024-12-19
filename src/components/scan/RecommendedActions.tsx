import React from 'react';
import { AlertCircle, Stethoscope, MessageSquare } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

interface RecommendedActionsProps {
  recommendations: any;
}

export function RecommendedActions({ recommendations }: RecommendedActionsProps) {
  return (
    <Card className="p-4 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="w-5 h-5 text-orange-500" />
        <h3 className={cn(typography.heading.h3, "text-neutral-800")}>
          Acciones Recomendadas
        </h3>
      </div>

      <p className={cn(typography.body.base, "text-neutral-600 mb-4")}>
        Nivel de Urgencia: Moderado - Se recomienda consultar con un profesional en los próximos días.
      </p>

      <div className="space-y-3">
        <button className="w-full flex items-center gap-3 p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
          <Stethoscope className="w-5 h-5 text-primary-600" />
          <span className={cn(typography.body.base, "font-medium text-primary-700")}>
            Buscar Dermatólogo Cercano
          </span>
        </button>

        <button className="w-full flex items-center gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
          <MessageSquare className="w-5 h-5 text-neutral-600" />
          <span className={cn(typography.body.base, "font-medium text-neutral-700")}>
            Consultar con IA
          </span>
        </button>
      </div>
    </Card>
  );
}