import React from 'react';
import { Calendar, AlertTriangle } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

const recentScans = [
  {
    id: 1,
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?w=200',
    riskLevel: 'low',
    summary: 'No se detectaron anomalías significativas'
  },
  {
    id: 2,
    date: '2024-03-08',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200',
    riskLevel: 'medium',
    summary: 'Se recomienda seguimiento'
  }
];

export function RecentAssessments() {
  return (
    <Card className="mb-6 p-4 md:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className={cn(typography.heading.h3, "text-neutral-800")}>
          Análisis Recientes
        </h2>
        <button className="text-sm font-medium text-primary-600 hover:text-primary-700">
          Ver Todo
        </button>
      </div>

      <div className="space-y-4">
        {recentScans.map((scan) => (
          <div key={scan.id} className="flex gap-4 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
            <img
              src={scan.image}
              alt={`Scan ${scan.id}`}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-neutral-500" />
                <span className={cn(typography.body.small, "text-neutral-600")}>
                  {new Date(scan.date).toLocaleDateString()}
                </span>
              </div>
              <p className={cn(typography.body.base, "text-neutral-800 font-medium")}>
                {scan.summary}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <AlertTriangle className={cn(
                  "w-4 h-4",
                  scan.riskLevel === 'low' && "text-green-500",
                  scan.riskLevel === 'medium' && "text-orange-500",
                  scan.riskLevel === 'high' && "text-red-500"
                )} />
                <span className={cn(typography.body.small, "capitalize text-neutral-600")}>
                  Riesgo {scan.riskLevel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}