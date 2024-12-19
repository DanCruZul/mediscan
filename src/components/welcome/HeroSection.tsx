import React from 'react';
import { AlertTriangle, Activity, Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-primary-50 to-white py-12 md:py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100 mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-primary-600" />
          <span className="text-sm font-medium text-primary-700">Tecnología de IA Avanzada</span>
        </div>

        <h1 className={cn(
          typography.heading.h1,
          "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient"
        )}>
          Diagnóstico Inteligente para tu Salud
        </h1>

        <p className={cn(
          typography.body.large,
          "text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed"
        )}>
          Utiliza inteligencia artificial avanzada para evaluar síntomas, analizar condiciones de la piel y recibir orientación médica personalizada.
        </p>
        
        <div className="flex items-center gap-2 justify-center text-orange-700 bg-orange-50/80 backdrop-blur-sm p-4 rounded-xl border border-orange-100">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <p className={cn(typography.body.small)}>
            En caso de emergencia médica, llame inmediatamente al 911 o acuda al centro médico más cercano
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary-600 animate-bounce">
          <Activity className="w-5 h-5" />
          <span className="text-sm font-medium">Desliza para explorar</span>
        </div>
      </div>
    </section>
  );
}