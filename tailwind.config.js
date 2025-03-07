export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#BAA5FF", // existing flat color
        primaryText: "#0D1317",
      },
      fontFamily: {
        sans: ["'VT323'", "monospace"],
      },
      backgroundImage: {
        'parallax-gradient': 'linear-gradient(to bottom right, #0f172a, #334155, #475569)',
      },
    },
  },
  plugins: [],
}
