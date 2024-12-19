import React from 'react';
import { WelcomeHeader } from '@/components/welcome/WelcomeHeader';
import { HeroSection } from '@/components/welcome/HeroSection';
import { LoginSection } from '@/components/welcome/LoginSection';
import { AppHighlights } from '@/components/welcome/AppHighlights';
import { WelcomeFooter } from '@/components/welcome/WelcomeFooter';

export function WelcomePage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <WelcomeHeader />
      <main className="flex-1">
        <HeroSection />
        <LoginSection />
        <AppHighlights />
      </main>
      <WelcomeFooter />
    </div>
  );
}