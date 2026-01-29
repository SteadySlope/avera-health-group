import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Heart,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  Flower2,
  Shield,
  Sparkles,
  Baby,
  Activity,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Women's Health",
  description: `Women's health services at ${company.name}. Comprehensive gynecologic care, preventive screenings, and wellness support for women at every stage of life.`,
}

const services = [
  {
    icon: Flower2,
    title: "Well-Woman Exams",
    description:
      "Annual comprehensive exams including pelvic exams, breast exams, and preventive screenings.",
  },
  {
    icon: Shield,
    title: "Preventive Screenings",
    description:
      "Pap smears, mammogram coordination, STI testing, and other essential health screenings.",
  },
  {
    icon: Heart,
    title: "Contraception Counseling",
    description:
      "Personalized guidance on birth control options to fit your lifestyle and health needs.",
  },
  {
    icon: Sparkles,
    title: "Menopause Management",
    description:
      "Support and treatment options for managing menopause symptoms and maintaining wellness.",
  },
  {
    icon: Activity,
    title: "Hormonal Health",
    description:
      "Evaluation and treatment of hormonal imbalances, PCOS, and thyroid conditions.",
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description:
      "Screening and support for anxiety, depression, and perinatal mood disorders.",
  },
]

export default function WomensHealthPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sage-50 via-cream-50 to-rose-50 py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <Link
                href="/services"
                className="mb-4 inline-flex w-fit items-center text-sm text-sage-600 hover:text-sage-700"
              >
                <ArrowRight className="mr-1 h-4 w-4 rotate-180" />
                Back to Services
              </Link>
              <p className="mb-4 font-script text-2xl text-rose-500">Women&apos;s Health</p>
              <h1 className="mb-6 font-heading text-5xl font-bold text-warm-800 md:text-6xl">
                Care Designed <span className="text-sage-600">for You</span>
              </h1>
              <p className="mb-8 text-lg text-warm-600">
                Compassionate, comprehensive care for women at every stage of
                life. From routine wellness to specialized gynecologic
                services, we&apos;re here for you.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/book">
                  <Button className="rounded-full bg-gradient-to-r from-sage-500 to-sage-600 px-8 py-6 text-lg font-medium shadow-lg shadow-sage-200 transition-all hover:scale-105">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book an Appointment
                  </Button>
                </Link>
                <a href={`tel:${company.phone}`}>
                  <Button
                    variant="outline"
                    className="rounded-full border-2 border-sage-300 px-8 py-6 text-lg text-sage-700 hover:bg-sage-50"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {company.phoneFormatted}
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/averra-medical.png"
                  alt="Women's Health at Averra Medical Group"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="mb-3 font-script text-2xl text-sage-600">What We Offer</p>
            <h2 className="font-heading text-4xl font-bold text-warm-800">
              Women&apos;s Health Services
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-gradient-to-br from-sage-50 to-cream-50 p-6 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sage-400 to-sage-500">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 font-semibold text-warm-800">{service.title}</h3>
                <p className="text-sm text-warm-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life Stages */}
      <section className="bg-gradient-to-br from-cream-50 to-sage-50 py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="mb-3 font-script text-2xl text-sage-600">Every Stage of Life</p>
            <h2 className="font-heading text-4xl font-bold text-warm-800">
              Care That Grows With You
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sage-100 to-cream-100">
                <Sparkles className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-warm-800">Young Women</h3>
              <p className="text-warm-600">
                Reproductive health education, contraception counseling, and
                establishing healthy habits for life.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-cream-100">
                <Baby className="h-10 w-10 text-rose-500" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-warm-800">Reproductive Years</h3>
              <p className="text-warm-600">
                Fertility support, preconception counseling, and comprehensive
                gynecologic care.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sage-100 to-cream-100">
                <Flower2 className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-warm-800">Menopause & Beyond</h3>
              <p className="text-warm-600">
                Menopause management, bone health, and continued wellness
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-rose-100 px-5 py-2 text-sm text-rose-700">
              <Baby className="h-4 w-4" />
              Coming Soon
            </div>
            <h2 className="mb-6 font-heading text-4xl font-bold text-warm-800">
              Obstetrical Care
            </h2>
            <p className="mb-8 text-warm-600">
              As we grow, we plan to expand into obstetrical care to support
              women through pregnancy and every stage of life. Stay tuned for
              updates on our prenatal and maternity services.
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="rounded-full border-2 border-sage-300 px-8 py-6 text-sage-700 hover:bg-sage-50"
              >
                Contact Us to Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-gradient-to-r from-sage-500 via-sage-600 to-sage-500 py-20 text-white lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-script text-2xl text-sage-100">Your Visit</p>
              <h2 className="mb-6 font-heading text-4xl font-bold">What to Expect</h2>
              <p className="text-sage-100">
                We believe every woman deserves to feel heard, respected, and
                empowered in her healthcare decisions. Here&apos;s what makes our
                approach different:
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Extended appointment times (30-60 minutes)",
                "Private, comfortable environment",
                "Thorough explanations of findings and options",
                "Shared decision-making about your care",
                "Easy follow-up communication",
                "Focus on prevention and education",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-4xl font-bold text-warm-800">
              Your Health, Your Way
            </h2>
            <p className="mb-10 text-warm-600">
              Ready to experience women&apos;s healthcare that puts you first?
              Schedule a consultation today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/book">
                <Button className="rounded-full bg-gradient-to-r from-sage-500 to-sage-600 px-10 py-6 text-lg font-medium shadow-lg shadow-sage-200 transition-all hover:scale-105">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/membership">
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-sage-300 px-10 py-6 text-lg text-sage-700 hover:bg-sage-50"
                >
                  Learn About Membership
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
