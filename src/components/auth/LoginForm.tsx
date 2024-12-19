import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';
import { useAuthStore } from '@/stores/authStore';

export function LoginForm() {
  const navigate = useNavigate();
  const signIn = useAuthStore((state) => state.signIn);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signIn(email, password);
      navigate('/home');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" className={cn(typography.body.small, "text-neutral-700 block mb-1.5")}>
          Correo electrónico
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            placeholder="nombre@ejemplo.com"
            required
            disabled={loading}
          />
          <Mail className="w-5 h-5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div>
        <label htmlFor="password" className={cn(typography.body.small, "text-neutral-700 block mb-1.5")}>
          Contraseña
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            placeholder="••••••••"
            required
            disabled={loading}
          />
          <Lock className="w-5 h-5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded border-neutral-300 text-primary-600" />
          <span className={cn(typography.body.small, "text-neutral-600")}>Recordarme</span>
        </label>
        <a href="#" className={cn(typography.body.small, "text-primary-600 hover:text-primary-700")}>
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={cn(
          "w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 rounded-lg transition-colors",
          loading && "opacity-50 cursor-not-allowed"
        )}
      >
        {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
}