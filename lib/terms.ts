/**
 * Premium Cancellation, Rescheduling & No-Show Policy.
 * Source: the Donald Executive policy document. Keep wording verbatim —
 * this is the text clients agree to when they book.
 */

export const termsTitle = "Premium Cancellation, Rescheduling & No-Show Policy"

export const termsIntro =
  "At Donald Executive, every booking represents a dedicated commitment of a premium vehicle, professional chauffeur, time, and operational resources exclusively reserved for our client. To maintain the exceptional standards expected from an executive transportation service, the following cancellation and rescheduling terms apply to all bookings unless otherwise agreed in a written corporate or service agreement."

/** Standard cancellation schedule, charged against the total confirmed booking value. */
export const cancellationCharges = [
  { notice: "More than 72 hours before service", charge: 20 },
  { notice: "48–72 hours before service", charge: 35 },
  { notice: "24–48 hours before service", charge: 50 },
  { notice: "12–24 hours before service", charge: 75 },
  { notice: "Less than 12 hours before service", charge: 100 },
  { notice: "No-show / failure to appear", charge: 100 },
] as const

export type TermsBlock =
  | { type: "p"; text: string }
  | { type: "list"; intro?: string; items: string[] }
  | { type: "charges" }

export type TermsSection = {
  id: string
  title: string
  body: TermsBlock[]
}

export const termsSections: TermsSection[] = [
  {
    id: "reservation-payment",
    title: "Reservation & Payment",
    body: [
      {
        type: "p",
        text: "A reservation becomes confirmed once Donald Executive has received the required booking information and the applicable deposit or full payment.",
      },
      {
        type: "p",
        text: "For premium, VIP, wedding, event, multiple-vehicle, and dedicated chauffeur bookings, a minimum 50% deposit may be required to secure the reservation.",
      },
      {
        type: "p",
        text: "The reserved vehicle and chauffeur may be withdrawn from other potential bookings once the reservation is confirmed.",
      },
    ],
  },
  {
    id: "cancellation-charges",
    title: "Cancellation Charges",
    body: [
      {
        type: "p",
        text: "Cancellation charges are calculated against the total confirmed booking value, including applicable vehicle, chauffeur, waiting, or additional service charges.",
      },
      { type: "charges" },
      {
        type: "p",
        text: "Where the applicable cancellation charge exceeds the amount already paid, the outstanding balance will become immediately payable.",
      },
    ],
  },
  {
    id: "vip-special-bookings",
    title: "Strict Cancellation Terms for VIP & Special Bookings",
    body: [
      {
        type: "p",
        text: "Bookings involving VIP transportation, weddings, corporate events, conferences, multiple vehicles, full-day chauffeur services, executive roadshows, or dedicated vehicle reservations require substantial advance planning and resource allocation. Accordingly:",
      },
      {
        type: "list",
        items: [
          "Cancellations made within 7 days of the scheduled service may attract a minimum 50% cancellation charge.",
          "Cancellations made within 72 hours may attract a 75% cancellation charge.",
          "Cancellations made within 24 hours will attract a 100% cancellation charge.",
        ],
      },
      {
        type: "p",
        text: "Specific terms may be provided in the quotation or service agreement and will take precedence over the standard cancellation schedule.",
      },
    ],
  },
  {
    id: "no-show",
    title: "No-Show Policy",
    body: [
      {
        type: "list",
        intro: "A booking will be considered a no-show where the client or passenger:",
        items: [
          "Fails to appear at the agreed pickup location.",
          "Cannot be contacted after the chauffeur's arrival.",
          "Provides incorrect pickup information resulting in the chauffeur being unable to locate the passenger.",
          "Arrives after the agreed waiting period without prior communication.",
          "Decides not to travel after the chauffeur has arrived.",
        ],
      },
      {
        type: "p",
        text: "A no-show will be charged at 100% of the confirmed booking value.",
      },
    ],
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers & Flight Delays",
    body: [
      {
        type: "p",
        text: "For airport transfers, clients are required to provide accurate flight information where applicable.",
      },
      {
        type: "p",
        text: "Donald Executive will make reasonable efforts to monitor provided flight details and accommodate legitimate flight delays. However, passengers who do not arrive, cannot be contacted, or fail to provide correct flight information may be treated as a no-show.",
      },
      {
        type: "p",
        text: "Where additional waiting time is required beyond the complimentary waiting period, additional waiting charges may apply.",
      },
    ],
  },
  {
    id: "rescheduling",
    title: "Rescheduling",
    body: [
      {
        type: "p",
        text: "We understand that schedules occasionally change. Requests to reschedule should therefore be communicated as early as possible.",
      },
      {
        type: "list",
        intro: "A confirmed booking may be rescheduled subject to:",
        items: [
          "Vehicle availability.",
          "Chauffeur availability.",
          "The new date and time.",
          "The applicable cancellation period.",
          "Any difference in service or vehicle charges.",
        ],
      },
      {
        type: "p",
        text: "Rescheduling requests made within 24 hours of the original booking time may be treated as a cancellation and new reservation.",
      },
    ],
  },
  {
    id: "deposits-refunds",
    title: "Deposits & Refunds",
    body: [
      {
        type: "p",
        text: "Deposits are used to secure the vehicle, chauffeur, and operational resources allocated to the booking.",
      },
      {
        type: "p",
        text: "Where a refund is applicable, it will be processed after deduction of any applicable cancellation, transaction, administrative, or third-party payment charges.",
      },
      {
        type: "p",
        text: "For bookings subject to non-refundable terms, the deposit will not be refundable.",
      },
    ],
  },
  {
    id: "corporate-clients",
    title: "Corporate Clients & Contracted Services",
    body: [
      {
        type: "p",
        text: "Corporate transportation contracts, employee transportation arrangements, long-term vehicle leasing, recurring bookings, executive retainers, and other contracted services may have individually negotiated cancellation and termination provisions.",
      },
      {
        type: "p",
        text: "Where a signed agreement exists, the terms of that agreement will take precedence over this general policy.",
      },
    ],
  },
  {
    id: "multi-day",
    title: "Multi-Day & Dedicated Chauffeur Services",
    body: [
      {
        type: "p",
        text: "For multi-day assignments or bookings where a vehicle and chauffeur are dedicated exclusively to a client, cancellation charges may be calculated based on the entire reserved assignment, rather than individual daily services.",
      },
      {
        type: "p",
        text: "This is because the vehicle and chauffeur may be unavailable for other clients for the duration of the reservation.",
      },
    ],
  },
  {
    id: "cancellation-by-us",
    title: "Cancellation by Donald Executive",
    body: [
      {
        type: "list",
        intro:
          "Donald Executive reserves the right to cancel or modify a reservation in exceptional circumstances, including:",
        items: [
          "Vehicle breakdown or mechanical failure.",
          "Safety concerns.",
          "Severe weather or road conditions.",
          "Government restrictions.",
          "Accidents or unforeseen operational circumstances.",
          "Events beyond our reasonable control.",
        ],
      },
      {
        type: "p",
        text: "Where possible, Donald Executive will provide a suitable replacement vehicle or alternative transportation arrangement.",
      },
      {
        type: "p",
        text: "Where Donald Executive is unable to provide an acceptable alternative, amounts paid for the affected service will be refunded in accordance with the applicable booking terms.",
      },
    ],
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    body: [
      {
        type: "p",
        text: "Donald Executive shall not be liable for cancellation, delay, or inability to perform services arising from circumstances beyond reasonable control, including natural disasters, extreme weather, road closures, civil disturbances, government action, accidents, or other unforeseen events.",
      },
      {
        type: "p",
        text: "We will nevertheless make every reasonable effort to assist the client and provide an alternative solution.",
      },
    ],
  },
  {
    id: "client-responsibility",
    title: "Client Responsibility",
    body: [
      {
        type: "list",
        intro: "Clients are responsible for providing accurate:",
        items: [
          "Pickup and drop-off locations.",
          "Contact information.",
          "Flight details.",
          "Passenger information.",
          "Booking dates and times.",
          "Special requirements.",
        ],
      },
      {
        type: "p",
        text: "Donald Executive shall not be responsible for costs arising from incorrect or incomplete information supplied by the client.",
      },
    ],
  },
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: [
      {
        type: "p",
        text: "By making a booking or accepting a quotation from Donald Executive, the client acknowledges and agrees to this Premium Cancellation, Rescheduling & No-Show Policy.",
      },
      {
        type: "p",
        text: "These terms are intended to protect both the client and Donald Executive while ensuring that premium vehicles and professional chauffeurs remain available exclusively for confirmed reservations.",
      },
    ],
  },
]
