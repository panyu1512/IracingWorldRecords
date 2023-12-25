const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        red: theme("colors.red.600"),
        white: theme("colors.gray.600"),
        blue: theme("colors.blue.600"),
      }),
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
