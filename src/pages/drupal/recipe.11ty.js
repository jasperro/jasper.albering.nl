const imageShortcode = require("../../utils/shortcodes").image;

const slugify = require("slugify");
exports.data = {
    pagination: {
        data: "recipes",
        size: 1,
        alias: "recipe",
    },
    permalink: (data) =>
        `drupal/recipes/${slugify(data.recipe.title, { lower: true })}/`,
    layout: "post",
};

exports.render = function (data) {
    const content = data.recipe.content;
    return `<h1>${data.recipe.title}</h1>
${content}
De temperatuur voor het bakken is: ${data.recipe.temperature} ˚C
Is het lekker?
${data.recipe.tasty ? "Ja, het is super lekker" : "Nee, echt niet"}`;
};
