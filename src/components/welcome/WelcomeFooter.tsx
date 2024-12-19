import React from 'react';
import { Activity } from 'lucide-react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function WelcomeFooter() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <Activity className="w-6 h-6" />
              <span className="font-semibold">SaludAI</span>
            </div>
            <p className={cn(typography.body.small)}>
              Versión 1.0.0
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cumplimiento HIPAA</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Emergencias</h4>
            <ul className="space-y-2">
              <li>911 - Emergencias</li>
              <li>+1 (800) 555-0123 - Línea de Crisis</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@saludai.com" className="hover:text-white transition-colors">
                  support@saludai.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
          <p className={cn(typography.body.small)}>
            © {new Date().getFullYear()} SaludAI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}