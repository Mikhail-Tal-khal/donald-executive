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
