/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#acadc2",
          100: "#8283a3",
          200: "#636587",
          300: "#4f516c",
          400: "#3f4156",
          500: "#09090b",
          600: "#44475a",
          700: "#1a1b23",
          800: "#20222c",
          850: "#282a36",
          875: "#20222b",
          900: "#242631",
        },
      },
    },
  },
  plugins: [],
};
