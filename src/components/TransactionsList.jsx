import { CreditCard, ShoppingCart, Coffee, Home, Car, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const transactions = [
  {
    id: 1,
    name: 'Grocery Market',
    category: 'Groceries',
    icon: ShoppingCart,
    date: 'Aug 24, 2025',
    amount: -86.12,
  },
  {
    id: 2,
    name: 'Mortgage Payment',
    category: 'Housing',
    icon: Home,
    date: 'Aug 23, 2025',
    amount: -1450.0,
  },
  {
    id: 3,
    name: 'Fuel Station',
    category: 'Transport',
    icon: Car,
    date: 'Aug 22, 2025',
    amount: -54.97,
  },
  {
    id: 4,
    name: 'Freelance Payout',
    category: 'Income',
    icon: CreditCard,
    date: 'Aug 22, 2025',
    amount: 820.0,
  },
  {
    id: 5,
    name: 'Cafe Latte',
    category: 'Dining',
    icon: Coffee,
    date: 'Aug 21, 2025',
    amount: -6.5,
  },
];

export default function TransactionsList() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur h-full">
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(96,165,250,0.15),transparent)]" />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <p className="text-sm text-white/70">Last 5 activities</p>
          </div>
          <button className="text-sm rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-white/90 transition-colors">
            View all
          </button>
        </div>

        <ul className="mt-4 space-y-3">
          {transactions.map((t) => {
            const isPositive = t.amount > 0;
            const Icon = t.icon;
            return (
              <li key={t.id} className="relative rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900/60">
                    <Icon className="h-5 w-5 text-white/80" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium leading-tight">{t.name}</div>
                        <div className="text-xs text-white/60">{t.category} • {t.date}</div>
                      </div>
                      <div className={`inline-flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                        {isPositive ? '+' : '-'}${Math.abs(t.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
