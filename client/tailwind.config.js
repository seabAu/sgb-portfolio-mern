/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#343434", 
                secondary: "#282828",
                tertiary: "#3e3e3e", // Reddish
                bodyprimary: "#e5032e",
                bodysecondary: "#50026e", // Dark blue
                header: "#453979", // Bluish
                body: "#242b44", // Dull Bluish
                highlightColor: "#fdad51", // Light Orangeish
                highlightColor2: "#fef48b",
                textColor: "#f2f4ec", // Yellow-white
            },
        },
        screens: {
            //// Min-Width Breakpoints:
            //// sm: "640px",
            //// // => @media (min-width: 640px) { ... }

            //// md: "768px",
            //// // => @media (min-width: 768px) { ... }

            //// lg: "1024px",
            //// // => @media (min-width: 1024px) { ... }

            //// xl: "1280px",
            //// // => @media (min-width: 1280px) { ... }

            //// "2xl": "1536px",
            //// // => @media (min-width: 1536px) { ... }

            //// Max-Width Breakpoints:
            //// "2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            //// xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            //// lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            //// md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            lg: { max: "2023px" },
            sm: { max: "1000px" },
            // => @media (max-width: 639px) { ... }
        },
    },
    plugins: [],
};
