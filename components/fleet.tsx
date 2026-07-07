import Image from "next/image"
import { Check } from "lucide-react"

const points = [
  "Late-model luxury sedans, SUVs and executive vans",
  "Professional, uniformed and background-checked chauffeurs",
  "Complimentary bottled water, Wi-Fi and phone charging",
  "Real-time flight tracking for every airport transfer",
  "Fully insured vehicles, sanitised before every trip",
  "Fixed, transparent pricing — no surprises",
]

export function Fleet() {
  return (
    <section id="fleet" className="relative overflow-hidden bg-card/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/fleet-lineup.png"
              alt="A lineup of Donald Executive luxury vehicles"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-primary/30 bg-background/90 p-5 backdrop-blur-md sm:block lg:-right-6">
            <p className="font-serif text-3xl text-primary">10+ yrs</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Trusted on the coast
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Why Donald Executive
          </p>
          <h2 className="mt-3 font-serif text-3xl text-balance text-foreground sm:text-4xl lg:text-5xl">
            The standard of luxury you deserve
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every detail is engineered around your comfort and safety. We pair a
            pristine fleet with chauffeurs who treat every guest like a VIP.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
