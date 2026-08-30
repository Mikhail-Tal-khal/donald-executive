import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react"
import { site, buildWhatsAppLink } from "@/lib/site"
import { BookingForm } from "@/components/booking-form"

export function Contact() {
  const items = [
    { icon: MapPin, label: "Location", value: site.location, href: undefined },
    {
      icon: Phone,
      label: "Call us",
      value: site.phoneDisplay,
      href: `tel:+${site.phone}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: site.whatsappDisplay,
      href: `https://wa.me/${site.whatsapp}`,
    },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: "Hours", value: "Open 24 / 7", href: undefined },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-card/40 py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Get in touch
          </p>
          <h2 className="mt-3 font-serif text-3xl text-balance text-foreground sm:text-4xl lg:text-5xl">
            Ready when you are
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Reach out any time — our team responds around the clock. All bookings and
            enquiries are handled directly on WhatsApp for the fastest service.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((item) => {
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-background/50 p-5 transition-colors hover:border-primary/40">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              )
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>

          <a
            href={buildWhatsAppLink({})}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 px-7 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Chat with us on WhatsApp
          </a>
        </div>

        <BookingForm />
      </div>
    </section>
  )
}
