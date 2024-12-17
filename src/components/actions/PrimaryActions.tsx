import React from 'react';
import { Scan, MessageSquare, ClipboardCheck } from 'lucide-react';
import { ActionButton } from './ActionButton';

const actions = [
  { 
    icon: <Scan className="w-7 h-7 text-primary-600" />, 
    label: "Escanear Piel",
    onClick: () => console.log('Scan clicked')
  },
  { 
    icon: <ClipboardCheck className="w-7 h-7 text-primary-600" />, 
    label: "Cuestionario",
    onClick: () => console.log('Quiz clicked')
  },
  { 
    icon: <MessageSquare className="w-7 h-7 text-primary-600" />, 
    label: "Chat IA",
    onClick: () => console.log('Chat clicked')
  }
];

export function PrimaryActions() {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
      {actions.map((action, index) => (
        <ActionButton
          key={index}
          icon={action.icon}
          label={action.label}
          onClick={action.onClick}
        />
      ))}
    </div>
  );
}