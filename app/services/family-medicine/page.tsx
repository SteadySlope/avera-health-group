import { Metadata } from "next"
import Link from "next/link"
import {
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  Stethoscope,
  Activity,
  Shield,
  Syringe,
  Heart,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Family Medicine",
  description: `Comprehensive family medicine services at ${company.name}. Preventive care, chronic disease management, and personalized treatment for patients of all ages.`,
}

const services = [
  {
    icon: Stethoscope,
    title: "Annual Wellness Exams",
    description:
      "Comprehensive yearly check-ups to monitor your health and catch potential issues early.",
  },
  {
    icon: Activity,
    title: "Chronic Disease Management",
    description:
      "Ongoing care and support for conditions like diabetes, hypertension, and high cholesterol.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description:
      "Screenings, health risk assessments, and personalized prevention strategies.",
  },
  {
    icon: Syringe,
    title: "Immunizations",
    description:
      "Vaccines for all ages including flu shots, travel vaccines, and routine immunizations.",
  },
  {
    icon: Heart,
    title: "Acute Illness Treatment",
    description:
      "Same-day or next-day appointments for illnesses like colds, flu, infections, and injuries.",
  },
  {
    icon: Brain,
    title: "Mental Health Support",
    description:
      "Screening and treatment for anxiety, depression, and other mental health concerns.",
  },
]

export default function FamilyMedicinePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 py-20 lg:py-28">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <Link
                href="/services"
                className="mb-4 inline-flex w-fit items-center text-sm text-pink-600 hover:text-pink-700"
              >
                <ArrowRight className="mr-1 h-4 w-4 rotate-180" />
                Back to Services
              </Link>
              <p className="mb-4 font-script text-2xl text-pink-500">Family Medicine</p>
              <h1 className="mb-6 font-heading text-5xl font-bold text-gray-800 md:text-6xl">
                Care for <span className="text-pink-600">Every Generation</span>
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                Comprehensive care for patients of all ages—from newborns to
                seniors. We&apos;re here to support your family&apos;s health at every
                stage of life.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/book">
                  <Button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-6 text-lg font-medium shadow-lg shadow-pink-200 transition-all hover:scale-105">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book an Appointment
                  </Button>
                </Link>
                <a href={`tel:${company.phone}`}>
                  <Button
                    variant="outline"
                    className="rounded-full border-2 border-pink-300 px-8 py-6 text-lg text-pink-600 hover:bg-pink-50"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {company.phoneFormatted}
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100 to-rose-100 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="h-32 w-32 text-pink-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="mb-3 font-script text-2xl text-pink-500">What We Offer</p>
            <h2 className="font-heading text-4xl font-bold text-gray-800">
              Family Medicine Services
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-6 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-800">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-script text-2xl text-pink-500">Care for Everyone</p>
              <h2 className="mb-6 font-heading text-4xl font-bold text-gray-800">
                We Treat Patients of All Ages
              </h2>
              <p className="mb-6 text-gray-600">
                From your child&apos;s first check-up to managing health concerns as
                you age, we&apos;re here to provide continuous, comprehensive care
                for your entire family.
              </p>
              <ul className="space-y-3">
                {[
                  "Infants and children",
                  "Adolescents and teens",
                  "Adults",
                  "Seniors and geriatric care",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Ages", value: "All Ages" },
                { label: "Appointments", value: "30-60 min" },
                { label: "Same-Day", value: "Available" },
                { label: "Direct Access", value: "Yes" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 text-center shadow-lg"
                >
                  <p className="text-3xl font-bold text-pink-600">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <p className="mb-3 font-script text-2xl text-pink-500">Common Conditions</p>
              <h2 className="font-heading text-4xl font-bold text-gray-800">
                Conditions We Treat
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Diabetes & Pre-diabetes",
                "High Blood Pressure",
                "High Cholesterol",
                "Thyroid Disorders",
                "Asthma & Allergies",
                "Arthritis",
                "Anxiety & Depression",
                "Skin Conditions",
                "Digestive Issues",
                "Sleep Disorders",
                "Infections",
                "Injuries & Sprains",
              ].map((condition, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 p-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-pink-500" />
                  <span className="text-gray-700">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 py-20 text-white">
        <div className="container text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold">
            Your Family&apos;s Health, Our Priority
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-pink-100">
            Experience healthcare that puts your family first. Schedule a
            consultation to learn how we can support your health journey.
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
