const fs = require("fs");

module.exports = {
    icon: function (name, size = "small", rest, inline = true) {
        const iconsprites = "/assets/icons/icons.sprite.svg";
        const iconid = `#icon-${name}`;
        const href = inline ? iconid : `${iconsprites}${iconid}`;
        let px = 16;
        switch (size) {
            case "medium":
                px = 24;
                break;
        }
        if (size === "auto") {
            return `<svg class="icon icon--${name}" role="img" ${rest}>
                    <title>${name}</title>
                    <use href="${href}"></use>
                </svg>`;
        } else {
            return `<svg class="icon icon--${name} icon_${size}" role="img" width="${px}" height="${px}" ${rest}>
                    <title>${name}</title>
                    <use href="${href}"></use>
                </svg>`;
        }
    },
    iconsprites: function () {
        const iconsprites = `${__dirname}/../../dist/assets/icons/icons.sprite.svg`;
        const data = fs.readFileSync(iconsprites, (err, data) => {
            if (err) {
                throw new Error(err);
            }
        });
        return `
        <div class="nodispsvg">
            ${data}
        </div>
        `;
    },
};
