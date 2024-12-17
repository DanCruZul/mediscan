import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function MedicalDisclaimer() {
  return (
    <div className="bg-orange-50 border-l-4 border-orange-400 p-3 md:p-4 mb-4 md:mb-6 rounded-lg">
      <div className="flex items-start">
        <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
        <div className="ml-3">
          <h2 className="text-sm font-medium text-orange-800">Aviso Médico Importante</h2>
          <p className="mt-1 text-sm text-orange-700">
            Esta aplicación no sustituye el consejo médico profesional. En caso de emergencia, llame al 911.
          </p>
        </div>
      </div>
    </div>
  );
}