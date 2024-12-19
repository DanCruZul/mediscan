import React from 'react';
import { Camera, Clock, MessageSquare, Home } from 'lucide-react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function ScanBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200">
      <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-around">
        {[
          { icon: <Home className="w-5 h-5" />, label: 'Inicio' },
          { icon: <Camera className="w-5 h-5" />, label: 'Nuevo' },
          { icon: <Clock className="w-5 h-5" />, label: 'Historial' },
          { icon: <MessageSquare className="w-5 h-5" />, label: 'Chat' },
        ].map((item, index) => (
          <button
            key={index}
            className="flex flex-col items-center gap-1 p-2 hover:bg-neutral-50 rounded-lg transition-colors"
          >
            {React.cloneElement(item.icon, { className: cn(item.icon.props.className, "text-neutral-600") })}
            <span className={cn(typography.body.small, "text-neutral-600")}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}