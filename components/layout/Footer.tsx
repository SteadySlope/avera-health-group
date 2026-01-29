import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import { company } from "@/lib/company"

const footerLinks = {
  services: [
    { name: "Family Medicine", href: "/services/family-medicine" },
    { name: "Women's Health", href: "/services/womens-health" },
    { name: "Membership", href: "/membership" },
  ],
  quickLinks: [
    { name: "About Us", href: "/about" },
    { name: "New Patients", href: "/new-patients" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-sage-50 to-cream-50">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/logo-averra.png"
                  alt="Averra Medical Group"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-semibold text-sage-700">
                  Averra Medical
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-rose-500">
                  Group
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-warm-600">
              Experience healthcare designed around you. Comprehensive family
              medicine and women&apos;s health services with personalized,
              patient-centered care for all ages.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={company.social.facebook}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sage-500 shadow-md transition-all hover:scale-110 hover:bg-sage-500 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={company.social.instagram}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sage-500 shadow-md transition-all hover:scale-110 hover:bg-sage-500 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-sage-700">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-600 transition-colors hover:text-sage-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-sage-700">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-600 transition-colors hover:text-sage-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-sage-700">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-3 text-warm-600 transition-colors hover:text-sage-600"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-100">
                    <Phone className="h-4 w-4 text-sage-600" />
                  </div>
                  {company.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-warm-600 transition-colors hover:text-sage-600"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-100">
                    <Mail className="h-4 w-4 text-sage-600" />
                  </div>
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-warm-600">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-100">
                  <MapPin className="h-4 w-4 text-sage-600" />
                </div>
                <span>Serving {company.serviceAreasText}</span>
              </li>
              <li className="flex items-start gap-3 text-warm-600">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-100">
                  <Clock className="h-4 w-4 text-sage-600" />
                </div>
                <div className="text-sm">
                  <p>{company.hours.weekdays}</p>
                  <p>{company.hours.saturday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sage-200 bg-white/50">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-sm text-warm-500">
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-warm-500 transition-colors hover:text-sage-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
