/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple@": "var(--purple)",
        "second-purple@": "var(--second-purple)",
        "orange@": "var(--orange)",
        "red@": "var(--red)",
        "green@": "var(--green)",
        "black@": "var(--black)",
        "white@": "var(--white)",
        "light-gray@": "var(--light-gray)",
        "bg-gray@": "var(--bg-gray)",
        "gray-100@": "var(--gray-100)",
        "gray-200@": "var(--gray-200)",
        "gray-300@": "var(--gray-300)",
        "gray-400@": "var(--gray-400)",
        "gray-500@": "var(--gray-500)",
        "gray-600@": "var(--gray-600)",
        "dark-gray@": "var(--dark-gray)",
        "bg-footer@": "var(--bg-footer)",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
};
