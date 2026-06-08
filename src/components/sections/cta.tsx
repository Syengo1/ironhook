import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 py-24 md:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">
          Stranded? We Are Already On The Way.
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
          Don't waste time waiting. Use our automated dispatch system to get the nearest Ironhook driver routed to your exact GPS location right now.
        </p>
        <Button size="lg" className="h-14 px-10 text-lg font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105">
          Dispatch Rescue Unit
        </Button>
      </div>
    </section>
  );
}