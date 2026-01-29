import { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: `Schedule a consultation with ${company.name}. Take the first step toward personalized healthcare with our Direct Patient Care practice.`,
}

const visitTypes = [
  {
    title: "New Patient Consultation",
    description: "First-time visit to learn about our practice and discuss your health needs",
    duration: "45-60 minutes",
  },
  {
    title: "Membership Inquiry",
    description: "Learn more about our Direct Patient Care membership options",
    duration: "30 minutes",
  },
]

export default function BookPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sage-50 via-cream-50 to-rose-50 py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-200/30 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-script text-2xl text-sage-600">Schedule Your Visit</p>
            <h1 className="mb-6 font-heading text-5xl font-bold text-warm-800 md:text-6xl">
              Book a <span className="text-sage-600">Consultation</span>
            </h1>
            <p className="text-lg text-warm-600">
              Take the first step toward healthcare that&apos;s designed around you.
              Schedule your consultation today.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Booking Form */}
            <div className="rounded-3xl bg-gradient-to-br from-sage-50 to-cream-50 p-8 shadow-xl lg:p-10">
              <h2 className="mb-6 font-heading text-2xl font-bold text-warm-800">
                Request an Appointment
              </h2>
              <form className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-warm-700">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Jane"
                      className="rounded-xl border-sage-200 bg-white focus:border-sage-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-warm-700">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="rounded-xl border-sage-200 bg-white focus:border-sage-400"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-warm-700">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    className="rounded-xl border-sage-200 bg-white focus:border-sage-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-warm-700">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="rounded-xl border-sage-200 bg-white focus:border-sage-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="visitType" className="text-warm-700">Type of Visit *</Label>
                  <select
                    id="visitType"
                    name="visitType"
                    className="flex h-10 w-full rounded-xl border border-sage-200 bg-white px-3 py-2 text-sm focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-400/20"
                    required
                  >
                    <option value="">Select a visit type</option>
                    <option value="new-patient">New Patient Consultation</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredDate" className="text-warm-700">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    className="rounded-xl border-sage-200 bg-white focus:border-sage-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime" className="text-warm-700">Preferred Time</Label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    className="flex h-10 w-full rounded-xl border border-sage-200 bg-white px-3 py-2 text-sm focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-400/20"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (8am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-warm-700">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your health concerns or questions..."
                    rows={4}
                    className="rounded-xl border-sage-200 bg-white focus:border-sage-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-sage-500 to-sage-600 py-6 text-lg font-medium shadow-lg shadow-sage-200 transition-all hover:scale-[1.02]"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Request Appointment
                </Button>
                <p className="text-center text-xs text-warm-500">
                  We&apos;ll confirm your appointment within 1 business day. By
                  submitting, you agree to our{" "}
                  <Link href="/privacy-policy" className="text-sage-600 underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* Visit Types */}
              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-warm-800">Types of Visits</h2>
                <div className="space-y-4">
                  {visitTypes.map((type, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-gradient-to-br from-sage-50 to-cream-50 p-6 shadow-lg"
                    >
                      <h3 className="mb-1 font-semibold text-warm-800">{type.title}</h3>
                      <p className="mb-2 text-sm text-warm-600">{type.description}</p>
                      <div className="flex items-center gap-2 text-sm text-sage-600">
                        <Clock className="h-4 w-4" />
                        {type.duration}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div className="rounded-2xl bg-gradient-to-br from-sage-50 to-cream-50 p-6 shadow-lg">
                <h3 className="mb-4 font-heading text-xl font-bold text-warm-800">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    "Extended time to discuss your health",
                    "Learn about our DPC membership model",
                    "Ask questions in a relaxed setting",
                    "No pressure to commit",
                    "Leave with a clear understanding",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-sage-500" />
                      <span className="text-warm-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prefer to Call */}
              <div className="rounded-2xl bg-gradient-to-r from-sage-500 to-sage-600 p-6 text-white shadow-lg">
                <div className="flex items-start gap-4">
                  <Phone className="h-8 w-8 shrink-0" />
                  <div>
                    <h3 className="mb-2 font-semibold">Prefer to Call?</h3>
                    <p className="mb-4 text-sm text-sage-100">
                      Our team is happy to help you schedule over the phone.
                    </p>
                    <a href={`tel:${company.phone}`}>
                      <Button className="rounded-full bg-white px-6 text-sage-700 hover:bg-sage-50">
                        <Phone className="mr-2 h-4 w-4" />
                        {company.phoneFormatted}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-2xl bg-gradient-to-br from-sage-50 to-cream-50 p-6 shadow-lg">
                <h3 className="mb-4 flex items-center gap-2 font-heading text-xl font-bold text-warm-800">
                  <Clock className="h-5 w-5 text-sage-500" />
                  Office Hours
                </h3>
                <p className="text-warm-700">{company.hours.weekdays}</p>
                <p className="text-warm-700">{company.hours.saturday}</p>
                <p className="text-warm-500">{company.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-gradient-to-br from-cream-50 to-sage-50 py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-warm-800">
              Questions Before Booking?
            </h2>
            <p className="mb-8 text-warm-600">
              Check out our FAQs or contact us directly. We&apos;re here to help.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/faqs">
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-sage-300 px-8 py-6 text-sage-700 hover:bg-sage-50"
                >
                  View FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-sage-300 px-8 py-6 text-sage-700 hover:bg-sage-50"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
