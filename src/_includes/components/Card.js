const { icon } = require("../../utils/shortcodes");

module.exports = (title, description, imgUrl, icons) => `
        <div class="rounded-xl w-80 min-w-72 shadow-sm hover:shadow-xl bg-bgel p-5 m-4">
            ${imgUrl ? `<img class="w-full" src="${imgUrl}"/>` : ""}
            <div>
                 <h3 class="font-semibold text-xl pt-2">${title}</h3>
                 <p class="pt-1">${description}</p>
                 <div class="mt-2">${icons
                     .map((i) => `${icon(i)}`)
                     .join("")}</div>
            </div>
        </div>
`;
