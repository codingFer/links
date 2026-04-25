/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        "fg-muted": "rgb(var(--fg-muted) / <alpha-value>)",
        "icon-outline": "rgb(var(--icon-outline) / <alpha-value>)",
        "icon-bg": "rgb(var(--icon-bg) / <alpha-value>)",
        "icon-text": "rgb(var(--icon-text) / <alpha-value>)",
        "icon-outline-hover": "rgb(var(--icon-outline-hover) / <alpha-value>)",
        "icon-bg-hover": "rgb(var(--icon-bg-hover) / <alpha-value>)",
        "icon-text-hover": "rgb(var(--icon-text-hover) / <alpha-value>)",
        "link-outline": "rgb(var(--link-outline) / <alpha-value>)",
        "link-bg": "rgb(var(--link-bg) / <alpha-value>)",
        "link-text": "rgb(var(--link-text) / <alpha-value>)",
        "link-outline-hover": "rgb(var(--link-outline-hover) / <alpha-value>)",
        "link-bg-hover": "rgb(var(--link-bg-hover) / <alpha-value>)",
        "link-text-hover": "rgb(var(--link-text-hover) / <alpha-value>)",
      },
    },
  },
};
