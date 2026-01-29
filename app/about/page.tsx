import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Heart,
  Clock,
  MessageCircle,
  Award,
  CheckCircle,
  GraduationCap,
  Calendar,
  Users,
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
      <section className="relative overflow-hidden bg-gradient-to-br from-sage-50 via-cream-50 to-rose-50 py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-200/30 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-script text-2xl text-sage-600">About Us</p>
            <h1 className="mb-6 font-heading text-5xl font-bold text-warm-800 md:text-6xl">
              Healthcare Built on <span className="text-sage-600">Relationships</span>
            </h1>
            <p className="text-lg text-warm-600">
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
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/Averra-Dill.png"
                  alt="Dr. Dill - Averra Medical Group Provider"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="mb-3 font-script text-2xl text-sage-600">Our Mission</p>
              <h2 className="mb-6 font-heading text-4xl font-bold text-warm-800">
                Personalized Care for Every Patient
              </h2>
              <p className="mb-6 text-lg text-warm-600">{company.about.mission}</p>

              <div className="mb-8">
                <p className="mb-2 font-script text-xl text-rose-500">Our Vision</p>
                <p className="text-warm-600">{company.about.vision}</p>
              </div>

              <div className="rounded-2xl border-l-4 border-sage-400 bg-gradient-to-r from-sage-50 to-cream-50 p-6">
                <p className="italic text-warm-700">
                  &quot;{company.about.differentiator}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider */}
      <section className="bg-gradient-to-br from-cream-50 to-sage-50 py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="mb-3 font-script text-2xl text-sage-600">Meet Your Provider</p>
            <h2 className="font-heading text-4xl font-bold text-warm-800">
              Your Partner in Health
            </h2>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="grid md:grid-cols-3">
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src="/Dr. Dill.png"
                  alt="Dr. Dill"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:col-span-2">
                <h3 className="mb-2 font-heading text-2xl font-bold text-warm-800">
                  Dr. Dill
                </h3>
                <p className="mb-4 text-sage-600">Family Medicine & Obstetrics</p>
                <p className="mb-6 text-warm-600">
                  Dedicated to providing comprehensive family medicine and obstetric care
                  for patients of all ages. Committed to building lasting relationships
                  through personalized, patient-centered healthcare.
                </p>
                <div className="space-y-2">
                  {[
                    "Board Certified in Family Medicine",
                    "Obstetric Care Specialist",
                    "Direct Patient Care Advocate",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-sage-500" />
                      <span className="text-warm-700">{item}</span>
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
            <p className="mb-3 font-script text-2xl text-sage-600">Our Values</p>
            <h2 className="font-heading text-4xl font-bold text-warm-800">
              What We Stand For
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-gradient-to-br from-sage-50 to-cream-50 p-6 text-center shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sage-400 to-sage-500">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 font-semibold text-warm-800">{value.title}</h3>
                <p className="text-sm text-warm-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-sage-500 via-sage-600 to-sage-500 py-20 text-white">
        <div className="container text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold">
            Ready to Experience the Difference?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-sage-100">
            Schedule a consultation to learn more about our practice.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book">
              <Button
                size="lg"
                className="rounded-full bg-white px-10 py-6 text-lg font-medium text-sage-700 transition-all hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Consultation
              </Button>
            </Link>
            <Link href="/membership">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white bg-white/10 px-10 py-6 text-lg text-white hover:bg-white hover:text-sage-700"
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
