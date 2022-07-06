const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const dayjs = require("dayjs");
require("dayjs/locale/nl");

const filters = require("./src/utils/filters.js");
const transforms = require("./src/utils/transforms.js");
const shortcodes = require("./src/utils/shortcodes.js");

const componentsDir = "./src/_includes/components";

module.exports = function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginNavigation);

    // Filters
    Object.keys(filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, filters[filterName]);
    });

    // Transforms
    Object.keys(transforms).forEach((transformName) => {
        eleventyConfig.addTransform(transformName, transforms[transformName]);
    });

    // Shortcodes
    Object.keys(shortcodes).forEach((shortcodeName) => {
        if (
            Object.getPrototypeOf(shortcodes[shortcodeName]).constructor
                .name === "AsyncFunction"
        ) {
            eleventyConfig.addNunjucksAsyncShortcode(
                shortcodeName,
                shortcodes[shortcodeName]
            );
            eleventyConfig.addLiquidShortcode(
                shortcodeName,
                shortcodes[shortcodeName]
            );
            eleventyConfig.addJavaScriptFunction(
                shortcodeName,
                shortcodes[shortcodeName]
            );
        } else {
            eleventyConfig.addShortcode(
                shortcodeName,
                shortcodes[shortcodeName]
            );
        }
    });

    eleventyConfig.addNunjucksAsyncShortcode(
        "Card",
        require(`./${componentsDir}/Card.js`)
    );

    eleventyConfig.addCollection("posts_en", function (collection) {
        return collection.getFilteredByGlob("./src/posts/en/*.md");
    });
    eleventyConfig.addCollection("posts_nl", function (collection) {
        return collection.getFilteredByGlob("./src/posts/nl/*.md");
    });
    eleventyConfig.addCollection("posts", function (collection) {
        return collection.getFilteredByGlob("./src/posts/*/*.md");
    });
    eleventyConfig.addCollection("pages_en", function (collection) {
        return collection.getFilteredByGlob("./src/pages/en/*");
    });
    eleventyConfig.addCollection("pages_nl", function (collection) {
        return collection.getFilteredByGlob("./src/pages/nl/*");
    });

    // Asset and utils watch Targets
    //eleventyConfig.addWatchTarget("./src/assets/**/*.pcss");
    eleventyConfig.addWatchTarget("**/*.js");
    eleventyConfig.addWatchTarget("**/*.svg");

    const markdown = new markdownIt({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true,
    });
    eleventyConfig.setBrowserSyncConfig({
        files: ["dist/assets/main.css"],
    });

    // Markdown
    eleventyConfig.setLibrary("md", markdown);

    eleventyConfig.addPairedShortcode("markdown", (content) => {
        return markdown.render(content);
    });

    // Layouts
    eleventyConfig.addLayoutAlias("base", "base.njk");
    eleventyConfig.addLayoutAlias("post", "post.njk");

    // Pass-through files
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/site.webmanifest");
    eleventyConfig.addPassthroughCopy("src/assets/images", { expand: true });
    eleventyConfig.addPassthroughCopy(
        {
            "node_modules/@fontsource/lexend": "assets/lexend",
        },
        { expand: true }
    );

    // Deep-Merge
    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.setWatchJavaScriptDependencies(true);

    // Base config
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
