import React from 'react';
import { Card } from '../ui/Card';
import { SocialLogin } from './SocialLogin';
import { LoginForm } from './LoginForm';
import { NewUserSection } from './NewUserSection';

export function LoginSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-md mx-auto">
        <Card className="p-6 md:p-8">
          <LoginForm />
          <div className="my-6 flex items-center gap-3">
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