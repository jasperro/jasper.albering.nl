import { Lang } from "../locales";

export default {
	en: {
		"navigation.home": 'Home',
		"navigation.posts": 'Posts',
		"navigation.about": 'About',
		"navigation.cv": 'Resume',
	},
	nl: {
		"navigation.home": 'Startpagina',
		"navigation.about": 'Over Mij',
		"navigation.cv": 'CV',
	},
} as const satisfies Record<Lang, unknown>;
