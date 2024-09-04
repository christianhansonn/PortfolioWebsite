/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./public/image/bannerpicture.jpeg')",
      },
      screens: {
        sm: "640px",
        md: "1050px",
        lg: "1170px",
        xl: "1260px",
      },
    },
  },
  plugins: [],
};
