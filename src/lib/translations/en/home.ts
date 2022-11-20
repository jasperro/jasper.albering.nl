import Button from "@src/components/Button.astro";

export default {
    info: `<p>I enjoy working with all kinds of technology.
     My main focus is on web development,
     but besides that I mostly tinker with Linux, home automation, networking and a little bit of electronics.</p>
     <p>Currently, I am studying Computer Science at Utrecht University.</p>`,
    workedwith: "I have experience with",
    projects: "Projects",
    contactHeader: "I'd love to chat, send me a message",
    contactName: "Your name",
    contactMail: "Your e-mail address",
    contactMessage: "Your message",
    submit: "Submit",
    formComment:
        '// Form data is sent with <a class="underline text-primary" href="https://www.netlify.com/">netlify</a>.',
    projectlist: {
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
            title: "Egg simulator",
            description:
                "A game made in Godot where you try to control a rolling egg in different parkour maps.",
            imgUrl: import("../../../assets/images/eggsimulator.png"),
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
        lifier: {
            title: "Lifier",
            description:
                "Make your life a game by earning XP through different skills and goals. On web, android and iOS with React Native.",
            imgUrl: import("../../../assets/images/lifier.png"),
            icons: ["react"],
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
    },
};
