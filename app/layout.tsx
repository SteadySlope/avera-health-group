import type { Metadata } from "next"
import { Open_Sans, Playfair_Display, Great_Vibes } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { company } from "@/lib/company"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: `${company.name} provides comprehensive family medicine and women's health services in ${company.serviceAreasText}. Experience personalized, patient-centered healthcare with our Direct Patient Care model.`,
  keywords: [
    "family medicine",
    "women's health",
    "direct patient care",
    "DPC",
    "Newton County",
    "Rockdale County",
    "Georgia",
    "preventive care",
    "gynecologic care",
    "wellness",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: company.name,
    title: `${company.name} | ${company.tagline}`,
    description: `Comprehensive family medicine and women's health services in ${company.serviceAreasText}. Direct Patient Care model.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.tagline}`,
    description: `Comprehensive family medicine and women's health services in ${company.serviceAreasText}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${playfair.variable} ${greatVibes.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
