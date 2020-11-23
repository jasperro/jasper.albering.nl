module.exports = {
    icon: function (name, size = "small", rest) {
        const iconsprites = "/assets/icons/icons.sprite.svg";
        const iconid = `#icon-${name}`;
        const href = `${iconsprites}${iconid}`;
        let px = 16;
        switch (size) {
            case "medium":
                px = 24;
                break;
        }
        if (size === "auto") {
            return `<svg class="icon icon--${name}" role="img" ${rest}>
                    <title>${name}</title>
                    <use xlink:href="${href}"></use>
                </svg>`;
        } else {
            return `<svg class="icon icon--${name} icon_${size}" role="img" width="${px}" height="${px}" ${rest}>
                    <title>${name}</title>
                    <use xlink:href="${href}"></use>
                </svg>`;
        }
    },
};
