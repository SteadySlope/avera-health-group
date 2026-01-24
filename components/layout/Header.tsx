"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/company"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Membership", href: "/membership" },
  { name: "New Patients", href: "/new-patients" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-white"
      )}
    >
      {/* Top Bar - Rose Gold accent */}
      <div className="bg-gradient-to-r from-pink-100 via-rose-50 to-pink-100">
        <div className="container flex h-10 items-center justify-between text-sm">
          <p className="hidden text-pink-700 md:block">
            Welcome to {company.name}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${company.phone}`}
              className="flex items-center gap-2 font-medium text-pink-700 transition-colors hover:text-pink-900"
            >
              <Phone className="h-4 w-4" />
              {company.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* Logo mark - elegant flower/heart shape */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500 lg:h-14 lg:w-14">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7 text-white lg:h-8 lg:w-8"
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
              <span className="font-script text-2xl text-pink-600 lg:text-3xl">
                Avera Health
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-pink-400">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-pink-600"
                    : "text-gray-600 hover:text-pink-600"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-400 to-rose-400" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link href="/book" className="hidden sm:block">
              <Button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 font-medium text-white shadow-lg shadow-pink-200 transition-all hover:scale-105 hover:shadow-xl hover:shadow-pink-300">
                Book Online
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-pink-600 transition-colors hover:bg-pink-100 lg:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-white shadow-xl lg:hidden">
          <nav className="container py-6">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-lg font-medium transition-colors",
                    pathname === item.href
                      ? "bg-pink-50 text-pink-600"
                      : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 border-t border-pink-100 pt-4">
                <Link href="/book" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 py-6 text-lg font-medium text-white">
                    Book Online
                  </Button>
                </Link>
                <a
                  href={`tel:${company.phone}`}
                  className="mt-4 flex items-center justify-center gap-2 py-3 text-lg font-medium text-pink-600"
                >
                  <Phone className="h-5 w-5" />
                  {company.phoneFormatted}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
