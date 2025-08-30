import { Wallet, ArrowDownRight, ArrowUpRight, TrendingUp } from 'lucide-react';

function KPICard({ icon: Icon, label, value, delta, trend }) {
  const isPositive = (delta ?? '').toString().startsWith('+');
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm text-white/70">{label}</span>
          </div>
          {trend && (
            <span className="text-xs rounded-full px-2 py-1 border border-white/10 bg-white/5 text-white/70">
              {trend}
            </span>
          )}
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-2xl font-semibold">{value}</div>
            {delta && (
              <div className={`mt-1 inline-flex items-center gap-1 text-xs ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isPositive ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                {delta} vs last month
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KPIGrid() {
  return (
    <section className="relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={Wallet} label="Total Balance" value="$18,420.55" delta="+4.2%" trend="Stable" />
        <KPICard icon={TrendingUp} label="Monthly Income" value="$6,250.00" delta="+2.1%" trend="Up" />
        <KPICard icon={TrendingUp} label="Monthly Spend" value="$4,180.32" delta="-1.3%" trend="Down" />
        <KPICard icon={TrendingUp} label="Savings Rate" value="33%" delta="+3.0%" trend="Up" />
      </div>
    </section>
  );
}
