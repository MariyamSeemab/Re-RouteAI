import { useState } from 'react';
import { AlertTriangle, Compass } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ApprovalDialog from '../components/agent/ApprovalDialog';
import { rerouteOptions } from '../lib/mockData';
import { useToast } from '../components/ui/Toast';

export default function ReRoute() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [approvalOpen, setApprovalOpen] = useState(false);
  const { push } = useToast();

  const option = rerouteOptions.find((o) => o.id === selectedOption);

  return (
    <div className="flex flex-col gap-6 animate-rise-in">
      <div>
        <h1 className="font-display text-2xl font-semibold text-text-primary">ReRoute</h1>
        <p className="mt-1 text-sm text-text-muted">A route change was detected. Review and approve the best option.</p>
      </div>

      <Card className="flex items-start gap-3 border-caution/30 bg-caution-soft p-4">
        <AlertTriangle size={18} className="mt-0.5 shrink-0 text-caution" />
        <div>
          <p className="text-sm font-medium text-text-primary">Conflict detected: Observability breakout</p>
          <p className="mt-1 text-sm text-text-secondary">
            Your 1:50 PM session moved venues, creating a 22-minute transition that conflicts with your next booking.
          </p>
        </div>
      </Card>

      <div className="flex flex-col gap-4">
        {rerouteOptions.map((opt) => (
          <Card
            key={opt.id}
            interactive
            onClick={() => setSelectedOption(opt.id)}
            className={`p-5 ${selectedOption === opt.id ? 'border-signal-500/60 bg-signal-500/8' : ''}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-text-primary">{opt.title}</p>
                  {opt.recommended && <Badge status="go">Recommended</Badge>}
                </div>
                <p className="mt-2 text-sm text-text-secondary">{opt.reason}</p>
                <p className="mt-2 text-xs font-medium text-signal-400">{opt.impact}</p>
              </div>
              <input
                type="radio"
                checked={selectedOption === opt.id}
                onChange={() => setSelectedOption(opt.id)}
                className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-signal-500)]"
              />
            </div>
          </Card>
        ))}
      </div>

      <div className="flex gap-3">
        <Button
          disabled={!selectedOption}
          icon={<Compass size={15} />}
          onClick={() => setApprovalOpen(true)}
        >
          Review & approve
        </Button>
      </div>

      {option && (
        <ApprovalDialog
          open={approvalOpen}
          onClose={() => setApprovalOpen(false)}
          onApprove={() => {
            setApprovalOpen(false);
            push('Reroute approved — your schedule has been updated.', 'go');
          }}
          onReject={() => {
            setApprovalOpen(false);
            push('Reroute rejected. Your original schedule stays unchanged.', 'neutral');
          }}
          title={option.title}
          reason={option.reason}
          impact={option.impact}
        />
      )}
    </div>
  );
}
