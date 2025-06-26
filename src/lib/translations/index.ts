import { Lang } from "../locales";

export default {
	en: {
		"navigation.home": 'Home',
		"navigation.posts": 'Posts',
		"navigation.about": 'About',
		"navigation.cv": 'CV',
	},
	nl: {
		"navigation.home": 'Startpagina',
		"navigation.about": 'Over Mij',
	},
} as const satisfies Record<Lang, unknown>;
