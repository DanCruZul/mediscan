import React from 'react';

export function SocialLogin() {
  return (
    <div className="space-y-3">
      {['Google', 'Apple'].map((provider) => (
        <button
          key={provider}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
        >
          <img
            src={`https://www.google.com/favicon.ico`}
            alt={provider}
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-neutral-700">
            Continuar con {provider}
          </span>
        </button>
      ))}
    </div>
  );
}