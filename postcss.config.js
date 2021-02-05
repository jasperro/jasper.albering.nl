module.exports = {
    plugins: [
        require("postcss-import"),
        require("postcss-nested"),
        require("tailwindcss")("./tailwind.config.js"),
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
