import { Metadata } from "next"
import Link from "next/link"
import {
  Heart,
  Clock,
  MessageCircle,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name} and our commitment to personalized, patient-centered healthcare through our Direct Patient Care model.`,
}

const values = [
  {
    icon: Heart,
    title: "Patient-Centered",
    description: "Every decision starts with what's best for you.",
  },
  {
    icon: Clock,
    title: "Unhurried Care",
    description: "30-60 minute appointments, never rushed.",
  },
  {
    icon: MessageCircle,
    title: "Always Accessible",
    description: "Direct access via text, call, or email.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Evidence-based, personalized medicine.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-script text-2xl text-pink-500">About Us</p>
            <h1 className="mb-6 font-heading text-5xl font-bold text-gray-800 md:text-6xl">
              Healthcare Built on <span className="text-pink-600">Relationships</span>
            </h1>
            <p className="text-lg text-gray-600">
              We believe healthcare should be personal, accessible, and focused on
              building lasting relationships between patients and providers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100 to-rose-100 shadow-xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 rounded-full bg-white/80 p-8 shadow-lg">
                    <Sparkles className="h-20 w-20 text-pink-400" />
                  </div>
                  <p className="text-lg font-medium text-pink-700">Provider Photo</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="mb-3 font-script text-2xl text-pink-500">Our Mission</p>
              <h2 className="mb-6 font-heading text-4xl font-bold text-gray-800">
                Personalized Care for Every Patient
              </h2>
              <p className="mb-6 text-lg text-gray-600">{company.about.mission}</p>

              <div className="mb-8">
                <p className="mb-2 font-script text-xl text-pink-500">Our Vision</p>
                <p className="text-gray-600">{company.about.vision}</p>
              </div>

              <div className="rounded-2xl border-l-4 border-pink-400 bg-gradient-to-r from-pink-50 to-rose-50 p-6">
                <p className="italic text-gray-700">
                  &quot;{company.about.differentiator}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="mb-3 font-script text-2xl text-pink-500">Meet Your Provider</p>
            <h2 className="font-heading text-4xl font-bold text-gray-800">
              Your Partner in Health
            </h2>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="grid md:grid-cols-3">
              <div className="relative aspect-square bg-gradient-to-br from-pink-100 to-rose-100 md:aspect-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 rounded-full bg-white/80 p-6 shadow-lg">
                      <GraduationCap className="h-12 w-12 text-pink-400" />
                    </div>
                    <p className="text-sm text-pink-600">Photo Coming Soon</p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:col-span-2">
                <h3 className="mb-2 font-heading text-2xl font-bold text-gray-800">
                  Provider Name, MD
                </h3>
                <p className="mb-4 text-pink-600">Family Medicine & Women&apos;s Health</p>
                <p className="mb-6 text-gray-600">
                  Provider bio placeholder - Information about education, training,
                  certifications, and areas of special interest will be added here.
                </p>
                <div className="space-y-2">
                  {[
                    "Board Certified in Family Medicine",
                    "Women's Health Specialist",
                    "Direct Patient Care Advocate",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-pink-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="mb-3 font-script text-2xl text-pink-500">Our Values</p>
            <h2 className="font-heading text-4xl font-bold text-gray-800">
              What We Stand For
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-6 text-center shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-800">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 py-20 text-white">
        <div className="container text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold">
            Ready to Experience the Difference?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-pink-100">
            Schedule a consultation to learn more about our practice.
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
            <Link href="/membership">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white bg-white/10 px-10 py-6 text-lg text-white hover:bg-white hover:text-pink-600"
              >
                Learn About Membership
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
