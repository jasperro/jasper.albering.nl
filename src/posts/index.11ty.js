exports.data = {
    pagination: {
        data: "locales",
        size: 1,
        alias: "current",
    },
    translationKey: "posters",
    layout: "base",
    locale: "en",
    eleventyComputed: {
        locale: (data) => data.pagination.items[0],
    },
    permalink: (data) => `posts/${data.current}/index.html`,
};

exports.render = function (data) {
    return `${data.locale}`;
};
