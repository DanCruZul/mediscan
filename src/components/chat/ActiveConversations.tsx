import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

const conversations = [
  {
    id: 1,
    lastMessage: "Basado en sus síntomas, le recomiendo...",
    timestamp: "10:30",
    isActive: true
  },
  {
    id: 2,
    lastMessage: "Por favor, proporcione más detalles sobre...",
    timestamp: "Ayer",
    isActive: false
  }
];

export function ActiveConversations() {
  return (
    <Card className="mb-6 p-4 md:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className={cn(typography.heading.h3, "text-neutral-800")}>
          Conversaciones Activas
        </h2>
        <button className="text-sm font-medium text-primary-600 hover:text-primary-700">
          Nueva Consulta
        </button>
      </div>

      <div className="space-y-3">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className="flex items-center gap-4 p-3 hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className={cn(typography.body.base, "text-neutral-800 truncate")}>
                {conv.lastMessage}
              </p>
              <p className={cn(typography.body.small, "text-neutral-600")}>
                {conv.timestamp}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-neutral-400" />
          </div>
        ))}
      </div>
    </Card>
  );
}