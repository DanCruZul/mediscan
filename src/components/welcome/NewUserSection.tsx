import React from 'react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function NewUserSection() {
  return (
    <div className="mt-6 pt-6 border-t border-neutral-200">
      <p className={cn(typography.body.small, "text-neutral-600 text-center mb-4")}>
        ¿Aún no tienes una cuenta?
      </p>
      <button className="w-full bg-neutral-800 hover:bg-neutral-900 text-white font-medium py-2.5 rounded-lg transition-colors">
        Crear Cuenta
      </button>
    </div>
  );
}