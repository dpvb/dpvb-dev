/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ["Quicksand", "sans-serif"],
        },
        extend: {},
        keyframes: {
            "fly-in": {
                "0%": {
                    transform: "translateX(200%)",
                    opacity: 0,
                },
                "100%": {
                    transform: "translateX(0)",
                    opacity: 1,
                },
            },
        },
        animation: {
            "fly-in": "fly-in 1s ease-in-out",
        },
    },
    plugins: [],
};
