"use client"

import { useState } from "react"
import {
  MapPin,
  Navigation,
  CalendarDays,
  Clock,
  Users,
  Car,
  User,
  MessageSquare,
  ArrowRight,
} from "lucide-react"
import { buildWhatsAppLink, serviceOptions, type BookingDetails } from "@/lib/site"
import { cn } from "@/lib/utils"

const empty: BookingDetails = {
  service: serviceOptions[0],
  pickup: "",
  dropoff: "",
  date: "",
  time: "",
  passengers: "1",
  vehicles: "1",
  name: "",
  notes: "",
}

const fieldBase =
  "w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"

const labelBase =
  "mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground"

export function BookingForm({ className }: { className?: string }) {
  const [form, setForm] = useState<BookingDetails>(empty)

  // Vehicle count only applies to wedding convoys
  const showVehicles = form.service === "Wedding Transport"

  const update = (key: keyof BookingDetails, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const url = buildWhatsAppLink(
      showVehicles ? form : { ...form, vehicles: "" },
    )
    // Navigate rather than window.open: a popup with a features string gets
    // blocked silently on mobile Safari and Chrome, and on a phone this hands
    // straight off to the WhatsApp app.
    window.location.href = url
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-2xl border border-border bg-card/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-6",
        className,
      )}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl text-foreground">Schedule your ride</h3>
          <p className="text-xs text-muted-foreground">Instant confirmation via WhatsApp</p>
        </div>
        <span className="hidden rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:inline">
          24/7 Service
        </span>
      </div>

      <div className="grid gap-4">
        <div>
          <label className={labelBase} htmlFor="service">
            Service
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className={cn(fieldBase, "appearance-none")}
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option} className="bg-card text-foreground">
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelBase} htmlFor="pickup">
              <MapPin className="size-3.5 text-primary" /> Pickup
            </label>
            <input
              id="pickup"
              value={form.pickup}
              onChange={(e) => update("pickup", e.target.value)}
              placeholder="e.g. Nyali, Mombasa"
              className={fieldBase}
              required
            />
          </div>
          <div>
            <label className={labelBase} htmlFor="dropoff">
              <Navigation className="size-3.5 text-primary" /> Destination
            </label>
            <input
              id="dropoff"
              value={form.dropoff}
              onChange={(e) => update("dropoff", e.target.value)}
              placeholder="e.g. Moi Int. Airport"
              className={fieldBase}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={labelBase} htmlFor="date">
              <CalendarDays className="size-3.5 text-primary" /> Date
            </label>
            <input
              id="date"
              type="date"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className={fieldBase}
              required
            />
          </div>
          <div>
            <label className={labelBase} htmlFor="time">
              <Clock className="size-3.5 text-primary" /> Time
            </label>
            <input
              id="time"
              type="time"
              value={form.time}
              onChange={(e) => update("time", e.target.value)}
              className={fieldBase}
              required
            />
          </div>
          <div>
            <label className={labelBase} htmlFor="passengers">
              <Users className="size-3.5 text-primary" /> Guests
            </label>
            <input
              id="passengers"
              type="number"
              min="1"
              max="50"
              value={form.passengers}
              onChange={(e) => update("passengers", e.target.value)}
              className={fieldBase}
            />
          </div>
        </div>

        {showVehicles && (
          <div>
            <label className={labelBase} htmlFor="vehicles">
              <Car className="size-3.5 text-primary" /> Number of vehicles
            </label>
            <input
              id="vehicles"
              type="number"
              min="1"
              max="20"
              value={form.vehicles}
              onChange={(e) => update("vehicles", e.target.value)}
              className={fieldBase}
            />
          </div>
        )}

        <div>
          <label className={labelBase} htmlFor="name">
            <User className="size-3.5 text-primary" /> Your name
          </label>
          <input
            id="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Full name"
            className={fieldBase}
            required
          />
        </div>

        <div>
          <label className={labelBase} htmlFor="notes">
            <MessageSquare className="size-3.5 text-primary" /> Notes (optional)
          </label>
          <textarea
            id="notes"
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Flight number, special requests, luggage…"
            rows={2}
            className={cn(fieldBase, "resize-none")}
          />
        </div>

        <button
          type="submit"
          className="group mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:bg-gold-soft"
        >
          Book on WhatsApp
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </button>
        <p className="text-center text-xs text-muted-foreground">
          Your details are pre-filled into a WhatsApp message to our team.
        </p>
      </div>
    </form>
  )
}
