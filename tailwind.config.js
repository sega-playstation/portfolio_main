export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#f6d4b1", // your background color
        primaryText: "#535253", // your preferred font color
      },
      fontFamily: {
        sans: ["'Fira Code'", "monospace"],
      },
    },
  },
  plugins: [],
}
