import Link from "next/link"
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
    <footer className="bg-gradient-to-b from-pink-50 to-rose-50">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7 text-white"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-script text-2xl text-pink-600">
                  Avera Health
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-pink-400">
                  Group
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Experience healthcare designed around you. Comprehensive family
              medicine and women&apos;s health services with personalized,
              patient-centered care.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={company.social.facebook}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-pink-500 shadow-md transition-all hover:scale-110 hover:bg-pink-500 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={company.social.instagram}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-pink-500 shadow-md transition-all hover:scale-110 hover:bg-pink-500 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-pink-700">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-pink-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-pink-700">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-pink-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-pink-700">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-3 text-gray-600 transition-colors hover:text-pink-600"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100">
                    <Phone className="h-4 w-4 text-pink-600" />
                  </div>
                  {company.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-gray-600 transition-colors hover:text-pink-600"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100">
                    <Mail className="h-4 w-4 text-pink-600" />
                  </div>
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-100">
                  <MapPin className="h-4 w-4 text-pink-600" />
                </div>
                <span>Serving {company.serviceAreasText}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-100">
                  <Clock className="h-4 w-4 text-pink-600" />
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
      <div className="border-t border-pink-200 bg-white/50">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 transition-colors hover:text-pink-600"
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
