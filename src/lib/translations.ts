import tHomeEN from "./translations/en/home";
import tHomeNL from "./translations/nl/home";
import tPostsEN from "./translations/en/posts";
import tPostsNL from "./translations/nl/posts";
import _ from "lodash";

const tNavigationEN = {
    home: "Home",
    posts: "Posts",
    about: "About me",
    cv: "CV",
};

const tNavigationNL = {
    home: "Startpagina",
    about: "Over Mij",
};

const translations: {
    home: { [key: string]: typeof tHomeEN };
    posts: { [key: string]: typeof tPostsEN };
    navigation: { [key: string]: typeof tNavigationEN };
} = {
    home: {
        en: tHomeEN,
        nl: _.merge({}, tHomeEN, tHomeNL),
    },
    posts: {
        en: tPostsEN,
        nl: _.merge({}, tPostsEN, tPostsNL),
    },
    navigation: {
        en: tNavigationEN,
        nl: _.merge({}, tNavigationEN, tNavigationNL),
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
