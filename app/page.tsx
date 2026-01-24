import Link from "next/link"
import {
  Phone,
  Calendar,
  Heart,
  Users,
  Clock,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/company"

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full width image with overlay */}
      <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-rose-200/30 blur-3xl" />

        <div className="container relative z-10 flex min-h-[90vh] items-center py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <p className="mb-4 font-script text-2xl text-pink-500">
                Welcome to
              </p>
              <h1 className="mb-6 font-heading text-5xl font-bold leading-tight text-gray-800 md:text-6xl lg:text-7xl">
                <span className="text-pink-600">Avera</span> Health
                <br />
                Group
              </h1>
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
                Experience healthcare the way it should be—personalized,
                unhurried, and focused entirely on you. Our spa-like environment
                and Direct Patient Care model puts your wellness first.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/book">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-6 text-lg font-medium shadow-xl shadow-pink-200 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pink-300 sm:w-auto"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Visit
                  </Button>
                </Link>
                <a href={`tel:${company.phone}`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-full border-2 border-pink-300 px-8 py-6 text-lg font-medium text-pink-600 transition-all hover:bg-pink-50 sm:w-auto"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {company.phoneFormatted}
                  </Button>
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100">
                    <Sparkles className="h-4 w-4 text-pink-500" />
                  </div>
                  Spa-Like Experience
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100">
                    <Heart className="h-4 w-4 text-pink-500" />
                  </div>
                  Patient-Centered Care
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-200 to-rose-200 shadow-2xl">
                {/* Placeholder for provider/office image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 rounded-full bg-white/80 p-8 shadow-lg">
                    <Heart className="h-20 w-20 text-pink-400" />
                  </div>
                  <p className="text-lg font-medium text-pink-700">
                    Provider Photo
                  </p>
                  <p className="text-sm text-pink-600">Coming Soon</p>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-400">
                    <Star className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-pink-600">DPC</p>
                    <p className="text-sm text-gray-500">Direct Patient Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <p className="mb-3 font-script text-2xl text-pink-500">
              Our Services
            </p>
            <h2 className="font-heading text-4xl font-bold text-gray-800 md:text-5xl">
              Comprehensive Care for You
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-pink-400 to-rose-400" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {company.services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-50 to-rose-50 p-8 shadow-lg transition-all hover:shadow-xl"
              >
                {/* Decorative circle */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-100/50" />

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 shadow-lg">
                    {service.icon === "Users" ? (
                      <Users className="h-8 w-8 text-white" />
                    ) : (
                      <Heart className="h-8 w-8 text-white" />
                    )}
                  </div>

                  <h3 className="mb-3 font-heading text-2xl font-bold text-gray-800">
                    {service.name}
                  </h3>
                  <p className="mb-6 text-gray-600">{service.description}</p>

                  <ul className="mb-6 grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 shrink-0 text-pink-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/${service.id}`}>
                    <Button
                      variant="outline"
                      className="group/btn rounded-full border-2 border-pink-300 text-pink-600 transition-all hover:bg-pink-500 hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DPC Section */}
      <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 py-20 text-white lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <p className="mb-3 font-script text-2xl text-pink-200">
              Direct Patient Care
            </p>
            <h2 className="font-heading text-4xl font-bold md:text-5xl">
              Healthcare Designed Around You
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-pink-100">
              {company.membership.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.membership.benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <CheckCircle className="mb-4 h-8 w-8" />
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-pink-100">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/membership">
              <Button
                size="lg"
                className="rounded-full bg-white px-10 py-6 text-lg font-medium text-pink-600 shadow-xl transition-all hover:scale-105 hover:bg-pink-50"
              >
                Explore Membership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image Placeholder */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100 to-rose-100 shadow-xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 rounded-full bg-white/80 p-6 shadow-lg">
                    <Sparkles className="h-16 w-16 text-pink-400" />
                  </div>
                  <p className="text-lg font-medium text-pink-700">
                    Office / Provider Photo
                  </p>
                </div>
              </div>

              {/* Floating element */}
              <div className="absolute -right-4 bottom-10 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 p-6 text-white shadow-xl">
                <Clock className="mb-2 h-8 w-8" />
                <p className="text-2xl font-bold">30-60</p>
                <p className="text-sm text-pink-100">Min Appointments</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="mb-3 font-script text-2xl text-pink-500">
                About Us
              </p>
              <h2 className="mb-6 font-heading text-4xl font-bold text-gray-800 md:text-5xl">
                A Different Kind of Healthcare
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                {company.about.mission}
              </p>
              <p className="mb-8 text-gray-600">{company.about.differentiator}</p>

              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Clock, label: "Longer Appointments" },
                  { icon: Phone, label: "Direct Provider Access" },
                  { icon: Heart, label: "Personalized Care" },
                  { icon: Sparkles, label: "Spa-Like Environment" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                      <item.icon className="h-5 w-5 text-pink-500" />
                    </div>
                    <span className="font-medium text-gray-700">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-6 text-lg font-medium shadow-lg shadow-pink-200 transition-all hover:scale-105 hover:shadow-xl">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <p className="mb-3 font-script text-2xl text-pink-500">
              Patient Stories
            </p>
            <h2 className="font-heading text-4xl font-bold text-gray-800 md:text-5xl">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative rounded-3xl bg-white p-8 shadow-lg"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-pink-100" />
                <div className="mb-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-pink-400 text-pink-400"
                    />
                  ))}
                </div>
                <p className="mb-6 italic text-gray-600">
                  &quot;Testimonial placeholder - Patient reviews will be added
                  here once available.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-rose-200">
                    <span className="font-semibold text-pink-600">P{i}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Patient Name</p>
                    <p className="text-sm text-gray-500">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 py-20 text-white lg:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwdjJoLTYweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNhKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />

        <div className="container relative text-center">
          <p className="mb-3 font-script text-2xl text-pink-200">
            Ready to Begin?
          </p>
          <h2 className="mb-6 font-heading text-4xl font-bold md:text-5xl">
            Experience Healthcare Differently
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-pink-100">
            Schedule your consultation today and discover what personalized,
            patient-centered care feels like.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book">
              <Button
                size="lg"
                className="rounded-full bg-white px-10 py-6 text-lg font-medium text-pink-600 shadow-xl transition-all hover:scale-105 hover:bg-pink-50"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Consultation
              </Button>
            </Link>
            <a href={`tel:${company.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white bg-white/10 px-10 py-6 text-lg font-medium text-white transition-all hover:bg-white hover:text-pink-600"
              >
                <Phone className="mr-2 h-5 w-5" />
                {company.phoneFormatted}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-script text-2xl text-pink-500">
                Visit Us
              </p>
              <h2 className="mb-6 font-heading text-4xl font-bold text-gray-800">
                Proudly Serving {company.serviceAreasText}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-100">
                    <Clock className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-800">Hours</h3>
                    <p className="text-gray-600">{company.hours.weekdays}</p>
                    <p className="text-gray-600">{company.hours.saturday}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-100">
                    <Phone className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-800">Contact</h3>
                    <p className="text-gray-600">
                      Phone:{" "}
                      <a
                        href={`tel:${company.phone}`}
                        className="text-pink-600 hover:underline"
                      >
                        {company.phoneFormatted}
                      </a>
                    </p>
                    <p className="text-gray-600">
                      Email:{" "}
                      <a
                        href={`mailto:${company.email}`}
                        className="text-pink-600 hover:underline"
                      >
                        {company.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="mt-8 inline-block">
                <Button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 font-medium shadow-lg shadow-pink-200 transition-all hover:scale-105">
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Map Placeholder */}
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100 to-rose-100 shadow-xl">
              <div className="flex aspect-video items-center justify-center p-8">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                    <MapPin className="h-8 w-8 text-pink-500" />
                  </div>
                  <p className="font-medium text-pink-700">
                    Map Coming Soon
                  </p>
                  <p className="text-sm text-pink-600">
                    Address to be confirmed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
