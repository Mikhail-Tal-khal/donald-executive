import { Landmark, CreditCard, ShieldCheck } from "lucide-react"

/**
 * Stylised mobile-money mark for M-Pesa. Drawn rather than using the
 * Safaricom logo asset so we are not redistributing their trademark.
 */
function MpesaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10.5 19h3" />
      <path d="M10 7.5h4" />
      <path d="M10 10.5h4" />
      <path d="M12 7.5v6" />
      <path d="M10.5 13.5h3" />
    </svg>
  )
}

const methods = [
  {
    icon: MpesaIcon,
    name: "M-Pesa",
    detail: "Kenya's mobile money — pay or deposit straight from your phone.",
    tag: "Mobile money",
  },
  {
    icon: Landmark,
    name: "Bank Transfer",
    detail: "Local and international transfers for corporate accounts.",
    tag: "EFT / RTGS",
  },
  {
    icon: CreditCard,
    name: "Visa Card",
    detail: "Visa debit and credit cards accepted for card payments.",
    tag: "Card",
  },
]

export function PaymentMethods() {
  return (
    <section
      id="payments"
      className="relative overflow-hidden bg-card/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Payments
          </p>
          <h2 className="mt-3 font-serif text-3xl text-balance text-foreground sm:text-4xl lg:text-5xl">
            We accept the following payment methods
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            We accept M-Pesa payments, bank transfers, and Visa card payments. All
            transactions are secure and processed through our trusted payment
            partners.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((method) => (
            <li
              key={method.name}
              className="flex flex-col items-center rounded-2xl border border-border bg-background/50 p-8 text-center transition-colors hover:border-primary/40"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <method.icon className="size-7" />
              </span>
              <h3 className="mt-5 font-serif text-xl text-foreground">{method.name}</h3>
              <span className="mt-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
                {method.tag}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {method.detail}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="size-4 shrink-0 text-primary" />
          Payment details are shared privately on WhatsApp once your booking is
          confirmed.
        </p>
      </div>
    </section>
  )
}
