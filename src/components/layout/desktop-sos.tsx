"use client";

import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export function DesktopSOS() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    // Target the bottom section of the footer
    const footerCopyright = document.getElementById("footer-copyright");
    if (!footerCopyright) return;

    // Create an observer to detect when the target enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtBottom(entry.isIntersecting);
      },
      { 
        root: null,
        rootMargin: "0px", 
        threshold: 0 
      }
    );

    observer.observe(footerCopyright);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div 
      className="hidden md:flex fixed right-8 z-50"
      // bottom-8 is 32px. When the footer is visible, push it up to 120px to clear the easter egg perfectly.
      initial={{ bottom: 32 }}
      animate={{ bottom: isAtBottom ? 120 : 32 }} 
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <button 
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-xl transition-all hover:bg-destructive/90 hover:scale-105 active:scale-95"
        aria-label="Emergency SOS"
      >
        {/* Pulsing ring effect for emergency focus */}
        <span className="absolute inset-0 rounded-full ring-2 ring-destructive ring-offset-2 ring-offset-background animate-ping opacity-20"></span>
        
        <AlertTriangle className="h-6 w-6" />
      </button>
    </motion.div>
  );
}