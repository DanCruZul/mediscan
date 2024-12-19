import React from 'react';
import { Home, Clock, User, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/utils/cn';

const navItems = [
  { icon: <Home className="w-6 h-6" />, label: "Inicio", path: "/" },
  { icon: <Clock className="w-6 h-6" />, label: "Historial", path: "/history" },
  { icon: <User className="w-6 h-6" />, label: "Perfil", path: "/profile" },
  { icon: <Settings className="w-6 h-6" />, label: "Ajustes", path: "/settings" }
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-2 py-2 md:px-4 md:py-3">
      <div className="flex justify-around max-w-7xl mx-auto">
        {navItems.map((item, index) => (
          <button 
            key={index} 
            className={cn(
              "flex flex-col items-center p-2 rounded-lg transition-colors",
              location.pathname === item.path 
                ? "text-primary-600 bg-primary-50" 
                : "text-gray-600 hover:bg-gray-50"
            )}
            onClick={() => navigate(item.path)}
          >
            {React.cloneElement(item.icon, {
              className: cn(
                item.icon.props.className,
                location.pathname === item.path && "text-primary-600"
              )
            })}
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}