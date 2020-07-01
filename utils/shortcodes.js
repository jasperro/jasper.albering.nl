module.exports = {
    icon: function (name, size = "medium") {
        let px = 24;
        switch (size) {
            case "small":
                px = 16;
                break;
        }
        if (size === "auto") {
            return `<svg class="icon icon--${name}" role="img" aria-hidden="true">
                    <use xlink:href="#icon-${name}"></use>
                </svg>`;
        } else {
            return `<svg class="icon icon--${name} icon_${size}" role="img" aria-hidden="true" width="${px}" height="${px}">
                    <use xlink:href="#icon-${name}"></use>
                </svg>`;
        }
    },
};
