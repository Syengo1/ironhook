import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RootProvider } from "@/providers/root-provider";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { DesktopSOS } from "@/components/layout/desktop-sos";
import { Footer } from "@/components/layout/footer";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ironhook | 24/7 Road Warriors",
  description: "Gold standard on-demand emergency towing and roadside recovery in Kenya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark selection:bg-[#00f6ac] selection:text-[#020202]">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        <RootProvider>
          {/* Global Layout Injections */}
          <Header />
          
          {/* Main Content Wrapper (Padding top accounts for the fixed header, padding bottom accounts for mobile nav) */}
          <main className="pt-16 pb-20 md:pb-0 min-h-screen">
            {children}
          </main>

          <Footer />

          <MobileNav />
          <DesktopSOS />
        </RootProvider>
      </body>
    </html>
  );
}