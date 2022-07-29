const fs = require("fs");
const Image = require("@11ty/eleventy-img");

module.exports = {
    icon: function (name, classes = "w-6 h-6", rest = "", inline = true) {
        return `<svg class="icon ${classes}" role="img" ${rest}>
                    <title>${name}</title>
                    <use href="#svg-${name}"></use>
                </svg>`;
    },

    image: async function (cls, src, alt, sizes = [300, 600]) {
        let metadata = await Image(`src/${src}`, {
            widths: [300, 600],
            formats: ["avif", "webp", "jpeg"],
            outputDir: "dist/assets/images/",
            urlPath: "/assets/images",
        });

        let imageAttributes = {
            class: cls,
            alt,
            sizes,
            loading: "lazy",
            decoding: "async",
        };

        // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
        return Image.generateHTML(metadata, imageAttributes);
    },
};
