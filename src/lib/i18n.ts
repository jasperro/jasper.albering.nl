import { getRelativeLocaleUrl } from 'astro:i18n';
import { DEFAULT_LOCALE, Lang, LOCALES } from './locales';
import translations from './translations';

/**
 * Type for the multilingual object
 * @example
 * { en: "Hello", ja: "こんにちは", ... }
 */
export type Multilingual<T = string> = { [key in Lang]?: T } & { [DEFAULT_LOCALE]: T };

/**
 * Helper to get the translation function
 * @param - The current language
 * @returns - The translation function
 */
export function useTranslations(lang: Lang) {
	return {
		t: function t<T = string>(multilingual: Multilingual<T> | string): T | string {
			if (typeof multilingual === 'string')
				return multilingual as string;
			else
				return multilingual[lang] || multilingual[DEFAULT_LOCALE];
		},
		tKey: function tKey(key: keyof typeof translations[typeof DEFAULT_LOCALE]) {
			return translations[lang][key] || translations[DEFAULT_LOCALE][key];
		}
	};
}

/**
 * Helper to get corresponding path list for all locales
 * @param url - The current URL object
 * @returns - The list of locale paths
 */
export function getLocalePaths(url: URL): LocalePath[] {
	return Object.keys(LOCALES).map((lang) => {
		return {
			lang: lang as Lang,
			path: getRelativeLocaleUrl(
				lang,
				url.pathname.replace(/^\/[a-zA-Z-]+/, '')
			),
		};
	});
}
type LocalePath = {
	lang: Lang;
	path: string;
};

/**
 * Helper to get locale parms for Astro's `getStaticPaths` function
 * @returns - The list of locale params
 * @see https://docs.astro.build/en/guides/routing/#dynamic-routes
 */
export const localeParams = Object.keys(LOCALES).map((lang) => ({
	params: { lang },
}));
