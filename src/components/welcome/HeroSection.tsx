import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className={cn(typography.heading.h1, "text-neutral-900 mb-4")}>
          Diagnóstico Inteligente para tu Salud
        </h1>
        <p className={cn(typography.body.large, "text-neutral-600 mb-6")}>
          Utiliza inteligencia artificial avanzada para evaluar síntomas, analizar condiciones de la piel y recibir orientación médica personalizada.
        </p>
        
        <div className="flex items-center gap-2 justify-center text-orange-700 bg-orange-50 p-3 rounded-lg">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <p className={cn(typography.body.small)}>
            En caso de emergencia médica, llame inmediatamente al 911 o acuda al centro médico más cercano
          </p>
        </div>
      </div>
    </section>
  );
}