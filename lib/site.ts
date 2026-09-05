export const site = {
  name: "Donald Executive",
  tagline: "Safe · Comfort · Luxury",
  location: "Nyali, Mombasa, Kenya",
  email: "donaldexecutiveke@gmail.com",
  // Calls only
  phoneDisplay: "+254 711 164919",
  phone: "254711164919",
  // WhatsApp only — digits for wa.me links (Kenya code 254, no leading 0)
  whatsappDisplay: "+254 705 753299",
  whatsapp: "254705753299",
  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },
} as const

export const services = [
  {
    id: "wedding",
    title: "Wedding Transport",
    description:
      "Arrive in timeless elegance. Immaculate cars, courteous chauffeurs and thoughtful decor for your special day.",
    image: "/images/service-wedding.png",
  },
  {
    id: "sgr",
    title: "SGR Transfers",
    description:
      "Timely chauffeur transfers to and from the SGR station, with luggage assistance and flexible scheduling around your train.",
    image: "/images/comfort-car.jpeg",
  },
  {
    id: "corporate",
    title: "Corporate Transport",
    description:
      "Reliable, discreet executive travel for meetings, conferences and roadshows across Mombasa and beyond.",
    image: "/images/service-corporate.png",
  },
  {
    id: "vip",
    title: "VIP Transport",
    description:
      "First-class comfort and privacy for dignitaries, celebrities and guests who expect nothing but the best.",
    image: "/images/interior-vip.png",
  },
  {
    id: "airport",
    title: "Airport Transfers",
    description:
      "Punctual pick-ups and drop-offs with flight tracking and meet-and-greet at Moi International Airport.",
    image: "/images/service-airport.png",
  },
  {
    id: "car-hire",
    title: "Car Hire",
    description:
      "Self-drive or chauffeur-driven luxury vehicles by the hour, day or week — tailored to your itinerary.",
    image: "/images/fleet-lineup.png",
  },
] as const

export const serviceOptions = services.map((s) => s.title)

export type BookingDetails = {
  service: string
  vehicle: string
  pickup: string
  dropoff: string
  date: string
  time: string
  passengers: string
  vehicles: string
  name: string
  notes: string
}

export function buildWhatsAppLink(details: Partial<BookingDetails>) {
  const lines = [
    `*New Booking — ${site.name}*`,
    "",
    details.service ? `Service: ${details.service}` : null,
    details.vehicle ? `Vehicle: ${details.vehicle}` : null,
    details.name ? `Name: ${details.name}` : null,
    details.pickup ? `Pickup: ${details.pickup}` : null,
    details.dropoff ? `Destination: ${details.dropoff}` : null,
    details.date ? `Date: ${details.date}` : null,
    details.time ? `Time: ${details.time}` : null,
    details.passengers ? `Passengers: ${details.passengers}` : null,
    details.vehicles ? `Vehicles needed: ${details.vehicles}` : null,
    details.notes ? `Notes: ${details.notes}` : null,
  ].filter(Boolean)

  const text = encodeURIComponent(lines.join("\n"))
  return `https://wa.me/${site.whatsapp}?text=${text}`
}

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

/**
 * Rates used to convert KES into a foreign currency when a row has no
 * published price of its own. Update these when the rate moves.
 */
export const KES_PER_USD = 133
export const KES_PER_EUR = 150

export const currencies = ["KES", "USD", "EUR"] as const

export type Currency = (typeof currencies)[number]

export type VehiclePrice = {
  /** Stable id, used for React keys and WhatsApp deep links */
  id: string
  vehicle: string
  kes: number
  /**
   * Published USD price from the printed price list. These are marketing
   * figures rounded per row, so they are kept verbatim rather than derived
   * from KES_PER_USD. Omit to fall back to the live conversion.
   */
  usd?: number
  /** Published EUR price, if one is ever set. Otherwise converted. */
  eur?: number
  sortOrder: number
}

/** Source: the Donald Executive vehicle price list. */
export const pricing: VehiclePrice[] = [
  { id: "prado", vehicle: "SUV Landcruiser Prado", kes: 15000, usd: 115, sortOrder: 1 },
  { id: "economy-sedan", vehicle: "Economy Sedans", kes: 4000, usd: 30, sortOrder: 2 },
  { id: "noah-voxy", vehicle: "Toyota Noah / Voxy", kes: 6000, usd: 45, sortOrder: 3 },
  { id: "vellfire-alphard", vehicle: "Toyota Vellfire / Alphard", kes: 8000, usd: 60, sortOrder: 4 },
  { id: "landcruiser-zx", vehicle: "Landcruiser ZX", kes: 20000, usd: 150, sortOrder: 5 },
  { id: "crown", vehicle: "Toyota Crown", kes: 7000, usd: 55, sortOrder: 6 },
]

export const pricingNote =
  "All prices are inclusive of driver, fuel and standard amenities."

/** Amount for a row in the given currency: published figure, else converted. */
export function amountIn(item: VehiclePrice, currency: Currency) {
  switch (currency) {
    case "KES":
      return item.kes
    case "USD":
      return item.usd ?? Math.round(item.kes / KES_PER_USD)
    case "EUR":
      return item.eur ?? Math.round(item.kes / KES_PER_EUR)
  }
}

const prefix: Record<Currency, string> = {
  KES: "KES ",
  USD: "$",
  EUR: "€",
}

export function formatPrice(item: VehiclePrice, currency: Currency) {
  const locale = currency === "KES" ? "en-KE" : "en-US"
  return `${prefix[currency]}${amountIn(item, currency).toLocaleString(locale)}`
}
