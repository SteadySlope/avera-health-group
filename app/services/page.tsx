import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Heart, Users, CheckCircle, ArrowRight, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Our Services",
  description: `Comprehensive family medicine and women's health services at ${company.name}. Preventive care, chronic disease management, and personalized treatment.`,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sage-50 via-cream-50 to-rose-50 py-20 lg:py-28">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-200/30 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-script text-2xl text-sage-600">Our Services</p>
            <h1 className="mb-6 font-heading text-5xl font-bold text-warm-800 md:text-6xl">
              Comprehensive Care for <span className="text-sage-600">Every Stage</span>
            </h1>
            <p className="text-lg text-warm-600">
              From preventive care to chronic disease management, we provide personalized
              healthcare services designed around your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2">
            {company.services.map((service) => (
              <div
                key={service.id}
                className="group overflow-hidden rounded-3xl bg-gradient-to-br from-sage-50 to-cream-50 shadow-xl transition-all hover:shadow-2xl"
              >
                {/* Image placeholder */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.id === "family-medicine" ? "/Family-Medical.png" : "/averra-medical.png"}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sage-400 to-sage-500 shadow-lg">
                    {service.icon === "Users" ? (
                      <Users className="h-7 w-7 text-white" />
                    ) : (
                      <Heart className="h-7 w-7 text-white" />
                    )}
                  </div>

                  <h2 className="mb-3 font-heading text-2xl font-bold text-warm-800">
                    {service.name}
                  </h2>
                  <p className="mb-6 text-warm-600">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold text-warm-800">Services Include:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-warm-600">
                          <CheckCircle className="h-4 w-4 shrink-0 text-sage-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/services/${service.id}`}>
                    <Button className="w-full rounded-full bg-gradient-to-r from-sage-500 to-sage-600 py-6 font-medium shadow-lg shadow-sage-200 transition-all hover:scale-[1.02] hover:shadow-xl">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DPC Benefits */}
      <section className="bg-gradient-to-br from-cream-50 to-sage-50 py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="mb-3 font-script text-2xl text-sage-600">The DPC Advantage</p>
            <h2 className="font-heading text-4xl font-bold text-warm-800">
              A Better Way to Receive Care
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.membership.benefits.map((benefit, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-lg">
                <CheckCircle className="mb-4 h-8 w-8 text-sage-500" />
                <h3 className="mb-2 font-semibold text-warm-800">{benefit.title}</h3>
                <p className="text-sm text-warm-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/membership">
              <Button className="rounded-full bg-gradient-to-r from-sage-500 to-sage-600 px-10 py-6 text-lg font-medium shadow-xl shadow-sage-200 transition-all hover:scale-105">
                Learn About Membership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-sage-500 via-sage-600 to-sage-500 py-20 text-white">
        <div className="container text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-sage-100">
            Schedule a consultation to discuss your health needs.
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
