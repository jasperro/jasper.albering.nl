module.exports = {
    plugins: [
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("tailwindcss")("./tailwind.config.cjs"),
        require("postcss-preset-env")({
            stage: 1,
            features: {
                "focus-within-pseudo-class": false,
            },
        }),
        require("cssnano")({
            preset: "advanced",
        }),
    ],
};
