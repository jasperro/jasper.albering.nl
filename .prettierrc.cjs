module.exports = {
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    trailingComma: "es5",
    plugins: [
        require.resolve("prettier-plugin-astro"),
        require.resolve("prettier-plugin-tailwindcss"),
    ],
    tailwindConfig: "./tailwind.config.cjs",
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};
