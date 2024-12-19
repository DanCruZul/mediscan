import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient opacity-10" />
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center space-y-6">
          <h1 className={cn(
            "text-4xl md:text-6xl font-bold tracking-tight mb-6",
            "bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600"
          )}>
            Diagnóstico Inteligente
            <br />
            para tu Salud
          </h1>

          <p className={cn(
            typography.body.large,
            "max-w-2xl mx-auto text-neutral-600 mb-8"
          )}>
            Utiliza inteligencia artificial avanzada para evaluar síntomas,
            analizar condiciones de la piel y recibir orientación médica personalizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
              Comenzar Ahora
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary-600 font-medium hover:bg-primary-50 transition-colors">
              Ver Demo
            </button>
          </div>
          
          {/* Warning banner */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 text-orange-700 bg-orange-50 p-4 rounded-2xl border border-orange-100">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <p className={cn(typography.body.small)}>
                En caso de emergencia médica, llame inmediatamente al 911 o acuda al centro médico más cercano
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-primary-50/50 to-transparent pointer-events-none" />
    </section>
  );
}