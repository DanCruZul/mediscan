import React from 'react';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { MedicalDisclaimer } from './components/alerts/MedicalDisclaimer';
import { PrimaryActions } from './components/actions/PrimaryActions';
import { RecentActivity } from './components/activity/RecentActivity';
import { QuickStats } from './components/stats/QuickStats';
import { HelpResources } from './components/resources/HelpResources';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-20 pb-20 px-3 md:px-4 max-w-7xl mx-auto">
        <MedicalDisclaimer />
        <PrimaryActions />
        <RecentActivity />
        <QuickStats />
        <HelpResources />
      </main>

      <BottomNav />
    </div>
  );
}