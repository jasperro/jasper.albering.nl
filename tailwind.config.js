const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.njk", "./src/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "var(--color-primary-light)",
                    DEFAULT: "var(--color-primary)",
                },
                accent: {
                    light: "var(--color-accent-light)",
                    DEFAULT: "var(--color-accent)",
                },
                bg: {
                    dark: "var(--color-bg-dark)",
                    DEFAULT: "var(--color-bg)",
                },
                bgel: {
                    dark: "var(--color-bg-element-dark)",
                    DEFAULT: "var(--color-bg-element)",
                },
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
            minWidth: {
                72: "18rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
