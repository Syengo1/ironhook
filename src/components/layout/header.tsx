import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* Logos: Switches based on screen size */}
        <Link href="/" className="flex items-center gap-2">
          {/* Mobile: Icon Only */}
          <div className="md:hidden relative h-8 w-8">
            <Image src="/logos/combination-logo.svg" alt="Ironhook Icon" fill className="object-contain" />
          </div>
          {/* Desktop: Combination Logo */}
          <div className="hidden md:block relative h-8 w-32">
            <Image src="/logos/combination-logo.svg" alt="Ironhook Logo" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-muted-foreground">
          <Link href="/" className="text-foreground transition-colors hover:text-primary">Home</Link>
          <Link href="/services" className="transition-colors hover:text-primary">Services</Link>
          <Link href="/fleet" className="transition-colors hover:text-primary">Our Fleet</Link>
          <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>

        {/* Mobile Hamburger Menu (Right Side) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-border">
              <SheetHeader>
                <SheetTitle className="text-left text-primary">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-6 text-lg font-medium">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                <Link href="/fleet" className="hover:text-primary transition-colors">Our Fleet</Link>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                <Link href="/account" className="hover:text-primary transition-colors">My Account</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}