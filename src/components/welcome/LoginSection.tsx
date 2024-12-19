import React from 'react';
import { Card } from '../ui/Card';
import { SocialLogin } from './SocialLogin';
import { LoginForm } from './LoginForm';
import { NewUserSection } from './NewUserSection';

export function LoginSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/50 to-primary-100/30" />
      
      <div className="relative max-w-md mx-auto">
        <Card className="p-8 shadow-xl bg-white/80 backdrop-blur-xl border-primary-100">
          <LoginForm />
          <div className="my-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-sm text-neutral-600">o continuar con</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <SocialLogin />
          <NewUserSection />
        </Card>
      </div>
    </section>
  );
}