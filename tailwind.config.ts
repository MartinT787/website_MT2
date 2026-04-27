import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: "#E8E1D5",
          50: "#F2EDE3",
        },
        ink: {
          DEFAULT: "#1F1A14",
          soft: "#4A4035",
        },
        terracotta: {
          DEFAULT: "#C97B5C",
          deep: "#A66045",
        },
        sage: {
          DEFAULT: "#4A574F",
          light: "#6B7C70",
        },
        peach: {
          DEFAULT: "#E0A084",
        },
        eat: {
          DEFAULT: "#6B8E5A",
          soft: "#D8E4CD",
        },
        caution: {
          DEFAULT: "#C99B4D",
          soft: "#F0E4C8",
        },
        avoid: {
          DEFAULT: "#B85A4A",
          soft: "#F0D4CC",
        },
      },
      fontFamily: {
        serif: ["Lora", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
} satisfies Config;
