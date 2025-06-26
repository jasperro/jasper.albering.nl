import Button from '@src/components/Button.astro';
import { Lang } from '../locales';
import { useTranslations } from '../i18n';

export type Project = {
	title: string;
	description: string;
	imgUrl: Promise<typeof import('*.png')>;
	icons: string[];
	actioncomponent: [typeof Button, { text: string; icon: string; href: string; variant: string }];
};

const projects = (lang: Lang): Record<string, Project> => {
	const { t } = useTranslations(lang);
	return {
		/*wereldwinkel: {
            title: "World Shop Nijkerk",
            description:
                "I made a new website for the World Shop Nijkerk with a custom wordpress theme that loads the latest Facebook posts.",
            actioncomponent: [
                Button,
                {
                    text: "View on GitHub",
                    icon: "github",
                    href: "https://github.com/jasperro/wereldwinkelnijkerk",
                    variant: "github",
                },
            ],
            imgUrl "/assets/images/nieuwwwnijkerk.jpg",
            icons: ["wordpress"],
        },*/
		eggsimulator: {
			title: 'Egg simulator',
			description: t({
				en: 'A game made in Godot where you try to control a rolling egg in different parkour maps.',
				nl: 'Een spel gemaakt in Godot waar je een moeilijk bestuurbaar ei door verschillende parcours moet leiden',
			}),
			imgUrl: import('@src/assets/images/eggsimulator.png'),
			icons: ['godot'],
			actioncomponent: [
				Button,
				{
					text: 'View on GitHub',
					icon: 'github',
					href: 'https://github.com/jasperro/egg-simulator',
					variant: 'github',
				},
			],
		},
		lifier: {
			title: 'Lifier',
			description:
				'Make your life a game by earning XP through different skills and goals. On web, android and iOS with React Native.',
			imgUrl: import('@src/assets/images/lifier.png'),
			icons: ['react'],
			actioncomponent: [
				Button,
				{
					text: 'View on GitHub',
					icon: 'github',
					href: 'https://github.com/jasperro/Lifier',
					variant: 'github',
				},
			],
		},
	} as const;
};

export default projects;