const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
   default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
      "./app/**/*.{js,jsx}",
      "./src/**/*.{js,jsx}",
   ],
   darkMode: "class",
   theme: {
      // rest of the code
   },
   plugins: [
      // rest of the code
      addVariablesForColors,
   ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
   let allColors = flattenColorPalette(theme("colors"));
   let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
   );

   addBase({
      ":root": newVars,
   });
}
