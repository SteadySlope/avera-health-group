import { Metadata } from "next"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${company.name}. Learn how we collect, use, and protect your personal information.`,
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sage-50 via-cream-50 to-rose-50 py-20 lg:py-28">
        <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-sage-200/30 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-5xl font-bold text-warm-800 md:text-6xl">
              Privacy Policy
            </h1>
            <p className="text-warm-600">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="prose prose-sage mx-auto max-w-3xl prose-headings:font-heading prose-headings:text-warm-800 prose-p:text-warm-600 prose-a:text-sage-600 prose-strong:text-warm-800">
            <h2>Introduction</h2>
            <p>
              {company.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Medical history and health information</li>
              <li>Insurance information (if applicable)</li>
              <li>Billing and payment information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain
              information about your device, including your IP address, browser
              type, and operating system.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our healthcare services</li>
              <li>Process appointments and communicate with you</li>
              <li>Send you administrative information and updates</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>HIPAA Compliance</h2>
            <p>
              As a healthcare provider, we are committed to complying with the
              Health Insurance Portability and Accountability Act (HIPAA). Your
              protected health information (PHI) is handled in accordance with
              HIPAA regulations and our Notice of Privacy Practices, which will
              be provided to you as a patient.
            </p>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with:
            </p>
            <ul>
              <li>Healthcare providers involved in your care</li>
              <li>Service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no method
              of transmission over the Internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of certain uses of your information</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience. You can set your browser to
              refuse cookies, though some features may not function properly.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website is not directed to children under 13. We do not
              knowingly collect personal information from children under 13
              through our website.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>Phone: {company.phoneFormatted}</li>
              <li>Email: {company.email}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
