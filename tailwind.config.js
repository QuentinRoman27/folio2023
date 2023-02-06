module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: ["./src/**/*.{js,ts,tsx}"],
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    // ...
    require("tailwindcss"),
    require("autoprefixer"),
    // ...
  ],
};
