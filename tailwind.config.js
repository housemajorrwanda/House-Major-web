/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["var(--font-kumbh-sans)", "system-ui", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        sans: ["var(--font-kumbh-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        // Gratech-inspired gradient colors
        "gratech-blue-start": "#4c6ef5", // Deep blue start
        "gratech-blue-end": "#748ffc", // Light blue end
        "gratech-purple-start": "#5b4cdb", // Purple variation start
        "gratech-purple-end": "#7c72f5", // Purple variation end
      },
      backgroundImage: {
        // Gratech blue gradient (similar to the image)
        "gratech-gradient": "linear-gradient(135deg, #4c6ef5 0%, #748ffc 100%)",
        "gratech-gradient-horizontal":
          "linear-gradient(90deg, #4c6ef5 0%, #748ffc 100%)",
        "gratech-gradient-vertical":
          "linear-gradient(180deg, #4c6ef5 0%, #748ffc 100%)",

        // Purple variation
        "gratech-purple-gradient":
          "linear-gradient(135deg, #5b4cdb 0%, #7c72f5 100%)",
        "gratech-purple-horizontal":
          "linear-gradient(90deg, #5b4cdb 0%, #7c72f5 100%)",

        // Your existing gradient
        "gradient-bg":
          "linear-gradient(90deg, var(--color1) -10.59%, var(--color2) 300.59%)",
      },
    },
  },
  plugins: [],
};
