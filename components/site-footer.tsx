import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { site } from "@/lib/site"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 3.4-2.46V9.7a5.68 5.68 0 0 0-.81-.06A5.66 5.66 0 0 0 4.2 15.3a5.66 5.66 0 0 0 9.75 3.93 5.62 5.62 0 0 0 1.6-3.94V9.01a7.33 7.33 0 0 0 4.29 1.37V7.3a4.29 4.29 0 0 1-3.24-1.48z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.55c0-.93.26-1.56 1.59-1.56h1.7V3.13A22.7 22.7 0 0 0 14.31 3c-2.46 0-4.15 1.5-4.15 4.26v2.38H7.4v3.2h2.76V21h3.34z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const nav = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "How it works", href: "#how" },
  { label: "Book Now", href: "#book" },
]

export function SiteFooter() {
  const socials = [
    { icon: FacebookIcon, href: site.socials.facebook, label: "Facebook" },
    { icon: InstagramIcon, href: site.socials.instagram, label: "Instagram" },
    { icon: TikTokIcon, href: site.socials.tiktok, label: "TikTok" },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="relative block size-12 shrink-0 overflow-hidden rounded-full bg-background ring-1 ring-primary/40">
              <Image
                src="/images/donald-executive-logo.jpeg"
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span>
              <span className="block font-serif text-lg font-semibold text-foreground">
                Donald Executive
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-primary">
                Safe · Comfort · Luxury
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Premium chauffeur-driven transport and car hire based in Nyali, Mombasa.
            Weddings, corporate, VIP, airport transfers and more — booked instantly on
            WhatsApp.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-base text-foreground">Explore</h4>
          <ul className="mt-2 space-y-0.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base text-foreground">Contact</h4>
          <ul className="mt-2 space-y-0.5 text-sm text-muted-foreground">
            <li className="flex min-h-11 items-center gap-2.5">
              <MapPin className="size-4 shrink-0 text-primary" />
              {site.location}
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-2.5 transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-11 items-center gap-2.5 break-all transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Donald Executive. All rights reserved.</p>
          <p>Nyali, Mombasa · Kenya</p>
        </div>
      </div>
    </footer>
  )
}
