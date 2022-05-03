module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // usage:grid-cols-custom ;the following css will apply.grid-cols this is like a general one in the documentaion
        custom: "12rem auto",
        footer: "200px minmax(900px, 1fr) 100px",
        // Complex site-specific column configuration
      },
    },
  },
  plugins: [],
};
