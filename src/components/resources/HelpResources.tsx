import React from 'react';
import { Search, Phone } from 'lucide-react';
import { Card } from '../ui/Card';

export function HelpResources() {
  return (
    <Card className="p-4 md:p-6">
      <h2 className="text-base md:text-lg font-semibold text-neutral-800 mb-3 md:mb-4">
        Recursos
      </h2>
      <div className="grid gap-2 md:gap-3">
        <a href="#" className="flex items-center gap-2 text-primary-600 p-2 hover:bg-primary-50 rounded-lg transition-colors">
          <Search className="w-5 h-5" />
          <span className="text-sm md:text-base font-medium">Buscar Médico</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-primary-600 p-2 hover:bg-primary-50 rounded-lg transition-colors">
          <Phone className="w-5 h-5" />
          <span className="text-sm md:text-base font-medium">Servicios de Emergencia</span>
        </a>
      </div>
    </Card>
  );
}