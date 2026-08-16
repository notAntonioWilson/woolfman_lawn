/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1711",
        turf: "#16512F",
        "turf-dk": "#0B2E1A",
        "turf-dp": "#071F12",
        blade: "#7CC152",
        "blade-lt": "#8FD463",
        haze: "#F3F6F0",
        stone: "#5D6A61",
        line: "rgba(14,58,33,0.13)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { shell: "1200px" },
      keyframes: {
        drift: { to: { transform: "translateX(88px)" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        rise: { from: { opacity: "0", transform: "translateY(22px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        drift: "drift 26s linear infinite",
        marquee: "marquee 46s linear infinite",
        "marquee-fast": "marquee 30s linear infinite",
        rise: "rise .6s ease both",
      },
    },
  },
  plugins: [],
};
