import { AlertTriangle } from "lucide-react";

export function DesktopSOS() {
  return (
    <div className="hidden md:flex fixed bottom-8 right-8 z-50">
      <button 
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-xl transition-all hover:bg-destructive/90 hover:scale-105 active:scale-95"
        aria-label="Emergency SOS"
      >
        {/* Pulsing ring effect for emergency focus */}
        <span className="absolute inset-0 rounded-full ring-2 ring-destructive ring-offset-2 ring-offset-background animate-ping opacity-20"></span>
        
        <AlertTriangle className="h-6 w-6" />
      </button>
    </div>
  );
}