import Spline from '@splinetool/react-spline';
import { Rocket, Settings } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[70vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_50%_at_70%_30%,rgba(56,189,248,0.25),transparent)]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1 text-xs text-white/80">
              <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Live budgets synced
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Your money, beautifully organized
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              A modern personal finance dashboard to track spending, budgets, and goals—built for clarity with a touch of futurism.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-4 py-2 transition-colors">
                <Rocket className="h-4 w-4" />
                Get Started
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white px-4 py-2 transition-colors">
                <Settings className="h-4 w-4" />
                Customize
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
