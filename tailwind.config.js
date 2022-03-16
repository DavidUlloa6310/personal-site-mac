module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chicago: "Chicago, serif",
        monaco: "Monaco, sans-serif",
      },
      backgroundImage: (theme) => ({
        "mac-bg": "url('/mac_bg.jpg')",
      }),
    },
  },
  plugins: [],
};
