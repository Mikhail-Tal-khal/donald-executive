import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Fleet } from "@/components/fleet"
import { Pricing } from "@/components/pricing"
import { PaymentMethods } from "@/components/payment-methods"
import { HowItWorks } from "@/components/how-it-works"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <Pricing />
        <PaymentMethods />
        <HowItWorks />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
