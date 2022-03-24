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
        "browser-bg": "url('/pixel_weave.png')",
      }),
      cursor: {
        mac: "url(/cursor.cur), default",
        macPointer: "url(/pointer_cursor.cur), pointer",
      },
    },
  },
  plugins: [],
};
