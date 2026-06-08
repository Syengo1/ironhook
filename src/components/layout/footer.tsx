"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Code2, ArrowUpRight } from "lucide-react";

// --- Custom Brand Icons matching Lucide's styling ---
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-border bg-card/30 pt-16 pb-24 md:pb-8 z-10 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- Top Section: 4-Column Grid --- */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative h-8 w-32">
              <Image src="/logos/combination-logo.svg" alt="Ironhook Logo" fill className="object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The gold standard in emergency towing and roadside recovery. 
              We are the 24/7 Road Warriors, engineered to get you moving when the unexpected happens.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <XIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Platform</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/dispatch" className="hover:text-primary transition-colors">Request a Tow</Link></li>
              <li><Link href="/track" className="hover:text-primary transition-colors">Live Tracking</Link></li>
              <li><Link href="/fleet" className="hover:text-primary transition-colors">Our Fleet</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Rates & Pricing</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services/emergency" className="hover:text-primary transition-colors">Emergency Towing</Link></li>
              <li><Link href="/services/recovery" className="hover:text-primary transition-colors">Off-Road Recovery</Link></li>
              <li><Link href="/services/jumpstart" className="hover:text-primary transition-colors">Battery Jumpstart</Link></li>
              <li><Link href="/services/fuel" className="hover:text-primary transition-colors">Fuel Delivery</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Dispatch HQ</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Ironhook Command Center<br />Ngong, Kajiado County<br />Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>0800-IRONHOOK</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>dispatch@ironhook.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Section: Copyright & Easter Egg --- */}
        <div id="footer-copyright" className="flex flex-col md:flex-row items-center justify-between border-t border-border/50 pt-8 gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Ironhook Recovery Services. All rights reserved.
          </p>

          {/* Developed By Syengo - Interactive Tag */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-default">
            <span>Engineered by</span>
            <motion.a
              href="https://antonysyengo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center pr-5 pl-1 py-1 overflow-visible"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* Kinetic Text Glitch/Glow Effect */}
              <motion.span
                variants={{
                  rest: { color: "var(--foreground)", letterSpacing: "0em", textShadow: "none" },
                  hover: { 
                    color: "#00f6ac",
                    letterSpacing: "0.1em",
                    textShadow: "0px 0px 12px rgba(0, 246, 172, 0.6)"
                  }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 font-bold uppercase tracking-wider transition-colors"
              >
                Syengo
              </motion.span>

              {/* Emerging Icons on Hover */}
              <motion.span
                variants={{
                  rest: { opacity: 0, scale: 0.5, x: -10, rotate: -45 },
                  hover: { opacity: 1, scale: 1, x: 0, rotate: 0 }
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                className="absolute right-0 text-primary"
              >
                <Code2 className="h-4 w-4" />
              </motion.span>
              
              {/* Subtle click prompt that slides up */}
              <motion.span
                variants={{
                  rest: { opacity: 0, y: 10 },
                  hover: { opacity: 1, y: -20 }
                }}
                className="absolute top-0 right-0 flex items-center text-[9px] font-mono text-primary/80 whitespace-nowrap pointer-events-none"
              >
                Execute <ArrowUpRight className="h-2 w-2 ml-0.5" />
              </motion.span>
            </motion.a>
          </div>
        </div>

      </div>
    </footer>
  );
}