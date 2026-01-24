import { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  Calendar,
  Phone,
  Clock,
  MessageCircle,
  DollarSign,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Membership",
  description: `Learn about our Direct Patient Care membership model at ${company.name}. Transparent pricing, longer appointments, and personalized healthcare.`,
}

const comparisonItems = [
  {
    feature: "Appointment Length",
    traditional: "10-15 minutes",
    dpc: "30-60 minutes",
  },
  {
    feature: "Same-Day Appointments",
    traditional: "Rarely available",
    dpc: "Often available",
  },
  {
    feature: "Direct Provider Access",
    traditional: "Through staff only",
    dpc: "Text, call, or email",
  },
  {
    feature: "Copays",
    traditional: "Every visit",
    dpc: "None",
  },
  {
    feature: "Surprise Bills",
    traditional: "Common",
    dpc: "Never",
  },
  {
    feature: "Time with Provider",
    traditional: "Rushed",
    dpc: "Unhurried",
  },
]

export default function MembershipPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 py-20 lg:py-28">
        <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-script text-2xl text-pink-500">Direct Patient Care</p>
            <h1 className="mb-6 font-heading text-5xl font-bold text-gray-800 md:text-6xl">
              Healthcare Designed Around{" "}
              <span className="text-pink-600">You</span>
            </h1>
            <p className="text-lg text-gray-600">
              {company.membership.description}
            </p>
          </div>
        </div>
      </section>

      {/* What is DPC */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 font-script text-2xl text-pink-500">What is DPC?</p>
              <h2 className="mb-6 font-heading text-4xl font-bold text-gray-800">
                A Better Way to Healthcare
              </h2>
              <p className="mb-6 text-gray-600">
                Direct Patient Care (DPC) is a healthcare model that removes
                insurance from the doctor-patient relationship for primary care
                services. Instead of billing insurance for each visit, you pay a
                simple monthly membership fee that covers all your primary care
                needs.
              </p>
              <p className="mb-6 text-gray-600">
                This allows us to spend more time with you, offer same-day
                appointments, and focus on prevention rather than just treating
                illness.
              </p>
              <div className="rounded-2xl border-l-4 border-pink-400 bg-gradient-to-r from-pink-50 to-rose-50 p-6">
                <p className="font-semibold text-gray-800">Think of it like Netflix for healthcare:</p>
                <p className="mt-2 text-gray-600">
                  One monthly fee gives you unlimited access to your primary care
                  provider, without copays or surprise bills.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Clock,
                  title: "More Time",
                  description: "30-60 minute appointments",
                },
                {
                  icon: MessageCircle,
                  title: "Direct Access",
                  description: "Text, call, or email your provider",
                },
                {
                  icon: DollarSign,
                  title: "Transparent Pricing",
                  description: "Know exactly what you pay",
                },
                {
                  icon: Heart,
                  title: "Personal Care",
                  description: "Care tailored to you",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-6 shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-rose-400">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-1 font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="mb-3 font-script text-2xl text-pink-500">Membership Benefits</p>
            <h2 className="font-heading text-4xl font-bold text-gray-800">
              What&apos;s Included
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.membership.benefits.map((benefit, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-lg">
                <CheckCircle className="mb-4 h-8 w-8 text-pink-500" />
                <h3 className="mb-2 font-semibold text-gray-800">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="mb-3 font-script text-2xl text-pink-500">See the Difference</p>
            <h2 className="font-heading text-4xl font-bold text-gray-800">
              DPC vs. Traditional Healthcare
            </h2>
          </div>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border-2 border-pink-100 shadow-xl">
            <div className="grid grid-cols-3 bg-gradient-to-r from-pink-100 to-rose-100 p-4 text-sm font-semibold">
              <div></div>
              <div className="text-center text-gray-600">Traditional</div>
              <div className="text-center text-pink-600">DPC Membership</div>
            </div>
            {comparisonItems.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 border-t border-pink-100 p-4 text-sm"
              >
                <div className="font-medium text-gray-800">{item.feature}</div>
                <div className="flex items-center justify-center gap-2 text-center text-gray-500">
                  <XCircle className="h-4 w-4 text-gray-400" />
                  {item.traditional}
                </div>
                <div className="flex items-center justify-center gap-2 text-center text-gray-800">
                  <CheckCircle className="h-4 w-4 text-pink-500" />
                  {item.dpc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 py-20 text-white lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-script text-2xl text-pink-100">Simple, Transparent Pricing</p>
            <h2 className="mb-6 font-heading text-4xl font-bold">Membership Plans</h2>
            <p className="mb-10 text-pink-100">
              Contact us for detailed pricing information. We offer affordable
              monthly membership options designed to fit your budget.
            </p>
            <div className="mx-auto max-w-md rounded-3xl bg-white p-8 text-gray-800 shadow-2xl">
              <h3 className="mb-4 font-heading text-2xl font-bold">Monthly Membership</h3>
              <div className="mb-6 text-center">
                <p className="text-4xl font-bold text-pink-600">Contact Us</p>
                <p className="text-sm text-gray-500">for pricing details</p>
              </div>
              <ul className="mb-8 space-y-3">
                {[
                  "Unlimited office visits",
                  "Same-day appointments",
                  "Direct provider access",
                  "No copays",
                  "Transparent pricing",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-pink-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/book">
                <Button className="w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 py-6 text-lg font-medium shadow-lg shadow-pink-200">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <p className="mb-3 font-script text-2xl text-pink-500">Common Questions</p>
              <h2 className="font-heading text-4xl font-bold text-gray-800">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Do I still need insurance?",
                  a: "DPC covers your primary care needs, but you may still want insurance for hospitalizations, specialists, and emergencies. Many members pair DPC with a high-deductible health plan.",
                },
                {
                  q: "What if I need a specialist?",
                  a: "We'll help coordinate referrals to specialists and can often negotiate better rates for common tests and procedures.",
                },
                {
                  q: "Can I cancel my membership?",
                  a: "Yes, memberships are month-to-month with no long-term contracts required.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-6 shadow-lg"
                >
                  <h3 className="mb-2 font-semibold text-gray-800">{item.q}</h3>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/faqs">
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-pink-300 px-8 py-6 text-pink-600 hover:bg-pink-50"
                >
                  View All FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-4xl font-bold text-gray-800">
              Ready to Experience Healthcare Differently?
            </h2>
            <p className="mb-10 text-gray-600">
              Schedule a free consultation to learn more about our membership
              and see if DPC is right for you.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/book">
                <Button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-6 text-lg font-medium shadow-lg shadow-pink-200 transition-all hover:scale-105">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Button>
              </Link>
              <a href={`tel:${company.phone}`}>
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-pink-300 px-10 py-6 text-lg text-pink-600 hover:bg-pink-50"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call {company.phoneFormatted}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
