import { Button } from "@/shared/components/ui/Button";

interface OpenShift {
  id: string;
  priority: "STAT" | "URGENT";
  role: string;
  unit: string;
  time: string;
  interestedCount: number;
  topMatch?: string;
  waitlistActive?: boolean;
  badgeColor: string;
  badgeText: string;
}

const mockOpenShifts: OpenShift[] = [
  {
    id: "1",
    priority: "STAT",
    role: "Lab Technician",
    unit: "Hematology Unit",
    time: "Today, 22:00",
    interestedCount: 3,
    topMatch: "Adebayo K.",
    badgeColor: "bg-error-100 text-error-700",
    badgeText: "STAT",
  },
  {
    id: "2",
    priority: "URGENT",
    role: "Pharmacist",
    unit: "Main Pharmacy",
    time: "Tomorrow, 08:00",
    interestedCount: 1,
    waitlistActive: true,
    badgeColor: "bg-warning-100 text-warning-700",
    badgeText: "URGENT",
  },
];

export function OpenShiftsSection() {
  return (
    <div>
      <h2 className="mb-4 text-base font-bold text-neutral-900">
        Open Shifts Needing Staff
      </h2>

      <div className="space-y-3">
        {mockOpenShifts.map((shift) => (
          <div
            key={shift.id}
            className="flex items-center gap-4 rounded-2xl border border-neutral-100 bg-white px-4 py-4"
          >
            {/* Priority badge icon */}
            <div
              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-[10px] font-bold ${shift.badgeColor}`}
            >
              {shift.badgeText}
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-neutral-900">
                {shift.role}
              </p>
              <p className="text-xs text-neutral-500">
                {shift.unit} • {shift.time}
              </p>
            </div>

            {/* Interested */}
            <div className="flex-shrink-0 text-center">
              <p className="text-sm font-bold text-error-600">
                {shift.interestedCount} Interested
              </p>
              <p className="text-[10px] text-neutral-400">
                {shift.topMatch
                  ? `Top match: ${shift.topMatch}`
                  : "Waitlisting active"}
              </p>
            </div>

            {/* Action */}
            <Button
              size="sm"
              className={`flex-shrink-0 rounded-lg text-xs font-semibold uppercase tracking-wide ${
                shift.interestedCount > 1
                  ? "bg-neutral-900 text-white hover:bg-neutral-700"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              Review
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
