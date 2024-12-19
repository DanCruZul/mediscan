import React from 'react';
import { Scan, MessageSquare, Stethoscope } from 'lucide-react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

const features = [
  {
    icon: <Scan className="w-6 h-6" />,
    title: "Escáner de Piel",
    description: "Análisis de condiciones dermatológicas con IA avanzada"
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Verificador de Síntomas",
    description: "Evaluación inteligente de síntomas y recomendaciones"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Chat Médico IA",
    description: "Consultas instantáneas con nuestro asistente virtual"
  }
];

export function AppHighlights() {
  return (
    <section className="py-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={cn(typography.heading.h2, "text-center text-neutral-800 mb-12")}>
          Características Principales
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-primary-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                {React.cloneElement(feature.icon, { className: "text-primary-600" })}
              </div>
              <h3 className={cn(typography.heading.h3, "mb-2 text-neutral-800")}>
                {feature.title}
              </h3>
              <p className={cn(typography.body.base, "text-neutral-600")}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}