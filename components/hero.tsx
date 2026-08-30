import Image from "next/image"
import { Star, ShieldCheck, Clock } from "lucide-react"
import { BookingForm } from "@/components/booking-form"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-chauffeur.png"
          alt="Luxury chauffeur beside a premium car on the Mombasa coast at dusk"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-32 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-40 lg:pb-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <Star className="size-3.5 fill-primary" /> Nyali · Mombasa · Kenya
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl lg:text-6xl">
            Luxury travel, <br />
            <span className="text-gold-gradient italic">chauffeured</span> to perfection.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Donald Executive delivers safe, comfortable and refined transport across
            the Kenyan coast — weddings, corporate travel, VIP journeys, airport
            transfers and premium car hire. Book in seconds, straight to WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            <Feature icon={ShieldCheck} label="Vetted chauffeurs" />
            <Feature icon={Clock} label="24/7 availability" />
            <Feature icon={Star} label="Immaculate fleet" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="inline-flex h-12 items-center rounded-lg bg-primary px-7 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-gold-soft"
            >
              Schedule a Ride
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center rounded-lg border border-border px-7 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div id="book" className="lg:justify-self-end lg:pl-4">
          <BookingForm className="w-full lg:max-w-md" />
        </div>
      </div>
    </section>
  )
}

function Feature({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
}) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon className="size-5 text-primary" />
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  )
}
