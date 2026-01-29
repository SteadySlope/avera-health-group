import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Sage green palette (from logo lotus petals)
        sage: {
          50: "#f4f7f3",
          100: "#e6ebe4",
          200: "#cdd8ca",
          300: "#adbfa8",
          400: "#8aa382",
          500: "#6b8763",
          600: "#536b4d",
          700: "#43553f",
          800: "#384635",
          900: "#2f3b2d",
          950: "#171e16",
        },
        // Dusty rose palette (from logo figure)
        rose: {
          50: "#fdf6f5",
          100: "#fbecea",
          200: "#f7dbd8",
          300: "#f0c2bc",
          400: "#e5a099",
          500: "#d4807a",
          600: "#bc6560",
          700: "#9d514d",
          800: "#834543",
          900: "#6e3d3c",
          950: "#3b1d1c",
        },
        // Warm neutral palette
        warm: {
          50: "#faf9f7",
          100: "#f3f1ed",
          200: "#e6e2db",
          300: "#d5cfc4",
          400: "#c1b8a9",
          500: "#a89c8a",
          600: "#958775",
          700: "#7c6f60",
          800: "#665c51",
          900: "#554d44",
          950: "#2d2924",
        },
        // Cream tones
        cream: {
          50: "#fefdfb",
          100: "#fdf9f3",
          200: "#faf3e6",
          300: "#f5e9d4",
          400: "#eddcbe",
          500: "#e2cba3",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["var(--font-great-vibes)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-sage": "linear-gradient(135deg, #e6ebe4 0%, #cdd8ca 50%, #adbfa8 100%)",
        "gradient-rose": "linear-gradient(135deg, #fbecea 0%, #f7dbd8 50%, #f0c2bc 100%)",
        "gradient-warm": "linear-gradient(135deg, #f3f1ed 0%, #e6e2db 50%, #d5cfc4 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
