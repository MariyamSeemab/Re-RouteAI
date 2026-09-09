import { CheckCircle2, XCircle, RefreshCw, StickyNote, Trophy } from 'lucide-react';
import Card from '../components/ui/Card';
import ProgressRing from '../components/ui/ProgressRing';
import { journeyLog } from '../lib/mockData';

const iconFor = {
  attended: <CheckCircle2 size={15} className="text-go" />,
  missed: <XCircle size={15} className="text-critical" />,
  rerouted: <RefreshCw size={15} className="text-beacon" />,
  note: <StickyNote size={15} className="text-text-muted" />,
  milestone: <Trophy size={15} className="text-signal-400" />,
};

export default function Journey() {
  return (
    <div className="flex flex-col gap-6 animate-rise-in">
      <div>
        <h1 className="font-display text-2xl font-semibold text-text-primary">Journey progress</h1>
        <p className="mt-1 text-sm text-text-muted">A record of what you've learned, missed, and adjusted.</p>
      </div>

      <Card className="flex flex-col items-center gap-3 p-8">
        <ProgressRing value={82} size={140} strokeWidth={11} label="Journey score" />
        <div className="grid w-full grid-cols-3 gap-3 pt-2 text-center">
          <div>
            <p className="font-display text-lg font-semibold text-text-primary">9</p>
            <p className="text-xs text-text-muted">Attended</p>
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-text-primary">1</p>
            <p className="text-xs text-text-muted">Missed</p>
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-text-primary">2</p>
            <p className="text-xs text-text-muted">Rerouted</p>
          </div>
        </div>
      </Card>

      <div className="flex flex-col gap-3">
        {journeyLog.map((entry) => (
          <Card key={entry.id} className="flex items-start gap-3 p-4">
            <div className="mt-0.5">{iconFor[entry.type]}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-text-primary">{entry.title}</p>
                <span className="font-mono text-[11px] text-text-muted">{entry.day} · {entry.time}</span>
              </div>
              {entry.detail && <p className="mt-0.5 text-xs text-text-muted">{entry.detail}</p>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
