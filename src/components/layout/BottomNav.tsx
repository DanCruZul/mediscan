import React from 'react';
import { Home, Camera, User, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/utils/cn';

const navItems = [
  { icon: Home, label: "Inicio", path: "/home" },
  { icon: Camera, label: "Escanear", path: "/scan" },
  { icon: User, label: "Perfil", path: "/profile" },
  { icon: Settings, label: "Ajustes", path: "/settings" }
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-2 py-2 md:px-4 md:py-3">
      <div className="flex justify-around max-w-7xl mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button 
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center p-2 rounded-lg transition-colors",
                isActive ? "text-primary-600" : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}