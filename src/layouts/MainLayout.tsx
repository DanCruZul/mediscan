import React from 'react';
import { Header } from '@/components/layout/Header';
import { BottomNav } from '@/components/layout/BottomNav';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="pt-20 pb-20 px-3 md:px-4 max-w-7xl mx-auto">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}