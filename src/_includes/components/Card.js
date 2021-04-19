const iconShortcode = require("../../utils/shortcodes").icon;

module.exports = (title, description, imgUrl, icons, actionhtml = "") => `
        <div class="rounded-xl w-80 lg:w-auto min-w-80 shadow-sm hover:shadow-xl bg-bgel p-5 flex justify-between flex-col">
        <div>
            ${
                imgUrl
                    ? `<img class="w-full" alt="${title}" src="${imgUrl}"/>`
                    : ""
            }

                 </div>

                 <h3 class="font-semibold text-xl pt-2">${title}</h3>
                 <p class="pt-1">${description}</p>
                 <div class="flex justify-between">
                 <div class="mt-2">${icons
                     .map((i) => `${iconShortcode(i)}`)
                     .join("")}</div>
                 <div class="mt-2">${actionhtml}</div>
                 </div>
        </div>
`;
