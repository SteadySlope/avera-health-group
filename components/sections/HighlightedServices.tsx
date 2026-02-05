import Link from "next/link"
import { Video, Home, Scale, Baby, ArrowRight } from "lucide-react"

const highlights = [
  {
    icon: Video,
    title: "Telehealth Visits",
    description:
      "Connect with your provider from the comfort of your home through secure virtual visits.",
    href: "/services/family-medicine",
  },
  {
    icon: Home,
    title: "Home Visits",
    description:
      "Twice yearly home visits for members in Newton & Rockdale Counties.",
    href: "/membership",
  },
  {
    icon: Scale,
    title: "Weight Loss & Lifestyle Management",
    description:
      "Personalized programs to help you reach and maintain your health goals.",
    href: "/services/family-medicine",
  },
  {
    icon: Baby,
    title: "Preconception Counseling",
    description:
      "Guidance and support to help you prepare for a healthy pregnancy.",
    href: "/services/womens-health",
  },
]

export function HighlightedServices() {
  return (
    <section className="bg-gradient-to-br from-cream-50 to-sage-50 py-20 lg:py-28">
      <div className="container">
        <div className="mb-16 text-center">
          <p className="mb-3 font-script text-2xl text-sage-600">
            Featured Services
          </p>
          <h2 className="font-heading text-4xl font-bold text-warm-800 md:text-5xl">
            More Ways We Care for You
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-sage-400 to-rose-400" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sage-400 to-sage-500 transition-transform group-hover:scale-110">
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-warm-800">
                {item.title}
              </h3>
              <p className="mb-4 text-sm text-warm-600">{item.description}</p>
              <span className="inline-flex items-center text-sm font-medium text-sage-600">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-warm-600">
          For a complete list of services, view our{" "}
          <Link
            href="/services/additional"
            className="font-medium text-sage-600 underline hover:text-sage-700"
          >
            additional services
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-medium text-sage-600 underline hover:text-sage-700"
          >
            contact our provider
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
