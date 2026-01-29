import { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${company.name}. Reach out for appointments or questions about our Direct Patient Care practice.`,
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sage-50 via-cream-50 to-rose-50 py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-200/30 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-script text-2xl text-sage-600">Get in Touch</p>
            <h1 className="mb-6 font-heading text-5xl font-bold text-warm-800 md:text-6xl">
              Contact <span className="text-sage-600">Us</span>
            </h1>
            <p className="text-lg text-warm-600">
              Have questions or ready to get started? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Info */}
            <div>
              <h2 className="mb-8 font-heading text-3xl font-bold text-warm-800">
                Contact Information
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: company.phoneFormatted,
                    href: `tel:${company.phone}`,
                    desc: "Call us during business hours",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: company.email,
                    href: `mailto:${company.email}`,
                    desc: "We'll respond within 1 business day",
                  },
                  {
                    icon: MapPin,
                    label: "Service Area",
                    value: company.serviceAreasText,
                    desc: "Address coming soon",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl bg-gradient-to-br from-sage-50 to-cream-50 p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sage-400 to-sage-500">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-warm-800">{item.label}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sage-600 hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-warm-700">{item.value}</p>
                      )}
                      <p className="mt-1 text-sm text-warm-500">{item.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Hours */}
                <div className="flex items-start gap-4 rounded-2xl bg-gradient-to-br from-sage-50 to-cream-50 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sage-400 to-sage-500">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-800">Hours</h3>
                    <p className="text-warm-700">{company.hours.weekdays}</p>
                    <p className="text-warm-700">{company.hours.saturday}</p>
                    <p className="text-warm-500">{company.hours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Quick Action */}
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-sage-500 to-sage-600 p-6 text-white">
                <Calendar className="mb-3 h-8 w-8" />
                <h3 className="mb-2 font-semibold">Ready to Get Started?</h3>
                <p className="mb-4 text-sm text-sage-100">
                  Skip the form and book your consultation directly.
                </p>
                <Link href="/book">
                  <Button className="rounded-full bg-white text-sage-700 hover:bg-sage-50">
                    Book Online
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl bg-gradient-to-br from-sage-50 to-cream-50 p-8 shadow-xl lg:p-10">
              <h2 className="mb-6 font-heading text-2xl font-bold text-warm-800">
                Send Us a Message
              </h2>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-warm-700">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Jane"
                      className="rounded-xl border-sage-200 bg-white focus:border-sage-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-warm-700">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="rounded-xl border-sage-200 bg-white focus:border-sage-400"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-warm-700">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    className="rounded-xl border-sage-200 bg-white focus:border-sage-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-warm-700">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="rounded-xl border-sage-200 bg-white focus:border-sage-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-warm-700">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                    className="rounded-xl border-sage-200 bg-white focus:border-sage-400"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-sage-500 to-sage-600 py-6 text-lg font-medium shadow-lg shadow-sage-200 transition-all hover:scale-[1.02]"
                >
                  Send Message
                </Button>
                <p className="text-center text-xs text-warm-500">
                  By submitting, you agree to our{" "}
                  <Link href="/privacy-policy" className="text-sage-600 underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gradient-to-br from-cream-50 to-sage-50 py-20">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-warm-800">Our Location</h2>
            <p className="mt-2 text-warm-600">
              Proudly serving {company.serviceAreasText}
            </p>
          </div>
          <div className="aspect-video overflow-hidden rounded-3xl bg-gradient-to-br from-sage-100 to-cream-100 shadow-xl">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                  <MapPin className="h-8 w-8 text-sage-600" />
                </div>
                <p className="font-medium text-sage-700">Map Coming Soon</p>
                <p className="text-sm text-sage-600">Address to be confirmed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
