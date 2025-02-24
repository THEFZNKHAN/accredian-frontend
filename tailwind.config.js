// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#eef5ff",
                    100: "#d9e8ff",
                    200: "#bcd8ff",
                    300: "#8dc0ff",
                    400: "#589ffc",
                    500: "#3178f6",
                    600: "#2060db",
                    700: "#1c4bbc",
                    800: "#1d3e99",
                    900: "#1e3a7b",
                    950: "#172454",
                },
                secondary: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#b9e6fe",
                    300: "#7cd4fd",
                    400: "#36befa",
                    500: "#0da2e7",
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c4a6e",
                    950: "#082f49",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
