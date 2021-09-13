const _ = require("lodash");

const Button = require("../_includes/components/Button");

const defaults = {
    projectlist: {
        lifier: {
            imageurl: "/assets/images/lifier.png",
            icons: ["react"],
            title: "Lifier",
        },
        /*wereldwinkel: {
            imageurl: "/assets/images/nieuwwwnijkerk.jpg",
            icons: ["wordpress"],
        },*/
        eggsimulator: {
            imageurl: "/assets/images/eggsimulator.png",
            icons: ["godot"],
        },
    },
};

const nl = {
    title: "Ik ben Jasper",
    description: "Ik leer graag nieuwe dingen",
    info: `
    Ik ben 18 jaar oud en ik ben altijd al een grote techneut geweest. Toen ik zes jaar oud was had ik een website gemaakt met tekeningen, foto's en spelletjes. Een techneut ben ik nu nog zeker. Ik blijf mijn grenzen steeds verleggen door elke keer wat nieuws te leren. Dingen zoals React Native, Typescript, interface design en home automation met Home Assistant ben ik momenteel mee bezig. Programmeren vind ik leuk omdat het nooit stil staat, er zijn altijd nieuwe en creatieve manieren om je vaardigheden te verbeteren.
        `,
    workedwith: "Ik heb ervaring met o.a.",
    projects: "Een paar van mijn projecten",
    about: "Over mij",
    contactHeader: "Laten we praten, stuur een bericht",
    contactName: "Jouw naam",
    contactMail: "Jouw e-mailadres",
    contactMessage: "Jouw bericht",
    submit: "Verstuur",
    formComment:
        '// Formulier wordt verzonden met <a class="underline text-primary" href="https://www.netlify.com/">netlify</a>.',
    projectlist: {
        /*wereldwinkel: {
            title: "Wereldwinkel Nijkerk",
            description:
                "Ik heb een nieuwe website gemaakt voor Wereldwinkel Nijkerk met een zelfgemaakt wordpress-thema die de laatste Facebook-posts laadt.",
            actionhtml: Button(
                "Bekijk op GitHub",
                "github",
                "https://github.com/jasperro/wereldwinkelnijkerk"
            ),
        },*/
        eggsimulator: {
            title: "Eisimulator",
            description:
                "Een spel gemaakt in Godot waar je een moeilijk bestuurbaar ei door verschillende parcours moet leiden",
            actionhtml: Button(
                "Bekijk op GitHub",
                "github",
                "https://github.com/jasperro/egg-simulator",
                (variant = "github")
            ),
        },
        lifier: {
            description:
                "Maak je leven een spel door XP te behalen door het halen van doelen. Op het web, android en iOS met React Native.",
            actionhtml: Button(
                "Bekijk op GitHub",
                "github",
                "https://github.com/jasperro/Lifier",
                (variant = "github")
            ),
        },
    },
};

const en = {
    title: "Hi, I'm Jasper",
    description: "I am a real <strong>techie</strong>",
    info: `
    I am 18 years old and I have always been very interested in technology. When I was six years old I made my first website with drawings, photos and games. I'm still definitely a techie. I keep pushing my boundaries by learning something new every time. I am currently working on things like React Native, Typescript, interface design and home automation with Home Assistant. I like programming because it never gets stale, there are always new and more creative ways to improve your skills.
        `,
    workedwith: "I have experience with:",
    projects: "Projects",
    about: "About me",
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
            actionhtml: Button(
                "View on GitHub",
                "github",
                "https://github.com/jasperro/wereldwinkelnijkerk"
            ),
        },*/
        eggsimulator: {
            title: "Egg simulator",
            description:
                "A game made in Godot where you try to control a rolling egg in different parkour maps.",
            actionhtml: Button(
                "View on GitHub",
                "github",
                "https://github.com/jasperro/egg-simulator",
                (variant = "github")
            ),
        },
        lifier: {
            description:
                "Make your life a game by earning XP through different skills and goals. On web, android and iOS with React Native.",
            actionhtml: Button(
                "View on GitHub",
                "github",
                "https://github.com/jasperro/Lifier",
                (variant = "github")
            ),
        },
    },
};

module.exports = {
    nl: _.merge({}, defaults, nl),
    en: _.merge({}, defaults, en),
};
