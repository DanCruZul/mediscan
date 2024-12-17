import React from 'react';
import { StatCard } from './StatCard';

const stats = [
  { label: "Escaneos", value: "12" },
  { label: "Consultas", value: "8" },
  { label: "Premium", value: "Activo" }
];

export function QuickStats() {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}