import { useMemo } from 'react';

const data = [
  { label: 'Jan', value: 1200 },
  { label: 'Feb', value: 980 },
  { label: 'Mar', value: 1450 },
  { label: 'Apr', value: 1320 },
  { label: 'May', value: 1680 },
  { label: 'Jun', value: 1420 },
  { label: 'Jul', value: 1580 },
  { label: 'Aug', value: 1720 },
  { label: 'Sep', value: 1530 },
  { label: 'Oct', value: 1630 },
  { label: 'Nov', value: 1490 },
  { label: 'Dec', value: 1760 },
];

export default function SpendingChart() {
  const max = useMemo(() => Math.max(...data.map(d => d.value)), []);
  const points = useMemo(() => {
    const w = 760; // viewBox width
    const h = 260; // viewBox height
    const step = w / (data.length - 1);
    return data
      .map((d, i) => {
        const x = i * step;
        const y = h - (d.value / max) * (h - 20) - 10; // padding top/btm
        return `${x},${y}`;
      })
      .join(' ');
  }, [max]);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_0%,rgba(34,211,238,0.15),transparent)]" />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Spending Overview</h3>
            <p className="text-sm text-white/70">Last 12 months</p>
          </div>
          <div className="text-sm text-white/70">USD</div>
        </div>
        <div className="mt-6">
          <svg viewBox="0 0 760 300" className="w-full h-64">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>

            <g>
              {Array.from({ length: 5 }).map((_, i) => (
                <line
                  key={i}
                  x1="0"
                  x2="760"
                  y1={50 * i + 20}
                  y2={50 * i + 20}
                  stroke="rgba(255,255,255,0.06)"
                />
              ))}
            </g>

            <polyline
              fill="none"
              stroke="url(#stroke)"
              strokeWidth="3"
              points={points}
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            <polygon
              points={`${points} 760,300 0,300`}
              fill="url(#area)"
            />

            {data.map((d, i) => (
              <text
                key={d.label}
                x={(760 / (data.length - 1)) * i}
                y={295}
                textAnchor="middle"
                className="fill-white/60 text-xs"
              >
                {d.label}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
