import Link from "next/link";
import { Home, MapPin, Clock, User } from "lucide-react";

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border pb-safe">
      <div className="flex h-16 items-center justify-around px-2">
        
        <Link href="/" className="flex flex-col items-center justify-center w-16 gap-1 text-muted-foreground hover:text-primary transition-colors">
          <Home className="h-5 w-5" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        
        <Link href="/track" className="flex flex-col items-center justify-center w-16 gap-1 text-muted-foreground hover:text-primary transition-colors">
          <MapPin className="h-5 w-5" />
          <span className="text-[10px] font-medium">Track</span>
        </Link>

        {/* Raised Center SOS Button */}
        <div className="relative -top-5 flex justify-center w-16">
          <button 
            className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-lg shadow-destructive/20 ring-4 ring-background transition-transform active:scale-95"
            aria-label="Emergency SOS"
          >
            <span className="font-bold tracking-widest text-sm">SOS</span>
          </button>
        </div>

        <Link href="/history" className="flex flex-col items-center justify-center w-16 gap-1 text-muted-foreground hover:text-primary transition-colors">
          <Clock className="h-5 w-5" />
          <span className="text-[10px] font-medium">History</span>
        </Link>

        <Link href="/profile" className="flex flex-col items-center justify-center w-16 gap-1 text-muted-foreground hover:text-primary transition-colors">
          <User className="h-5 w-5" />
          <span className="text-[10px] font-medium">Profile</span>
        </Link>

      </div>
    </nav>
  );
}