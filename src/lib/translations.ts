import tHomeEN from "./translations/en/home";
import tHomeNL from "./translations/nl/home";
import tPostsEN from "./translations/en/posts";
import tPostsNL from "./translations/nl/posts";
import _ from "lodash";

const tNavigationEN = {
    home: "Home",
    posts: "Posts",
    about: "About",
    cv: "CV",
};

const tNavigationNL = {
    home: "Startpagina",
    about: "Over Mij",
};

const translations = {
    en: {
        home: tHomeEN,
        posts: tPostsEN,
        navigation: tNavigationEN,
    },
    nl: {
        home: tHomeNL,
        posts: tPostsNL,
        navigation: tNavigationNL,
    },
};

export const fallbackLocale = "en";

(Object.keys(translations) as Array<keyof typeof translations>).forEach((l) => {
    if (l !== fallbackLocale)
        translations[l] = _.merge(
            {},
            translations[fallbackLocale],
            translations[l]
        );
});

export const t = translations as {
    [key in keyof typeof knownLocales]: typeof translations["en"];
};

export const knownLocales = {
    en: "English",
    nl: "Nederlands",
};

export function getLanguageFromFilename(path: string) {
    const parts = path.split("/");
    const locale = parts[parts.length - 2];
    return locale;
}

export type LocaleCode = keyof typeof knownLocales;

export type AlternativeLanguageMap = { [k in LocaleCode]: string };
