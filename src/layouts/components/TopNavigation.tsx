import { useLocation } from "react-router-dom";
import { HelpCircle, Menu, User } from "lucide-react";
import { Button } from "@/shared/components/ui/Button";
import { AppProfile } from "@/types";

function getPageTitle(pathname: string): string {
  if (pathname.includes("/onboarding")) return "Onboarding";
  const segment = pathname.split("/").filter(Boolean).pop() ?? "";
  const titles: Record<string, string> = {
    dashboard: "Clinical Dashboard",
    patients: "Patients",
    doctors: "Staff Rosters",
    appointments: "Shift Schedule",
    analytics: "Secure Messaging",
    settings: "Settings",
    help: "Support",
  };
  return (
    titles[segment] ??
    segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
  );
}

interface TopNavigationProps {
  onMenuClick: () => void;
  profile: AppProfile;
}

const profileContent: Record<
  AppProfile,
  { roleLabel: string; searchPlaceholder: string; accent: string }
> = {
  hospital: {
    roleLabel: "Hospital Operations",
    searchPlaceholder: "Search wards, facilities, patient requests...",
    accent: "text-secondary-700",
  },
  patient: {
    roleLabel: "Patient Portal",
    searchPlaceholder: "Search appointments, prescriptions, support...",
    accent: "text-success-700",
  },
  "medical-staff": {
    roleLabel: "Medical Staff Workspace",
    searchPlaceholder: "Search rounds, patients, case notes...",
    accent: "text-warning-800",
  },
};

export function TopNavigation({ onMenuClick, profile }: TopNavigationProps) {
  const location = useLocation();
  const title = getPageTitle(location.pathname);
  const content = profileContent[profile];

  return (
    <header className="flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-4 lg:px-6">
      {/* Left side — mobile menu + page title */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <span className={"text-base font-semibold " + content.accent}>
          {title}
        </span>
      </div>

      {/* Right side — help + avatar */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full p-2 text-neutral-500 hover:text-neutral-700"
        >
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" className="rounded-lg p-1.5">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
