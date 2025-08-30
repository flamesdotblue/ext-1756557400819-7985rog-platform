import HeroCover from './components/HeroCover';
import KPIGrid from './components/KPIGrid';
import SpendingChart from './components/SpendingChart';
import TransactionsList from './components/TransactionsList';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroCover />
      <main className="relative z-10 -mt-16 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KPIGrid />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <SpendingChart />
            </div>
            <div className="lg:col-span-2">
              <TransactionsList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
