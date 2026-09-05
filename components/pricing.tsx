"use client"

import { useState } from "react"
import { ArrowUpRight, Info } from "lucide-react"
import {
  pricing,
  pricingNote,
  currencies,
  formatPrice,
  buildWhatsAppLink,
  KES_PER_USD,
  KES_PER_EUR,
  type Currency,
} from "@/lib/site"
import { cn } from "@/lib/utils"

const rows = [...pricing].sort((a, b) => a.sortOrder - b.sortOrder)

function bookHref(vehicle: string, price: string) {
  return buildWhatsAppLink({
    service: "Car Hire",
    vehicle: `${vehicle} — ${price}`,
  })
}

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("KES")
  const others = currencies.filter((c) => c !== currency)

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Transparent rates
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl text-balance text-foreground sm:text-4xl lg:text-5xl">
            Vehicle price list
          </h2>
          <p className="mt-4 flex max-w-lg items-start gap-2 text-sm leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-primary" />
            {pricingNote}
          </p>
        </div>

        {/* Currency toggle */}
        <div
          role="group"
          aria-label="Display currency"
          className="inline-flex shrink-0 rounded-full border border-border bg-card p-1"
        >
          {currencies.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCurrency(c)}
              aria-pressed={currency === c}
              className={cn(
                "min-h-11 rounded-full px-5 text-sm font-semibold uppercase tracking-wider transition-colors",
                currency === c
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Table — md and up */}
      <div className="hidden overflow-hidden rounded-2xl border border-border bg-card md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Donald Executive vehicle rates in Kenyan shillings, US dollars and euros
          </caption>
          <thead>
            <tr className="border-b border-border bg-background/40">
              <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Vehicle
              </th>
              <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Price ({currency})
              </th>
              {others.map((c) => (
                <th
                  key={c}
                  scope="col"
                  className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Price ({c})
                </th>
              ))}
              <th scope="col" className="px-6 py-4 text-right">
                <span className="sr-only">Book</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => {
              const primary = formatPrice(item, currency)
              return (
                <tr
                  key={item.id}
                  className="border-b border-border/60 transition-colors last:border-0 hover:bg-background/40"
                >
                  <th scope="row" className="px-6 py-5 font-serif text-lg font-normal text-foreground">
                    {item.vehicle}
                  </th>
                  <td className="px-6 py-5 text-xl font-semibold tabular-nums text-primary">
                    {primary}
                  </td>
                  {others.map((c) => (
                    <td key={c} className="px-6 py-5 text-sm tabular-nums text-muted-foreground">
                      {formatPrice(item, c)}
                    </td>
                  ))}
                  <td className="px-6 py-5 text-right">
                    <a
                      href={bookHref(item.vehicle, primary)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-11 items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Book Now
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Cards — below md */}
      <ul className="grid gap-4 md:hidden">
        {rows.map((item) => {
          const primary = formatPrice(item, currency)
          return (
            <li key={item.id} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-serif text-lg text-foreground">{item.vehicle}</h3>
              <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-2xl font-semibold tabular-nums text-primary">
                  {primary}
                </span>
                <span className="text-sm tabular-nums text-muted-foreground">
                  {others.map((c) => formatPrice(item, c)).join(" · ")}
                </span>
              </div>
              <a
                href={bookHref(item.vehicle, primary)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-soft"
              >
                Book Now
                <ArrowUpRight className="size-4" />
              </a>
            </li>
          )
        })}
      </ul>

      <p className="mt-6 text-xs text-muted-foreground">
        USD and EUR figures are indicative and settled in KES at the prevailing
        rate (approx. KES {KES_PER_USD.toLocaleString("en-KE")} to $1 and KES{" "}
        {KES_PER_EUR.toLocaleString("en-KE")} to €1). Rates cover standard trips
        — long-distance, multi-day and wedding convoys are quoted on request.
      </p>
    </section>
  )
}
