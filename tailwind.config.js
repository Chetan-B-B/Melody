module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // usage:grid-cols-custom ;the following css will apply.grid-cols this is like a general one in the //documentaion
        custom: "12rem auto",
        footer: "200px minmax(900px, 1fr) 100px",
        // Complex site-specific column configuration
      },
      gridTemplateRows: {
        // usage:grid-rows-custom ;the following css will apply.grid-rows this is like a general one in the //documentaion
        custom: `4rem
         auto`,
        layout: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
