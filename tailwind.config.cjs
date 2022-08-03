const defaultTheme = require("tailwindcss/defaultTheme");

const rem = (px) => `${px / 16}rem`;
const round = (num) => num.toFixed(7).replace(/[.0]+$/, "");
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,njk,js}"],
    darkMode: "media",
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: "hsl(var(--color-primary-dark) / <alpha-value>)",
                    light: "hsl(var(--color-primary-light) / <alpha-value>)",
                    DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
                },
                accent: {
                    DEFAULT: "hsl(var(--color-accent) / <alpha-value>)",
                },
                bg: {
                    dark: "hsl(var(--color-bg-dark) / <alpha-value>)",
                    DEFAULT: "hsl(var(--color-bg) / <alpha-value>)",
                },
                bgel: {
                    dark: "hsl(var(--color-bg-element-dark) / <alpha-value>)",
                    DEFAULT: "hsl(var(--color-bg-element) / <alpha-value>)",
                },
            },
            fontFamily: {
                sans: ["Lexend var", ...defaultTheme.fontFamily.sans],
            },
            minWidth: {
                8: rem(8),
                80: rem(20),
                48: rem(48),
            },

            gridTemplateColumns: {
                responsivecards: "repeat(auto-fill, minmax(20rem, 1fr))",
            },
            typography: (theme) => ({
                light: {
                    css: [
                        {
                            color: theme("colors.gray.300"),
                            '[class~="lead"]': {
                                color: theme("colors.gray.300"),
                            },
                            a: {
                                color: theme("colors.white"),
                            },
                            strong: {
                                color: theme("colors.white"),
                            },
                            "ol > li::before": {
                                color: theme("colors.gray.400"),
                            },
                            "ul > li::before": {
                                backgroundColor: theme("colors.gray.600"),
                            },
                            hr: {
                                borderColor: theme("colors.gray.200"),
                            },
                            blockquote: {
                                color: theme("colors.gray.200"),
                                borderLeftColor: theme("colors.gray.600"),
                            },
                            h1: {
                                color: theme("colors.white"),
                            },
                            h2: {
                                color: theme("colors.white"),
                            },
                            h3: {
                                color: theme("colors.white"),
                            },
                            h4: {
                                color: theme("colors.white"),
                            },
                            "figure figcaption": {
                                color: theme("colors.gray.400"),
                            },
                            code: {
                                color: theme("colors.white"),
                            },
                            "a code": {
                                color: theme("colors.white"),
                            },
                            pre: {
                                color: theme("colors.gray.200"),
                                backgroundColor: theme("colors.gray.800"),
                            },
                            thead: {
                                color: theme("colors.white"),
                                borderBottomColor: theme("colors.gray.400"),
                            },
                            "tbody tr": {
                                borderBottomColor: theme("colors.gray.600"),
                            },
                        },
                    ],
                },
                // Make <code> style consistent with <pre>
                DEFAULT: {
                    css: {
                        "code::before": {
                            content: '""',
                        },
                        "code::after": {
                            content: '""',
                        },
                        "* code": {
                            fontWeight: "inherit",
                            marginLeft: rem(4),
                            marginRight: rem(4),
                            borderRadius: rem(4),
                            paddingTop: em(2, 12),
                            paddingRight: em(4, 12),
                            paddingBottom: em(2, 12),
                            paddingLeft: em(4, 12),
                            backgroundColor: theme("colors.gray.800"),
                            color: theme("colors.gray.200"),
                            "box-decoration-break": "clone",
                        },
                    },
                },
                sm: {
                    css: {
                        "* code": {
                            borderRadius: rem(4),
                            paddingTop: em(2, 12),
                            paddingRight: em(4, 12),
                            paddingBottom: em(2, 12),
                            paddingLeft: em(4, 12),
                        },
                    },
                },
                lg: {
                    css: {
                        "* code": {
                            borderRadius: rem(6),
                            paddingTop: rem(4),
                            paddingRight: rem(6),
                            paddingBottom: rem(4),
                            paddingLeft: rem(6),
                        },
                    },
                },
                xl: {
                    css: {
                        "* code": {
                            borderRadius: rem(8),
                            paddingTop: em(4, 18),
                            paddingRight: em(6, 18),
                            paddingBottom: em(4, 18),
                            paddingLeft: em(6, 18),
                        },
                    },
                },
                "2xl": {
                    css: {
                        "* code": {
                            borderRadius: rem(8),
                            paddingTop: em(6, 20),
                            paddingRight: em(8, 20),
                            paddingBottom: em(6, 20),
                            paddingLeft: em(8, 20),
                        },
                    },
                },
            }),
        },
    },
    variants: {
        extend: {
            typography: ["dark"],
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
