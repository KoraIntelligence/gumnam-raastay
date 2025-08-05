/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f9f7f5',
        twilight: '#0f0e11',
        ritualInk: '#2e2e2e',
        ashWhisper: '#eaeaea',
        burnishedGold: '#c29b46',
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'serif'],
        ritual: ['"Marcellus"', 'serif'],
        body: ['"Source Sans Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}