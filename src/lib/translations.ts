import tHomeEN from "./translations/en/home";
import tHomeNL from "./translations/nl/home";
import tPostsEN from "./translations/en/posts";
import tPostsNL from "./translations/nl/posts";

const translations: {
    home: { [key: string]: typeof tHomeEN };
    posts: { [key: string]: typeof tPostsEN };
} = {
    home: {
        en: tHomeEN,
        nl: tHomeNL,
    },
    posts: {
        en: tPostsEN,
        nl: tPostsNL,
    },
};

export const locale = "en";

export const knownLocales: { [locale: string]: string } = {
    en: "English",
    nl: "Nederlands",
};

export function t(page: keyof typeof translations, locale: "en" | "nl" = "en") {
    return translations[page][locale];
}

export function getLanguageFromFilename(path: string) {
    const parts = path.split("/");
    const locale = parts[parts.length - 2];
    return locale;
}
