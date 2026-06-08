import { Truck, Car, Zap, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Emergency Towing",
    description: "Rapid response flatbed and wheel-lift towing for accidents and breakdowns, deployed in minutes.",
    icon: Truck,
  },
  {
    title: "Roadside Recovery",
    description: "Ditch extraction, mud winching, and off-road recovery engineered for the toughest terrains.",
    icon: Car,
  },
  {
    title: "Jumpstarts & Fuel",
    description: "Dead battery or empty tank? We deliver high-amp jumps and premium fuel directly to your coordinates.",
    icon: Zap,
  },
  {
    title: "Secure Transport",
    description: "Damage-free, fully insured transport for luxury, classic, and high-value vehicles.",
    icon: ShieldCheck,
  },
];

export function Services() {
  return (
    <section className="container mx-auto px-4 py-24 md:px-8">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Flawless Execution, Every Time.</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
          Our fleet is equipped with industry-leading hardware to handle any roadside crisis safely and efficiently.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary/10">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}