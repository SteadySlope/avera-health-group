export const company = {
  name: "Avera Health Group",
  tagline: "Healthcare Designed Around You",
  phone: "706-319-2228",
  phoneFormatted: "(706) 319-2228",
  email: "info@averahealthgroup.com",

  // Service areas
  serviceAreas: ["Newton County", "Rockdale County"],
  serviceAreasText: "Newton & Rockdale Counties",

  // Address (placeholder - update when available)
  address: {
    street: "",
    city: "Covington",
    state: "GA",
    zip: "",
    full: "Covington, GA",
  },

  // Hours
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
    saturday: "Saturday: By Appointment",
    sunday: "Sunday: Closed",
  },

  // Social media (placeholders)
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },

  // Services
  services: [
    {
      id: "family-medicine",
      name: "Family Medicine",
      shortDescription: "Comprehensive care for patients of all ages",
      description: "Our practice provides comprehensive family medicine for patients of all ages, offering preventive care, chronic disease management, and personalized treatment in a welcoming, patient-centered environment.",
      icon: "Users",
      features: [
        "Annual wellness exams",
        "Chronic disease management",
        "Preventive care screenings",
        "Acute illness treatment",
        "Immunizations",
        "Health education",
      ],
    },
    {
      id: "womens-health",
      name: "Women's Health",
      shortDescription: "Specialized care for women at every stage of life",
      description: "We specialize in women's health services, including routine gynecologic care and preventive screenings, with a focus on education and long-term wellness.",
      icon: "Heart",
      features: [
        "Annual well-woman exams",
        "Preventive screenings",
        "Contraception counseling",
        "Menopause management",
        "Breast health",
        "Wellness education",
      ],
    },
  ],

  // Membership/DPC info
  membership: {
    title: "Direct Patient Care",
    tagline: "Healthcare on Your Terms",
    description: "Instead of billing insurance, we offer a simple monthly membership that allows for longer appointments, easier access to your provider, and more time to focus on your individual health needs.",
    benefits: [
      {
        title: "Longer Appointments",
        description: "30-60 minute visits instead of rushed 10-minute appointments",
      },
      {
        title: "Direct Access",
        description: "Text, call, or email your provider directly",
      },
      {
        title: "No Copays",
        description: "Your monthly membership covers all office visits",
      },
      {
        title: "Transparent Pricing",
        description: "Know exactly what you pay—no surprise bills",
      },
      {
        title: "Same-Day Appointments",
        description: "Get seen when you need it, not weeks later",
      },
      {
        title: "Personalized Care",
        description: "Care plans tailored to your unique health needs",
      },
    ],
  },

  // About info
  about: {
    mission: "To provide personalized, patient-centered healthcare that prioritizes relationships over volume, focusing on prevention, education, and long-term wellness.",
    vision: "As we grow, we plan to expand into obstetrical care to support women through pregnancy and every stage of life.",
    differentiator: "We offer a Direct Patient Care model designed around you, not insurance companies. This approach fosters a stronger doctor–patient relationship, provides clearer pricing, and delivers care that is more personalized, preventive, and focused on what matters most to you.",
  },
}

export type Service = typeof company.services[number]
export type MembershipBenefit = typeof company.membership.benefits[number]
