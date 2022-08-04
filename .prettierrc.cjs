module.exports = {
    "tabWidth": 4,
    "semi": true,
    "singleQuote": false,
    "trailingComma": "es5",
    "plugins": ["prettier-plugin-tailwindcss", require.resolve("prettier-plugin-astro")],
    "overrides": [
        {
        "files": "*.astro",
            "options": {
                "parser": "astro"
            }
        }
    ]
}
