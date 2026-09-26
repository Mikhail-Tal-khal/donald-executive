import { ArrowRight, FileText } from "lucide-react"
import { CancellationTable } from "@/components/cancellation-table"

const highlights = [
  "A minimum 50% deposit may be required for VIP, wedding, event, multi-vehicle and dedicated chauffeur bookings.",
  "No-shows are charged at 100% of the confirmed booking value.",
  "Reschedule requests within 24 hours of pickup may be treated as a cancellation and new reservation.",
]

export function BookingTerms() {
  return (
    <section id="terms" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Terms &amp; Conditions
          </p>
          <h2 className="mt-3 font-serif text-3xl text-balance text-foreground sm:text-4xl lg:text-5xl">
            Cancellation &amp; no-show policy
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every booking reserves a premium vehicle and a professional chauffeur
            exclusively for you. Cancellation charges are calculated against the total
            confirmed booking value.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="/terms"
            className="group mt-8 inline-flex h-11 items-center gap-2 rounded-lg border border-primary/40 px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <FileText className="size-4" />
            Read the full terms
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <CancellationTable />
      </div>
    </section>
  )
}
