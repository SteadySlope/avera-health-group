export const company = {
  name: "Averra Medical Group",
  tagline: "Healthcare Designed Around You",
  phone: "706-319-2228",
  phoneFormatted: "(706) 319-2228",
  email: "info@averramedicalgroup.com",

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
        "Telehealth visits",
        "Weight loss & lifestyle management",
        "Home visits (Newton & Rockdale Counties)",
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
        "Preconception counseling",
      ],
    },
  ],

  // Additional in-office procedures and specialized services
  additionalServices: {
    familyMedicine: [
      "Abscess I&D",
      "Biopsy Punch/Shave",
      "Circumcision",
      "Cyst Aspiration",
      "Endometrial Biopsy",
      "Excise Lesion",
      "Foreign Body Ear",
      "Ganglion Cyst",
      "Hemorrhoid I&D",
      "Ingrown Toenail",
      "Joint Aspiration",
      "Joint Injection",
      "Laceration Repair",
      "Skin Tags",
      "Joint Dislocation Reduction",
    ],
    maleSpecific: [
      "Hair loss treatment",
      "Testosterone replacement therapy",
    ],
    womenSpecific: [
      "IUD Insertion/Removal",
      "Nexplanon Insertion/Removal",
      "Pap Smear",
    ],
  },

  // Home visits
  homeVisits: {
    frequency: "Twice per year",
    areas: "Newton & Rockdale Counties",
    includedWith: "Membership",
  },

  // Membership/DPC info
  membership: {
    title: "Direct Patient Care",
    tagline: "Healthcare on Your Terms",
    description: "We offer two ways to receive care: Fee for Service for those who prefer traditional visit-based billing, and our Membership model for those who want enhanced access, home visits, and telehealth included.",
    models: [
      {
        name: "Fee for Service",
        description: "Traditional visit-based care with transparent pricing. Pay per visit without a monthly commitment.",
        features: [
          "Office visits at transparent rates",
          "Same-day appointments when available",
          "Access to all in-office procedures",
          "Lab and imaging coordination",
        ],
      },
      {
        name: "Membership",
        description: "A monthly membership that includes unlimited visits, telehealth, home visits, and direct provider access.",
        features: [
          "Unlimited office visits",
          "Telehealth visits included",
          "Home visits (2x/year, Newton & Rockdale Counties)",
          "Direct provider access (text, call, email)",
          "Same-day appointments",
          "No copays",
        ],
        contractTerms: "Year contract, dissolvable with 30-day written notice by either party",
      },
    ],
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
        description: "Know exactly what you pay -no surprise bills",
      },
      {
        title: "Same-Day Appointments",
        description: "Get seen when you need it, not weeks later",
      },
      {
        title: "Personalized Care",
        description: "Care plans tailored to your unique health needs",
      },
      {
        title: "Telehealth Visits",
        description: "Virtual visits from the comfort of your home",
      },
      {
        title: "Home Visits",
        description: "Twice yearly home visits for members in Newton & Rockdale Counties",
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
