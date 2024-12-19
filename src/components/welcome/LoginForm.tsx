import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className={cn(typography.body.small, "text-neutral-700 block mb-1.5")}>
          Correo electrónico
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            placeholder="nombre@ejemplo.com"
          />
          <Mail className="w-5 h-5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div>
        <label htmlFor="password" className={cn(typography.body.small, "text-neutral-700 block mb-1.5")}>
          Contraseña
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            placeholder="••••••••"
          />
          <Lock className="w-5 h-5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded border-neutral-300 text-primary-600" />
          <span className={cn(typography.body.small, "text-neutral-600")}>Recordarme</span>
        </label>
        <a href="#" className={cn(typography.body.small, "text-primary-600 hover:text-primary-700")}>
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 rounded-lg transition-colors"
      >
        Iniciar Sesión
      </button>
    </form>
  );
}