import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { services, buildWhatsAppLink } from "@/lib/site"

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            What we offer
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl text-balance text-foreground sm:text-4xl lg:text-5xl">
            Bespoke transport for every occasion
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          From aisle to boardroom to runway, every journey is handled with
          discretion, punctuality and first-class comfort.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <a
            key={service.id}
            href={buildWhatsAppLink({ service: service.title })}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50" +
              (i === 0 ? " sm:col-span-2 lg:col-span-1" : "")
            }
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-xl text-foreground">{service.title}</h3>
                <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="mt-4 text-xs font-medium uppercase tracking-wider text-primary">
                Book via WhatsApp
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
