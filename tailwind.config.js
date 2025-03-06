export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#BFEDC1", // your background color
        primaryText: "#0D1317", // your preferred font color
      },
      fontFamily: {
        sans: ["'VT323'", "monospace"],
      },
    },
  },
  plugins: [],
}
