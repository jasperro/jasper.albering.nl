const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginLocalRespimg = require("eleventy-plugin-local-respimg");
const markdownIt = require("markdown-it");
const dayjs = require("dayjs");

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
        eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName]);
    });

    eleventyConfig.addShortcode("Card", require(`./${componentsDir}/Card.js`));

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

    eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
        locale = locale ? locale : "en";
        dayjs.locale(locale);
        return dayjs(date).format(format);
    });

    // Asset and utils watch Targets
    eleventyConfig.addWatchTarget("./src/assets");
    eleventyConfig.addWatchTarget("**/*.js");

    // Markdown
    eleventyConfig.setLibrary(
        "md",
        markdownIt({
            html: true,
            breaks: true,
            linkify: true,
            typographer: true,
        })
    );

    // Layouts
    eleventyConfig.addLayoutAlias("base", "base.njk");
    eleventyConfig.addLayoutAlias("post", "post.njk");

    // Pass-through files
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/site.webmanifest");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/assets/fonts");

    // Deep-Merge
    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.setWatchJavaScriptDependencies(true);

    // Image configuration
    eleventyConfig.addPlugin(pluginLocalRespimg, {
        folders: {
            source: "src", // Folder images are stored in
            output: "dist", // Folder images should be output to
        },
        images: {
            resize: {
                min: 250, // Minimum width to resize an image to
                max: 1500, // Maximum width to resize an image to
                step: 150, // Width difference between each resized image
            },
            gifToVideo: false, // Convert GIFs to MP4 videos
            sizes: "100vw", // Default image `sizes` attribute
            lazy: true, // Include `loading="lazy"` attribute for images
            watch: {
                src: "assets/images/**/*", // Glob of images that Eleventy should watch for changes to
            },
        },
    });
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
