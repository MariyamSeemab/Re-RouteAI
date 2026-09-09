import { useState } from 'react';
import { MapPin, Footprints, Compass, CircleDot } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SearchInput from '../components/ui/SearchInput';
import FilterChip from '../components/ui/FilterChip';
import Badge from '../components/ui/Badge';

const routeSteps = [
  'Leave Venetian',
  'Walk approximately 14 minutes',
  'Enter Caesars Forum',
  'Go to Room 3',
  'Arrive before 1:50 PM',
];

export default function Wayfinder() {
  const [filters, setFilters] = useState<string[]>(['My sessions', 'Shuttles']);

  function toggleFilter(f: string) {
    setFilters((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));
  }

  return (
    <div className="flex flex-col gap-6 animate-rise-in">
      <div>
        <h1 className="font-display text-2xl font-semibold text-text-primary">Wayfinder</h1>
        <p className="mt-1 text-sm text-text-muted">Where do you need to go next?</p>
      </div>

      <SearchInput placeholder="Where are you going?" />

      <div className="flex flex-wrap gap-2">
        {['My sessions', 'Recommended sessions', 'All sessions', 'Expo', 'Networking', 'Food', 'Restrooms', 'Shuttles'].map((f) => (
          <FilterChip key={f} active={filters.includes(f)} onClick={() => toggleFilter(f)}>
            {f}
          </FilterChip>
        ))}
      </div>

      {/* Map placeholder — stylized, not a real map integration */}
      <Card className="relative overflow-hidden p-0">
        <div className="relative flex h-64 items-center justify-center bg-hull sm:h-80">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(var(--color-line-soft) 1px, transparent 1px), linear-gradient(90deg, var(--color-line-soft) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative flex items-center gap-4">
            <div className="flex flex-col items-center gap-1.5">
              <CircleDot size={18} className="text-beacon" />
              <span className="text-xs text-text-secondary">You</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-px w-10 border-t border-dashed border-line-soft" />
              <Footprints size={16} className="text-signal-400" />
              <span className="h-px w-10 border-t border-dashed border-line-soft" />
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <MapPin size={22} className="text-signal-500" />
              <span className="text-xs text-text-secondary">Next session</span>
            </div>
          </div>
          <Badge status="info" className="absolute right-3 top-3">
            🟡 Estimated route
          </Badge>
        </div>
        <div className="flex flex-col gap-3 border-t border-line p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-text-primary">Production AI Agents</p>
            <p className="text-xs text-text-muted">Venetian · Room L3</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-text-secondary">
              <Footprints size={12} /> 14 min · <span className="text-go">Comfortable</span>
            </p>
          </div>
          <Button icon={<Compass size={15} />}>Start route</Button>
        </div>
      </Card>

      {/* Text alternative for accessibility */}
      <Card className="p-5">
        <p className="text-sm font-semibold text-text-primary">Route summary</p>
        <ol className="mt-3 space-y-2">
          {routeSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-raised font-mono text-[11px] text-text-muted">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}
