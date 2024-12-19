import React from 'react';
import { Camera, Clock, MessageSquare, Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

export function ScanBottomBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Inicio', path: '/' },
    { icon: <Camera className="w-5 h-5" />, label: 'Nuevo', path: '/scan' },
    { icon: <Clock className="w-5 h-5" />, label: 'Historial', path: '/history' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Chat', path: '/chat' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200">
      <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-around">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={cn(
              "flex flex-col items-center gap-1 p-2 hover:bg-neutral-50 rounded-lg transition-colors",
              location.pathname === item.path && "text-primary-600 bg-primary-50"
            )}
          >
            {React.cloneElement(item.icon, { 
              className: cn(
                item.icon.props.className, 
                "text-neutral-600",
                location.pathname === item.path && "text-primary-600"
              )
            })}
            <span className={cn(
              typography.body.small,
              "text-neutral-600",
              location.pathname === item.path && "text-primary-600"
            )}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}