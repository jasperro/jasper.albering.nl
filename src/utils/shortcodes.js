module.exports = {
    icon: function (name, size = "small") {
        let px = 16;
        switch (size) {
            case "medium":
                px = 24;
                break;
        }
        if (size === "auto") {
            return `<svg class="icon icon--${name}" role="img">
                    <title>${name}</title>
                    <use xlink:href="#icon-${name}"></use>
                </svg>`;
        } else {
            return `<svg class="icon icon--${name} icon_${size}" role="img" width="${px}" height="${px}">
                    <title>${name}</title>
                    <use xlink:href="#icon-${name}"></use>
                </svg>`;
        }
    },
};
