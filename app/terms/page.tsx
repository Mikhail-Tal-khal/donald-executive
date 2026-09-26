import type { Metadata } from "next"
import { ArrowLeft, Mail, MessageCircle, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { CancellationTable } from "@/components/cancellation-table"
import { site } from "@/lib/site"
import { termsIntro, termsSections, termsTitle, type TermsBlock } from "@/lib/terms"

export const metadata: Metadata = {
  title: "Terms & Conditions | Donald Executive",
  description:
    "Donald Executive booking terms: premium cancellation, rescheduling and no-show policy for chauffeur, airport, wedding, corporate and VIP transport in Mombasa.",
}

function Block({ block }: { block: TermsBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>
    case "list":
      return (
        <div>
          {block.intro && <p>{block.intro}</p>}
          <ul className="mt-3 space-y-2">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    case "charges":
      return <CancellationTable />
  }
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
        <a
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </a>

        <header className="mt-4 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Terms &amp; Conditions
          </p>
          <h1 className="mt-3 font-serif text-3xl text-balance text-foreground sm:text-4xl lg:text-5xl">
            {termsTitle}
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {termsIntro}
          </p>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
          <nav aria-label="Policy sections" className="hidden lg:block">
            <ol className="sticky top-28 space-y-0.5 border-l border-border">
              {termsSections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px flex gap-2 border-l border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <span className="tabular-nums text-primary/70">{i + 1}.</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl space-y-12">
            {termsSections.map((section, i) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="flex items-baseline gap-3 font-serif text-xl text-foreground sm:text-2xl">
                  <span className="text-primary/60 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {section.body.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </div>
              </section>
            ))}

            <aside className="rounded-2xl border border-primary/30 bg-card p-6 sm:p-8">
              <p className="font-serif text-xl text-foreground">
                Questions about a booking?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Your journey. Our commitment. Executive service without compromise.
              </p>
              <ul className="mt-5 grid gap-1 text-sm text-muted-foreground sm:grid-cols-3">
                <li>
                  <a
                    href={`tel:+${site.phone}`}
                    className="flex min-h-11 items-center gap-2.5 transition-colors hover:text-primary"
                  >
                    <Phone className="size-4 shrink-0 text-primary" />
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-2.5 transition-colors hover:text-primary"
                  >
                    <MessageCircle className="size-4 shrink-0 text-primary" />
                    {site.whatsappDisplay}
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
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
