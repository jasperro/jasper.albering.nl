const { icon } = require("../../utils/shortcodes");

module.exports = (title, description, imgUrl, icons) => `
        <div class="rounded-xl w-80 min-w-48 shadow-sm hover:shadow-xl bg-bgel p-5 m-4">
            <img class="w-full" src="${imgUrl}"/>
            <div>
                 <h3 class="font-semibold text-xl">${title}</h3>
                 <p>${description}</p>
                 ${icons.map((i) => `${icon(i)}`).join("")}
            </div>
        </div>
`;
