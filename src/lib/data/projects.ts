import Button from "@src/components/Button.astro";
import { Lang } from "../locales";
import { useTranslations } from "../i18n";

export type Project = {
	title: string;
	description: string;
	tags: string[];
	icons: string[];
	actioncomponent: [
		typeof Button,
		{ text: string; icon: string; href: string; variant: string },
	];
};

const projects = (lang: Lang): Record<string, Project> => {
	const { t } = useTranslations(lang);
	return {
		dotfiles: {
			title: "Dotfiles (NixOS)",
			description: t({
				en: "Jasperro's NixOS/home-manager configurations for multiple hosts, self-hosting and full automation.",
				nl: "Jasperro's NixOS/home-manager configuraties voor meerdere hosts, self-hosting en volledige automatisering.",
			}),
			tags: ["Nix", "Linux"],
			icons: ["nix", "linux"],
			actioncomponent: [
				Button,
				{
					text: "View on GitHub",
					icon: "github",
					href: "https://github.com/jasperro/dotfiles",
					variant: "github",
				},
			],
		},
		website: {
			title: "jasper.albering.nl",
			description: t({
				en: "My personal portfolio and blog, built with Astro and Tailwind CSS.",
				nl: "Mijn persoonlijke portfolio en blog, gebouwd met Astro en Tailwind CSS.",
			}),
			tags: ["Astro", "TypeScript", "Tailwind CSS"],
			icons: ["astro", "language-typescript", "tailwind"],
			actioncomponent: [
				Button,
				{
					text: "View on GitHub",
					icon: "github",
					href: "https://github.com/jasperro/jasper.albering.nl",
					variant: "github",
				},
			],
		},
		dris: {
			title: "dris_rs",
			description: t({
				en: "A Rust and Svelte implementation of a DRIS (Dynamic Traveler Information System) using NeTEx and SIRI protocols.",
				nl: "Een DRIS (Dynamisch Reizigersinformatiesysteem) gebouwd met Rust en Svelte door gebruik van NeTEx en SIRI protocollen.",
			}),
			tags: ["Rust", "Svelte"],
			icons: ["language-rust", "svelte"],
			actioncomponent: [
				Button,
				{
					text: "View on GitHub",
					icon: "github",
					href: "https://github.com/jasperro/dris_rs",
					variant: "github",
				},
			],
		},
		gamakay: {
			title: "Gamakay Tool",
			description: t({
				en: "A Rust tool for Gamakay TK101 keyboard remapping and light effects management.",
				nl: "Een Rust tool voor het remappen van de Gamakay TK101 en het beheren van lichteffecten.",
			}),
			tags: ["Rust"],
			icons: ["language-rust"],
			actioncomponent: [
				Button,
				{
					text: "View on GitHub",
					icon: "github",
					href: "https://github.com/jasperro/gamakay_tool_rs",
					variant: "github",
				},
			],
		},
		lifier: {
			title: "Lifier",
			description: t({
				en: "An app to make your life easier by setting goals and completing tasks. Built with React Native and RxDB.",
				nl: "Een app om je leven makkelijker te maken door doelen te stellen en taken te voltooien. Gebouwd met React Native en RxDB.",
			}),
			tags: ["TypeScript", "React Native"],
			icons: ["react", "language-typescript"],
			actioncomponent: [
				Button,
				{
					text: "View on GitHub",
					icon: "github",
					href: "https://github.com/jasperro/Lifier",
					variant: "github",
				},
			],
		},
		checkr: {
			title: "Checkr",
			description: t({
				en: "An ESP32 scanner for Dutch public transport cards (OV-chipkaarten).",
				nl: "Een ESP32 scanner voor OV-chipkaarten.",
			}),
			tags: ["C++", "Arduino"],
			icons: ["language-cpp"],
			actioncomponent: [
				Button,
				{
					text: "View on GitHub",
					icon: "github",
					href: "https://github.com/jasperro/Checkr",
					variant: "github",
				},
			],
		},
		esplant: {
			title: "ESPlant",
			description: t({
				en: "An IoT automatic plant watering device using PlatformIO, C++ on a ESP32.",
				nl: "Een IoT apparaat om automatisch planten water te geven. Maakt gebruik van PlatformIO, C++ op een ESP32.",
			}),
			tags: ["C++", "PlatformIO"],
			icons: ["language-cpp"],
			actioncomponent: [
				Button,
				{
					text: "View on GitHub",
					icon: "github",
					href: "https://github.com/jasperro/esplant",
					variant: "github",
				},
			],
		},
		plantgestures: {
			title: "ESPlant Gestures",
			description: t({
				en: "An extension to the ESPlant project, adding gesture control using a gesture sensor and C++ on an ESP32.",
				nl: "Een uitbreiding op het ESPlant project, waarbij gebarenherkenning is toegevoegd met een gebarensensor en C++ op een ESP32.",
			}),
			tags: ["C++", "PlatformIO"],
			icons: ["language-cpp"],
			actioncomponent: [
				Button,
				{
					text: "View on GitHub",
					icon: "github",
					href: "https://github.com/jasperro/plantgestures",
					variant: "github",
				},
			],
		},
		verfris: {
			title: "Verfris",
			description: t({
				en: 'An "Interaction Technology freshener" built with Arduino and C++.',
				nl: 'Een "Interactietechnologie verfrisser" gebouwd met Arduino en C++.',
			}),
			tags: ["C++", "Arduino"],
			icons: ["language-cpp"],
			actioncomponent: [
				Button,
				{
					text: "View on GitHub",
					icon: "github",
					href: "https://github.com/jasperro/Verfris",
					variant: "github",
				},
			],
		},
		busboard: {
			title: "Busboard",
			description: t({
				en: "An ESP32-based display board for real-time bus departure information.",
				nl: "Een op ESP32 gebaseerd informatiebord voor realtime vertrektijden van bussen.",
			}),
			tags: ["C++", "Arduino"],
			icons: ["language-cpp"],
			actioncomponent: [
				Button,
				{
					text: "View on GitHub",
					icon: "github",
					href: "https://github.com/jasperro/busboard",
					variant: "github",
				},
			],
		},
		eggsimulator: {
			title: "Eggsimulator",
			description: t({
				en: "A game made in Godot, where you have to roll an egg down a obstacle course.",
				nl: "Een spel gemaakt in Godot, waarin je een ei over een parcours met obstakels moet rollen.",
			}),
			tags: ["Godot"],
			icons: ["godot"],
			actioncomponent: [
				Button,
				{
					text: "View on GitHub",
					icon: "github",
					href: "https://github.com/jasperro/egg-simulator",
					variant: "github",
				},
			],
		},
	} as const;
};

export default projects;
