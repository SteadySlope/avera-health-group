import { Metadata } from "next"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "FAQs",
  description: `Frequently asked questions about ${company.name}, Direct Patient Care, membership, and our services.`,
}

const faqCategories = [
  {
    title: "About Direct Patient Care (DPC)",
    faqs: [
      {
        q: "What is Direct Patient Care?",
        a: "Direct Patient Care (DPC) is a healthcare model where patients pay a monthly membership fee directly to their primary care provider, bypassing insurance for routine care. This allows for longer appointments, better access, and a stronger doctor-patient relationship.",
      },
      {
        q: "Do I still need health insurance?",
        a: "While DPC covers your primary care needs, we recommend keeping insurance (often a high-deductible plan) for hospitalizations, specialist visits, imaging, and emergencies. Think of DPC as your primary care coverage and insurance as your 'catastrophic' coverage.",
      },
      {
        q: "How is DPC different from concierge medicine?",
        a: "While both offer enhanced access, DPC typically has lower monthly fees because we don't bill insurance at all for primary care. Concierge practices often still bill insurance and charge an additional fee for enhanced services.",
      },
      {
        q: "Will my insurance cover DPC membership?",
        a: "DPC membership is typically not covered by insurance. However, some HSA (Health Savings Account) and HRA (Health Reimbursement Arrangement) plans may allow you to use those funds for DPC membership. Check with your plan administrator.",
      },
    ],
  },
  {
    title: "Membership & Pricing",
    faqs: [
      {
        q: "What does membership include?",
        a: "Your membership includes unlimited office visits, same-day or next-day appointments, direct access to your provider via text/call/email, preventive care, chronic disease management, and many in-office procedures. Contact us for a complete list of included services.",
      },
      {
        q: "Are there any additional fees?",
        a: "Your monthly membership covers all primary care services. Some items like labs, imaging, medications, and specialist referrals may have additional costs, but we work to get you the best prices and are transparent about all costs upfront.",
      },
      {
        q: "Can I cancel my membership?",
        a: "Yes, memberships are month-to-month with no long-term contracts. We ask for 30 days' notice if you decide to cancel.",
      },
      {
        q: "Do you offer family plans?",
        a: "Yes, we offer family membership options. Contact us to discuss pricing for your household.",
      },
    ],
  },
  {
    title: "Appointments & Access",
    faqs: [
      {
        q: "How do I schedule an appointment?",
        a: "Members can schedule appointments online through our patient portal, by calling our office, or by texting/emailing their provider directly. We make it easy to get the care you need.",
      },
      {
        q: "Can I get same-day appointments?",
        a: "Yes! One of the biggest benefits of DPC is improved access. We reserve time each day for same-day appointments and urgent needs. Most members can be seen within 24-48 hours.",
      },
      {
        q: "How long are appointments?",
        a: "Initial consultations are typically 45-60 minutes. Follow-up visits are usually 30-60 minutes -much longer than the typical 10-15 minute visit at traditional practices.",
      },
      {
        q: "Can I really text my doctor?",
        a: "Yes! Members have direct access to their provider via secure text, phone, and email. For non-urgent questions, we typically respond within a few hours during business hours.",
      },
    ],
  },
  {
    title: "Services & Care",
    faqs: [
      {
        q: "What services do you offer?",
        a: "We provide comprehensive family medicine and women's health services, including preventive care, chronic disease management, acute illness treatment, wellness exams, women's health services, and more. Visit our Services page for complete details.",
      },
      {
        q: "Do you see children?",
        a: "Yes, we provide family medicine for patients of all ages, from newborns to seniors.",
      },
      {
        q: "What if I need a specialist?",
        a: "We coordinate all specialist referrals and can often negotiate better rates. We'll help you find the right specialist and ensure they have all the information needed for your care.",
      },
      {
        q: "Do you offer telehealth visits?",
        a: "Yes, we offer virtual visits when appropriate. Many concerns can be addressed through telehealth, saving you time while still providing quality care.",
      },
      {
        q: "What about after-hours emergencies?",
        a: "For true emergencies, always call 911 or go to the nearest emergency room. For urgent but non-emergency issues, members can often reach their provider after hours for guidance.",
      },
    ],
  },
  {
    title: "Getting Started",
    faqs: [
      {
        q: "How do I become a patient?",
        a: "Start by scheduling an initial consultation. This visit allows us to learn about your health needs and for you to learn about our practice. If we're a good fit, you can enroll in membership at that time.",
      },
      {
        q: "Is there a fee for the initial consultation?",
        a: "Contact us for information about initial consultation fees and how they apply to membership enrollment.",
      },
      {
        q: "Are you accepting new patients?",
        a: "Yes! We intentionally limit our patient panel to ensure quality care, so we encourage you to schedule your consultation soon if you're interested.",
      },
      {
        q: "What should I bring to my first appointment?",
        a: "Please bring a photo ID, insurance card (if applicable), list of current medications, list of allergies, and any previous medical records you have access to.",
      },
    ],
  },
]

export default function FAQsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sage-50 via-cream-50 to-rose-50 py-20 lg:py-28">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-200/30 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-script text-2xl text-sage-600">FAQs</p>
            <h1 className="mb-6 font-heading text-5xl font-bold text-warm-800 md:text-6xl">
              Frequently Asked <span className="text-sage-600">Questions</span>
            </h1>
            <p className="text-lg text-warm-600">
              Find answers to common questions about our practice, Direct
              Patient Care, and what to expect as a patient.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="mb-6 font-heading text-2xl font-bold text-sage-600">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="rounded-2xl border-2 border-sage-100 bg-gradient-to-br from-sage-50 to-cream-50 px-6"
                    >
                      <AccordionTrigger className="text-left text-warm-800 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-warm-600">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gradient-to-br from-cream-50 to-sage-50 py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-4xl font-bold text-warm-800">
              Still Have Questions?
            </h2>
            <p className="mb-10 text-warm-600">
              We&apos;re here to help. Contact us directly or schedule a
              consultation to learn more about our practice.
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
              <Link href="/book">
                <Button className="rounded-full bg-gradient-to-r from-sage-500 to-sage-600 px-8 py-6 font-medium shadow-lg shadow-sage-200 transition-all hover:scale-105">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
