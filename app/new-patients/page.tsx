import { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  FileText,
  Clock,
  MessageCircle,
  Clipboard,
  Heart,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "New Patients",
  description: `New patient information for ${company.name}. Learn what to expect at your first visit and how to prepare for your appointment.`,
}

const steps = [
  {
    number: "1",
    title: "Schedule a Consultation",
    description:
      "Book your initial consultation online or by phone. This visit allows us to get to know you and discuss your health needs.",
    icon: Calendar,
  },
  {
    number: "2",
    title: "Complete Paperwork",
    description:
      "Fill out your new patient forms before your visit. We'll send these to you after scheduling.",
    icon: FileText,
  },
  {
    number: "3",
    title: "Your First Visit",
    description:
      "Meet with your provider for an extended initial consultation to discuss your health history and goals.",
    icon: Heart,
  },
  {
    number: "4",
    title: "Become a Member",
    description:
      "If we're a good fit, choose a membership plan and start enjoying personalized healthcare.",
    icon: Users,
  },
]

const bringItems = [
  "Photo ID",
  "Insurance card (if applicable)",
  "List of current medications",
  "List of allergies",
  "Previous medical records (if available)",
  "List of questions or concerns",
]

export default function NewPatientsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 py-20 lg:py-28">
        <div className="absolute left-0 bottom-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-script text-2xl text-pink-500">Welcome</p>
            <h1 className="mb-6 font-heading text-5xl font-bold text-gray-800 md:text-6xl">
              New Patient <span className="text-pink-600">Information</span>
            </h1>
            <p className="text-lg text-gray-600">
              We&apos;re excited to welcome you to our practice. Here&apos;s everything
              you need to know about becoming a patient.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="mb-3 font-script text-2xl text-pink-500">Getting Started</p>
            <h2 className="font-heading text-4xl font-bold text-gray-800">
              How to Become a Patient
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-6 shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-2 font-semibold text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/book">
              <Button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-6 text-lg font-medium shadow-lg shadow-pink-200 transition-all hover:scale-105">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Your Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-script text-2xl text-pink-500">Your First Visit</p>
              <h2 className="mb-6 font-heading text-4xl font-bold text-gray-800">
                What to Expect
              </h2>
              <p className="mb-8 text-gray-600">
                Your initial consultation is an extended visit (usually 45-60
                minutes) designed to help us understand your complete health
                picture and establish a relationship built on trust.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Clock,
                    title: "Extended Time",
                    description:
                      "No rushing—we take time to listen and understand your needs.",
                  },
                  {
                    icon: Clipboard,
                    title: "Comprehensive Review",
                    description:
                      "We'll review your health history, current concerns, and goals.",
                  },
                  {
                    icon: MessageCircle,
                    title: "Open Discussion",
                    description:
                      "Ask questions, share concerns, and learn about our approach.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-rose-400">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-8 shadow-xl">
                <h3 className="mb-4 font-heading text-xl font-bold text-gray-800">
                  What to Bring
                </h3>
                <ul className="space-y-3">
                  {bringItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-pink-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-rose-500 p-8 text-white shadow-xl">
                <h3 className="mb-2 font-semibold">Forms & Paperwork</h3>
                <p className="mb-4 text-sm text-pink-100">
                  After scheduling, we&apos;ll send you new patient forms to
                  complete before your visit. This helps us make the most of
                  our time together.
                </p>
                <p className="text-sm">
                  Questions? Call us at{" "}
                  <a
                    href={`tel:${company.phone}`}
                    className="font-semibold underline"
                  >
                    {company.phoneFormatted}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <p className="mb-3 font-script text-2xl text-pink-500">Questions?</p>
              <h2 className="font-heading text-4xl font-bold text-gray-800">
                Common New Patient Questions
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Is there a fee for the initial consultation?",
                  a: "Contact us to learn about our initial consultation fees and how they apply to membership.",
                },
                {
                  q: "Do you accept my insurance?",
                  a: "As a Direct Patient Care practice, we don't bill insurance for primary care services. Your monthly membership covers all primary care visits.",
                },
                {
                  q: "Are you accepting new patients?",
                  a: "Yes! We limit our patient panel to ensure quality care, so we encourage you to schedule your consultation soon.",
                },
                {
                  q: "What ages do you see?",
                  a: "We provide family medicine for patients of all ages, from newborns to seniors.",
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
      <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 py-20 text-white">
        <div className="container text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-pink-100">
            Schedule your consultation today and take the first step toward
            healthcare that&apos;s designed around you.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book">
              <Button
                size="lg"
                className="rounded-full bg-white px-10 py-6 text-lg font-medium text-pink-600 transition-all hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Consultation
              </Button>
            </Link>
            <a href={`tel:${company.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white bg-white/10 px-10 py-6 text-lg text-white hover:bg-white hover:text-pink-600"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {company.phoneFormatted}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
