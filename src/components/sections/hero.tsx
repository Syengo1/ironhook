"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Background Mint Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 max-w-4xl space-y-6"
      >
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary">
          24/7 ROAD WARRIORS
        </span>
        
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Elite Towing & Recovery <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00c48a]">
             When You Need It Most.
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          Fast, robust, and secure roadside assistance across Kenya. 
          Pin your location and our closest unit will be dispatched instantly.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
          <Button size="lg" className="h-14 w-full px-8 text-lg font-bold sm:w-auto transition-transform hover:scale-105">
            Request a Tow <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 w-full px-8 text-lg font-bold sm:w-auto border-border hover:bg-secondary">
            <PhoneCall className="mr-2 h-5 w-5" /> 0800-IRONHOOK
          </Button>
        </div>
      </motion.div>
    </section>
  );
}