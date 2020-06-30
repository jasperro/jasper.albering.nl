const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");

const filters = require("./utils/filters.js");
const transforms = require("./utils/transforms.js");
const shortcodes = require("./utils/shortcodes.js");
const iconsprite = require("./utils/iconsprite.js");
const moment = require("moment");

module.exports = function (config) {
    // Plugins
    config.addPlugin(pluginRss);
    config.addPlugin(pluginNavigation);

    // Filters
    Object.keys(filters).forEach((filterName) => {
        config.addFilter(filterName, filters[filterName]);
    });

    // Transforms
    Object.keys(transforms).forEach((transformName) => {
        config.addTransform(transformName, transforms[transformName]);
    });

    // Shortcodes
    Object.keys(shortcodes).forEach((shortcodeName) => {
        config.addShortcode(shortcodeName, shortcodes[shortcodeName]);
    });

    config.addCollection("posts_en", function (collection) {
        return collection.getFilteredByGlob("./src/posts/en/*.md");
    });
    config.addCollection("posts_nl", function (collection) {
        return collection.getFilteredByGlob("./src/posts/nl/*.md");
    });
    config.addCollection("posts", function (collection) {
        return collection.getFilteredByGlob("./src/posts/*/*.md");
    });
    config.addCollection("pages_en", function (collection) {
        return collection.getFilteredByGlob("./src/pages/en/*");
    });
    config.addCollection("pages_nl", function (collection) {
        return collection.getFilteredByGlob("./src/pages/nl/*");
    });

    // Icon Sprite
    config.addNunjucksAsyncShortcode("iconsprite", iconsprite);

    config.addNunjucksFilter("date", function (date, format, locale) {
        locale = locale ? locale : "en";
        moment.locale(locale);
        return moment(date).format(format);
    });

    // Asset Watch Targets
    config.addWatchTarget("./src/assets");

    // Markdown
    config.setLibrary(
        "md",
        markdownIt({
            html: true,
            breaks: true,
            linkify: true,
            typographer: true,
        })
    );

    // Layouts
    config.addLayoutAlias("base", "base.njk");
    config.addLayoutAlias("post", "post.njk");

    // Pass-through files
    config.addPassthroughCopy("src/robots.txt");
    config.addPassthroughCopy("src/site.webmanifest");
    config.addPassthroughCopy("src/assets/images");
    config.addPassthroughCopy("src/assets/fonts");

    // Deep-Merge
    config.setDataDeepMerge(true);

    // Base Config
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
        },
        templateFormats: ["njk", "md", "11ty.js"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
    };
};
