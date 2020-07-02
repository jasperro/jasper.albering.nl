export const setLang = function setUserLanguage(language = "en") {
    document.cookie = `nf_lang=${language}; secure; path=/`;
};
