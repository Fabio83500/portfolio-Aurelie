/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-lg": "0px 0px 15px 3px rgba(23,23,23, 0.20)",
        "custom-md": "0px 0px 10px 2px rgba(23,23,23, 0.16)",
        "custom-sm": "0px 0px 6px 2px rgba(23,23,23, 0.16)",
      },
    },
  },
  plugins: [],
}
