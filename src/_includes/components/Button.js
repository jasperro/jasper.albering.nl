const iconShortcode = require("../../utils/shortcodes").icon;

const getVariant = (variant) => {
    switch (variant) {
        case "github":
            return `bg-gray-800`;
        default:
            return `bg-primary`;
    }
};

module.exports = (text, icon, href = "#", variant = false) => `
    <a
        href="${href}"
        class="py-2 px-2 shadow-sm text-sm font-medium rounded-md text-white hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent ${getVariant(
            variant
        )}"
        >${(() => {
            if (icon) {
                return `${iconShortcode(icon)}&nbsp`;
            }
        })()}${text}
    </a>
`;
