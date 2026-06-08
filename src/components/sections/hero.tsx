"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track the scroll position relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Map the scroll progress (0 to 1) to a scale value (1 to 1.15) for the zoom effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  // Slightly fade the image as they scroll down
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section 
      ref={containerRef} 
      className="relative flex min-h-[85vh] flex-col items-center justify-start pt-18 overflow-hidden px-4 text-center"
    >
      {/* --- Dynamic Background Layer --- */}
      <motion.div 
        style={{ scale, opacity }} 
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/images/hero-tow.jpg" 
          alt="Ironhook Towing Unit"
          fill
          className="object-cover opacity-40" // Lower opacity so the neon text pops
          priority
        />
        
        {/* Background Mint Glow - Positioned to interact with the image */}
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[130px] mix-blend-screen" />
        
        {/* Gradient overlay to blend seamlessly into the page background below */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
      </motion.div>

      {/* --- Foreground Content Layer --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-4xl space-y-6 mt-4 md:mt-12"
      >
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary backdrop-blur-md shadow-[0_0_15px_rgba(0,246,172,0.15)]">
          24/7 ROAD WARRIORS
        </span>
        
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl drop-shadow-2xl">
          Elite Towing & Recovery <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00c48a]">
             When You Need It Most.
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl font-medium drop-shadow-md">
          Fast and secure roadside assistance across Kenya. 
          Pin your location and our closest unit will be dispatched instantly.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
          <Button size="lg" className="h-14 w-full px-8 text-lg font-bold sm:w-auto transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,246,172,0.2)]">
            Request a Tow <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 w-full px-8 text-lg font-bold sm:w-auto border-border bg-background/40 backdrop-blur-sm hover:bg-secondary transition-colors">
            <PhoneCall className="mr-2 h-5 w-5" /> 0800-IRONHOOK
          </Button>
        </div>
      </motion.div>
    </section>
  );
}