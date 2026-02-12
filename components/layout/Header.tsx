"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
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
      {/* Main Header */}
      <div className="container">
        <div className="flex h-20 items-center justify-between lg:h-28">
          {/* Logo Only - Large */}
          <Link href="/" className="flex items-center">
            <div className="relative h-28 w-28 lg:h-40 lg:w-40">
              <Image
                src="/logo-averra.png"
                alt="Averra Medical Group"
                fill
                className="object-contain"
                priority
              />
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
                    ? "text-sage-600"
                    : "text-warm-600 hover:text-sage-600"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-sage-400 to-rose-400" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Phone + Book Online */}
          <div className="flex items-center gap-3">
            <a href={`tel:${company.phone}`} className="hidden sm:block">
              <Button
                variant="outline"
                className="rounded-full border-2 border-sage-300 px-5 font-medium text-sage-700 transition-all hover:bg-sage-50"
              >
                <Phone className="mr-2 h-4 w-4" />
                {company.phoneFormatted}
              </Button>
            </a>
            <Link href="/book" className="hidden sm:block">
              <Button className="rounded-full bg-gradient-to-r from-sage-500 to-sage-600 px-6 font-medium text-white shadow-lg shadow-sage-200 transition-all hover:scale-105 hover:shadow-xl hover:shadow-sage-300">
                Book Online
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-50 text-sage-600 transition-colors hover:bg-sage-100 lg:hidden"
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
                      ? "bg-sage-50 text-sage-600"
                      : "text-warm-600 hover:bg-sage-50 hover:text-sage-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 border-t border-sage-100 pt-4">
                <Link href="/book" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-full bg-gradient-to-r from-sage-500 to-sage-600 py-6 text-lg font-medium text-white">
                    Book Online
                  </Button>
                </Link>
                <a
                  href={`tel:${company.phone}`}
                  className="mt-4 flex items-center justify-center gap-2 py-3 text-lg font-medium text-sage-600"
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
