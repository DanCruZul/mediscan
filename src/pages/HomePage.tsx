import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { MedicalDisclaimer } from '@/components/alerts/MedicalDisclaimer';
import { PrimaryActions } from '@/components/actions/PrimaryActions';
import { RecentActivity } from '@/components/activity/RecentActivity';
import { QuickStats } from '@/components/stats/QuickStats';
import { HelpResources } from '@/components/resources/HelpResources';

export function HomePage() {
  return (
    <MainLayout>
      <MedicalDisclaimer />
      <PrimaryActions />
      <RecentActivity />
      <QuickStats />
      <HelpResources />
    </MainLayout>
  );
}