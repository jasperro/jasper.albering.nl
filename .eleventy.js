const { DateTime } = require("luxon");
var paths = require('./paths');
const markdownIt = require("markdown-it");
const markdownItResponsive = require('@gerhobbelt/markdown-it-responsive');
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLLL yyyy");
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('dd-LL-yyyy');
  });

  eleventyConfig.addFilter("dateComparison", (dateObj, compareWith)=> {
    return DateTime.fromJSDate(dateObj) < DateTime.fromISO(compareWith)
  })

  eleventyConfig.addFilter("imgSuffix", (imgStr, suffix)=> {
    const i = imgStr.lastIndexOf('.');
    const imgPath = imgStr.substring(0, i);
    const ext = imgStr.substring(i + 1);
    return `${imgPath}-${suffix}.${ext}`;
  })

  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getAllSorted().filter(function (item) {
      return item.inputPath.match(/^\.\/src\/_site\/blog\//) !== null;
    });
  });

  const options = {
    html: true,
    breaks: true,
    linkify: true,
  };

  const mirOptions = {
    responsive: {
      'srcset': {
        '*': [ {
          width: 320,
          rename: {
            suffix: '-small'
          }
        }, {
          width: 640,
          rename: {
            suffix: '-medium'
          }
        } ]
      },
      'sizes': {
        '*': '(min-width: 36em) 33.3vw, 100vw'
      }
    }
  };

  eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItResponsive, mirOptions));

  return {
    templateFormats: ["html", "njk", "md"],
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: `${paths.srcdir}/_site`,
      output: paths.outdir,
      data: "_data",
      includes: "_includes"
    },
  };
};
