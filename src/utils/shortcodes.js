const fs = require("fs");
const Image = require("@11ty/eleventy-img");

module.exports = {
    icon: function(name, classes = "w-6 h-6", rest, inline = true) {
        const iconsprites = "/assets/icons/icons.sprite.svg";
        const iconid = `#icon-${name}`;
        const href = inline ? iconid : `${iconsprites}${iconid}`;
        return `<svg class="icon ${classes}" role="img" ${rest}>
                    <title>${name}</title>
                    <use href="${href}"></use>
                </svg>`;
    },
    iconsprites: function() {
        const iconsprites = `${__dirname}/../../dist/assets/icons/icons.sprite.svg`;
        const data = fs.readFileSync(iconsprites, (err, data) => {
            if (err) {
                throw new Error(err);
            }
        });
        return `
        <div class="nodispsvg" aria-hidden="true">
            ${data}
        </div>
        `;
    },

    image: async function(cls, src, alt, sizes = [300, 600]) {
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
