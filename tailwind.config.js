/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      padding: {
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
      },
      width: {
        "20px": "20px",
        "25px": "25px",
      },
      height: {
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
        "80px": "80px",
      },
      margin: {
        "5px": "5px",
        "20px": "20px",
      },
      gap: {
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
    extend: {
      // Extend the backgroundColor variants
      backgroundColor: ["nth-child"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
