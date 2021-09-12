const iconShortcode = require("../../utils/shortcodes").icon;
const imageShortcode = require("../../utils/shortcodes").image;

module.exports = async (title, description, imgUrl, icons, actionhtml = "") =>
    `
        <div class="transition-shadow rounded-xl shadow-sm hover:shadow-xl bg-bgel dark:bg-bgel-dark p-5 flex justify-between flex-col">
        <div>
            ${
                imgUrl
                    ? await imageShortcode("object-cover h-48", imgUrl, title)
                    : ""
            }
                      

                 </div>

                 <p class="font-semibold text-xl pt-4">${title}</p>
                 <p class="pt-1">${description}</p>
                 <div class="flex mt-4 justify-between">
                 <div class="mt-2">${icons
                     .map((i) => `${iconShortcode(i)}`)
                     .join("")}</div>
                 <div class="mt-2">${actionhtml}</div>
                 </div>
        </div>
`;
