const translations = {
    home: {
        en: {
            ...(await import("./translations/en/home.js")).default,
        },
        nl: {
            ...(await import("./translations/nl/home.js")).default,
        },
    },
    posts: {
        en: {
            ...(await import("./translations/en/posts.js")).default,
        },
        nl: {
            ...(await import("./translations/nl/posts.js")).default,
        },
    },
};

export function t(page, locale = "en") {
    return translations[page][locale];
}

export const locale = "en";
