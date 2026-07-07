"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const links = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "How it works", href: "#how" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center overflow-hidden rounded-full bg-background ring-1 ring-primary/40">
            <Image
              src="/images/donald-executive-logo.png"
              alt="Donald Executive logo"
              width={44}
              height={44}
              className="scale-110 object-contain"
            />
          </span>
          <span className="leading-none">
            <span className="block font-serif text-base font-semibold tracking-wide text-foreground">
              Donald Executive
            </span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-primary">
              Safe · Comfort · Luxury
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:+${site.whatsapp}`}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="size-4 text-primary" />
            {site.phoneDisplay}
          </a>
          <a
            href="#book"
            className="inline-flex h-10 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-soft"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
