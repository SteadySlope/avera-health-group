import { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  Stethoscope,
  Users,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Additional Services",
  description: `In-office procedures and specialized services at ${company.name}. Family medicine procedures, male-specific services, and women-specific services.`,
}

export default function AdditionalServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sage-50 via-cream-50 to-rose-50 py-20 lg:py-28">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-200/30 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href="/services"
              className="mb-4 inline-flex items-center text-sm text-sage-600 hover:text-sage-700"
            >
              <ArrowRight className="mr-1 h-4 w-4 rotate-180" />
              Back to Services
            </Link>
            <p className="mb-4 font-script text-2xl text-sage-600">
              Additional Services
            </p>
            <h1 className="mb-6 font-heading text-5xl font-bold text-warm-800 md:text-6xl">
              In-Office Procedures &{" "}
              <span className="text-sage-600">Specialized Services</span>
            </h1>
            <p className="text-lg text-warm-600">
              Beyond routine primary care, we offer a wide range of in-office
              procedures and specialized services to meet your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Family Medicine Procedures */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sage-400 to-sage-500">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <p className="mb-3 font-script text-2xl text-sage-600">
              Family Medicine
            </p>
            <h2 className="font-heading text-4xl font-bold text-warm-800">
              In-Office Procedures
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {company.additionalServices.familyMedicine.map((procedure) => (
                <div
                  key={procedure}
                  className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-sage-50 to-cream-50 p-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-sage-500" />
                  <span className="text-warm-700">{procedure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Male & Women Specific Services */}
      <section className="bg-gradient-to-br from-cream-50 to-sage-50 py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Male-Specific */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sage-400 to-sage-500">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-script text-lg text-sage-600">
                    Male-Specific
                  </p>
                  <h2 className="font-heading text-2xl font-bold text-warm-800">
                    Men&apos;s Health Services
                  </h2>
                </div>
              </div>
              <div className="space-y-3">
                {company.additionalServices.maleSpecific.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-lg"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-sage-500" />
                    <span className="text-warm-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Women-Specific */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sage-400 to-sage-500">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-script text-lg text-sage-600">
                    Women-Specific
                  </p>
                  <h2 className="font-heading text-2xl font-bold text-warm-800">
                    Women&apos;s Health Services
                  </h2>
                </div>
              </div>
              <div className="space-y-3">
                {company.additionalServices.womenSpecific.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-lg"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-sage-500" />
                    <span className="text-warm-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Callout */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-sage-50 to-cream-50 p-8 text-center shadow-xl md:p-12">
            <h2 className="mb-4 font-heading text-2xl font-bold text-warm-800">
              Looking for a Specific Service?
            </h2>
            <p className="mb-8 text-warm-600">
              For a complete list of services or to discuss your specific needs,
              contact our provider. We&apos;re here to help you find the right
              care.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-sage-300 px-8 py-6 text-sage-700 hover:bg-sage-50"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href={`tel:${company.phone}`}>
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-sage-300 px-8 py-6 text-sage-700 hover:bg-sage-50"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {company.phoneFormatted}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-sage-500 via-sage-600 to-sage-500 py-20 text-white">
        <div className="container text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-sage-100">
            Schedule a consultation to discuss your health needs and learn about
            the services we offer.
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
            <a href={`tel:${company.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white bg-white/10 px-10 py-6 text-lg text-white hover:bg-white hover:text-sage-700"
              >
                <Phone className="mr-2 h-5 w-5" />
                {company.phoneFormatted}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
