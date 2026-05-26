import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/shared/utils/cn";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 bg-[#071726]/55 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={title || "Dialog"}
        className={cn(
          "relative z-10 w-full max-w-2xl rounded-3xl border border-neutral-200 bg-white p-6 shadow-strong sm:p-8",
          className,
        )}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          {title ? (
            <h2 className="text-2xl font-semibold text-neutral-950 sm:text-3xl">
              {title}
            </h2>
          ) : (
            <span aria-hidden="true" />
          )}

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-neutral-200 p-2 text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
