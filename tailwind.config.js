/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0D0E",
        primaryText: "#F9F4DA",
        editorBg: "#F3F4F6",
        buttonBg: "#FCBA28",
        buttonText: "#231F20",
        microtaskQueue: "#ED203D",
        eventLoop: "#7B5EA7",
        callStack: "#0BA95B",
        taskQueue: "#F9F4DA",
      },
    },
  },
  plugins: [],
};
