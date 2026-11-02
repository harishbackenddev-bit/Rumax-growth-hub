// pages/auth/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Logo from '@/assets/home/logo.png';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, error, setError } = useAuth();

  // Active view: 'login' | 'forgot'
  const [view, setView] = useState<'login' | 'forgot'>('login');

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await login(email, password);

    if (result.success) {
      const userRole = result.data?.data?.role;
      if (userRole === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } else {
      setError(result.error || 'Login failed');
    }

    setLoading(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink font-sans text-slate-900 antialiased">
      {/* blue glow (left) */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-blue-900/30 blur-[140px]" />
      {/* purple glow (bottom right) */}
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[600px] w-[700px] rounded-full bg-purple-900/40 blur-[160px]" />

      {/* Logo */}
      <header className="absolute left-7 top-8 z-10">
        <img
          src={Logo}
          alt="Rumax – Your Care, Our Commitment"
          className="h-14 w-auto"
          onError={(e) => {
            const target = e.currentTarget;
            const fallback = document.createElement('div');
            fallback.className = 'text-white font-bold text-3xl tracking-tight';
            fallback.innerHTML =
              'RUMAX<div class="text-[7px] font-medium -mt-1">“Your Care, Our Commitment”</div>';
            target.replaceWith(fallback);
          }}
        />
      </header>

      {/* Center */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-24">

        {/* ===================== LOGIN CARD ===================== */}
        {view === 'login' && (
          <section
            id="login-card"
            className="w-full max-w-[550px] rounded-lg bg-white p-4 shadow-xl"
          >
            <h1 className="text-[26px] font-bold leading-tight text-slate-900">Login</h1>

            {error && (
              <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            <form className="mt-5" onSubmit={handleSubmit}>
              {/* Username */}
              <label htmlFor="username" className="block text-sm font-medium text-slate-800">
                Username
              </label>
              <input
                id="username"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@ru-max.co.uk"
                required
                className="mt-2 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-[15px] text-slate-900 placeholder-slate-400 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/20"
              />

              {/* Password */}
              <label htmlFor="password" className="mt-5 block text-sm font-medium text-slate-800">
                Password
              </label>
              <div className="relative mt-2">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 pr-10 text-[15px] tracking-widest text-slate-900 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/20"
                />
                <button
                  type="button"
                  aria-label="Show password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900"
                >
                  <svg
                    className="h-[18px] w-[18px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>

              {/* Forgot */}
              <div className="mt-6 text-right">
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setView('forgot');
                  }}
                  className="text-sm font-medium text-navy hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-5 h-10 w-full rounded-md bg-plum text-[15px] font-semibold text-white transition hover:bg-plum-dark focus:outline-none focus:ring-2 focus:ring-plum/40 disabled:opacity-60"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <hr className="my-5 border-slate-200" />

            {/* Feature badges */}
            <ul className="grid grid-cols-3 text-center text-xs text-slate-600">
              <li className="flex flex-col items-center gap-1.5">
                <svg className="h-[18px] w-[18px] text-plum" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
                Secure Login
              </li>
              <li className="flex flex-col items-center gap-1.5">
                <svg className="h-[18px] w-[18px] text-plum" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 5 6v6c0 4.2 2.9 7.4 7 9 4.1-1.6 7-4.8 7-9V6l-7-3Z" />
                </svg>
                Role-Based Access
              </li>
              <li className="flex flex-col items-center gap-1.5">
                <svg className="h-[18px] w-[18px] text-plum" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.1V12a9 9 0 1 1-5.3-8.2" />
                  <path d="m9 11 3 3 9-9" />
                </svg>
                Encrypted Data
              </li>
            </ul>

            {/* Footer text */}
            <p className="mt-6 text-center text-sm text-slate-700">
              Don&apos;t have access?{' '}
              <a href="#" className="font-medium text-plum hover:underline">
                Contact your IT &amp; maintenance
              </a>
            </p>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              Your data is securely protected and encrypted.
            </p>

            <a
              href="index.html"
              className="mt-5 mb-1 flex items-center justify-center gap-1.5 text-sm text-slate-700 hover:text-slate-900"
            >
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              Back to Home
            </a>
          </section>
        )}

        {/* ===================== FORGOT PASSWORD CARD ===================== */}
        {view === 'forgot' && (
          <section
            id="forgot-card"
            className="w-full max-w-[550px] rounded-lg bg-white p-4 shadow-xl"
          >
            <h1 className="text-[26px] font-bold leading-tight text-slate-900">
              Forgot Password?
            </h1>

            <form
              className="mt-5"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: wire up your forgot-password API call here
              }}
            >
              <label htmlFor="forgot-email" className="block text-sm font-medium text-slate-800">
                Email Address
              </label>
              <input
                id="forgot-email"
                type="email"
                placeholder="you@ru-max.co.uk"
                className="mt-2 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-[15px] text-slate-900 placeholder-slate-400 outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/20"
              />

              <button
                type="submit"
                className="mt-5 h-10 w-full rounded-md bg-plum text-[15px] font-semibold text-white transition hover:bg-plum-dark focus:outline-none focus:ring-2 focus:ring-plum/40"
              >
                Continue
              </button>
            </form>

            <hr className="my-5 border-slate-200" />

            <ul className="grid grid-cols-3 text-center text-xs text-slate-600">
              <li className="flex flex-col items-center gap-1.5">
                <svg className="h-[18px] w-[18px] text-plum" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
                Secure Login
              </li>
              <li className="flex flex-col items-center gap-1.5">
                <svg className="h-[18px] w-[18px] text-plum" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 5 6v6c0 4.2 2.9 7.4 7 9 4.1-1.6 7-4.8 7-9V6l-7-3Z" />
                </svg>
                Role-Based Access
              </li>
              <li className="flex flex-col items-center gap-1.5">
                <svg className="h-[18px] w-[18px] text-plum" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.1V12a9 9 0 1 1-5.3-8.2" />
                  <path d="m9 11 3 3 9-9" />
                </svg>
                Encrypted Data
              </li>
            </ul>

            <p className="mt-5 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              Your data is securely protected and encrypted.
            </p>

            <button
              type="button"
              onClick={() => setView('login')}
              className="mx-auto mt-5 mb-1 flex items-center justify-center gap-1.5 text-sm text-slate-700 hover:text-slate-900"
            >
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              Back to Login
            </button>
          </section>
        )}
      </div>
    </main>
  );
};

export default Login;