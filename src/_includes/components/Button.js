const iconShortcode = require("../../utils/shortcodes").icon;

module.exports = (text, icon, href = "#") => `
<a href="${href}" class="py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">${iconShortcode(
    icon
)}&nbsp${text}</a>
`;
