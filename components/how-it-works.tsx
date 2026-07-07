import { CalendarCheck, MessageCircle, Car } from "lucide-react"

const steps = [
  {
    icon: CalendarCheck,
    title: "Schedule your ride",
    description:
      "Choose your service, pickup, destination, date and time using our quick booking form.",
  },
  {
    icon: MessageCircle,
    title: "Confirm on WhatsApp",
    description:
      "Your details are sent straight to our team on WhatsApp. We reply instantly to confirm and quote.",
  },
  {
    icon: Car,
    title: "Sit back & enjoy",
    description:
      "Your chauffeur arrives on time in a pristine vehicle. Relax — we handle the rest.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Simple as it should be
        </p>
        <h2 className="mt-3 font-serif text-3xl text-balance text-foreground sm:text-4xl lg:text-5xl">
          Book a luxury ride in three steps
        </h2>
      </div>

      <div className="relative grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative rounded-2xl border border-border bg-card p-8 text-center"
          >
            <span className="absolute right-6 top-6 font-serif text-4xl text-primary/20">
              0{i + 1}
            </span>
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
              <step.icon className="size-6" />
            </span>
            <h3 className="mt-5 font-serif text-xl text-foreground">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
