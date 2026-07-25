import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#000000",
          secondary: "#0a0a0a",
          card: "#171717"
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.1)"
        },
        text: {
          primary: "#FFFFFF",
          secondary: "rgba(255,255,255,0.7)"
        },
        accent: {
          DEFAULT: "#C6F13D", // Lime green
          light: "#d4f566",
          dim: "rgba(198,241,61,0.12)"
        }
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      maxWidth: {
        content: "1280px"
      },
      spacing: {
        "section-desktop": "160px",
        "section-tablet": "80px",
        "section-mobile": "64px"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'fade-in-down': 'fade-in-down 0.6s ease-out both',
      }
    }
  },
  plugins: []
};

export default config;
