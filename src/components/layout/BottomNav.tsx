import React from 'react';
import { Home, Clock, User, Settings } from 'lucide-react';

const navItems = [
  { icon: <Home className="w-6 h-6" />, label: "Inicio" },
  { icon: <Clock className="w-6 h-6" />, label: "Historial" },
  { icon: <User className="w-6 h-6" />, label: "Perfil" },
  { icon: <Settings className="w-6 h-6" />, label: "Ajustes" }
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-2 py-2 md:px-4 md:py-3">
      <div className="flex justify-around max-w-7xl mx-auto">
        {navItems.map((item, index) => (
          <button 
            key={index} 
            className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {item.icon}
            <span className="text-xs mt-1 text-gray-600">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}