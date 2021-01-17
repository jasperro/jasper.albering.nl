const defaultTheme = require("tailwindcss/defaultTheme");

function varopacity(opacityVariable, opacityValue, variableName) {
    return opacityVariable
        ? `rgba(var(--${variableName}), var(${opacityVariable}, 1))`
        : opacityValue
        ? `rgba(var(--${variableName}), ${opacityValue})`
        : `rgb(var(--${variableName}))`;
}

module.exports = {
    purge: {
        content: ["./src/**/*.{html,njk,js}"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    light: ({ opacityVariable, opacityValue }) =>
                        varopacity(
                            opacityVariable,
                            opacityValue,
                            "color-primary-light"
                        ),
                    DEFAULT: ({ opacityVariable, opacityValue }) =>
                        varopacity(
                            opacityVariable,
                            opacityValue,
                            "color-primary"
                        ),
                },
                accent: {
                    light: ({ opacityVariable, opacityValue }) =>
                        varopacity(
                            opacityVariable,
                            opacityValue,
                            "color-accent-light"
                        ),
                    DEFAULT: ({ opacityVariable, opacityValue }) =>
                        varopacity(
                            opacityVariable,
                            opacityValue,
                            "color-accent"
                        ),
                },
                bg: {
                    dark: ({ opacityVariable, opacityValue }) =>
                        varopacity(
                            opacityVariable,
                            opacityValue,
                            "color-bg-dark"
                        ),
                    DEFAULT: ({ opacityVariable, opacityValue }) =>
                        varopacity(opacityVariable, opacityValue, "color-bg"),
                },
                bgel: {
                    dark: ({ opacityVariable, opacityValue }) =>
                        varopacity(
                            opacityVariable,
                            opacityValue,
                            "color-bg-element-dark"
                        ),
                    DEFAULT: ({ opacityVariable, opacityValue }) =>
                        varopacity(
                            opacityVariable,
                            opacityValue,
                            "color-bg-element"
                        ),
                },
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
            minWidth: {
                8: "2rem",
                80: "20rem",
            },

            gridTemplateColumns: {
                "fit-80": "repeat(auto-fit, 20rem)",
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
