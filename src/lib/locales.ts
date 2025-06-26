/**
 * User-defined locales list
 * @constant @readonly
 */
export const LOCALES = {
	en: {
		label: "English",
		lang: "en-US",
	},
	nl: {
		label: "Nederlands",
		lang: "nl-NL",
	},
} as const satisfies Record<string, LocaleConfig>;

type LocaleConfig = {
	readonly label: string;
	readonly lang?: string;
	readonly dir?: 'ltr' | 'rtl';
};

/**
 * Type for the language code
 * @example
 * "en" | "ja" | ...
 */
export type Lang = keyof typeof LOCALES;

/**
 * Default locale code
 * @constant @readonly
 */
export const DEFAULT_LOCALE = "en" as const satisfies Lang;