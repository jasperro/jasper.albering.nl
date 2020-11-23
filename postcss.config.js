module.exports = {
    plugins: [
        require("postcss-import"),
        require("postcss-nested"),
        require("tailwindcss"),
        require("postcss-preset-env")({ stage: 1 }),
        require("postcss-clean"),
    ],
};
