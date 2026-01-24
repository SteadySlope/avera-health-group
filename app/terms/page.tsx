import { Metadata } from "next"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${company.name}. Read our terms and conditions for using our website and services.`,
}

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 py-20 lg:py-28">
        <div className="absolute left-0 bottom-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-5xl font-bold text-gray-800 md:text-6xl">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="prose prose-pink mx-auto max-w-3xl prose-headings:font-heading prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-pink-600 prose-strong:text-gray-800">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the {company.name} website and services, you
              agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use our website or services.
            </p>

            <h2>Description of Services</h2>
            <p>
              {company.name} provides family medicine and women&apos;s health services
              through a Direct Patient Care membership model. Our website
              provides information about our services and allows you to request
              appointments and contact our practice.
            </p>

            <h2>Medical Disclaimer</h2>
            <p>
              The information provided on this website is for general
              informational purposes only and is not intended to be a substitute
              for professional medical advice, diagnosis, or treatment. Always
              seek the advice of your physician or other qualified health
              provider with any questions you may have regarding a medical
              condition.
            </p>
            <p>
              Never disregard professional medical advice or delay in seeking it
              because of something you have read on this website. If you think
              you may have a medical emergency, call your doctor or 911
              immediately.
            </p>

            <h2>Use of Website</h2>
            <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the website in any way that violates applicable laws</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit any harmful code or malware</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Collect or harvest user information without consent</li>
            </ul>

            <h2>Appointment Requests</h2>
            <p>
              Submitting an appointment request through our website does not
              guarantee an appointment. All appointments are subject to
              availability and confirmation by our office. We will contact you
              to confirm your appointment.
            </p>

            <h2>Membership Terms</h2>
            <p>
              Specific terms regarding our Direct Patient Care membership,
              including fees, included services, and cancellation policies, will
              be provided in a separate membership agreement upon enrollment.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of {company.name} and is protected by
              copyright and other intellectual property laws. You may not
              reproduce, distribute, or create derivative works without our
              written permission.
            </p>

            <h2>Privacy</h2>
            <p>
              Your use of our website is also governed by our Privacy Policy.
              Please review our Privacy Policy to understand our practices
              regarding your personal information.
            </p>

            <h2>Links to Third Parties</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the content or practices of these external sites.
              Your use of third-party websites is at your own risk.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {company.name} shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of your use of the website or
              services.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {company.name} and its
              employees from any claims, losses, or damages arising out of your
              use of the website or violation of these Terms.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify you of any changes by posting the new Terms on this page.
              Your continued use of the website after changes constitutes
              acceptance of the new Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Georgia, without regard to its conflict
              of law provisions.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact
              us:
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
