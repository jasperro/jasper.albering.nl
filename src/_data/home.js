const _ = require("lodash");

const defaults = {
    projectlist: {
        wereldwinkel: {
            imageurl: "/assets/images/nate-grant-QQ9LainS6tI-unsplash.jpg",
            icons: ["wordpress"],
        },
        eggsimulator: {
            imageurl: "/assets/images/nate-grant-QQ9LainS6tI-unsplash.jpg",
            icons: ["godot", "github"],
        },
        lifier: {
            imageurl: "/assets/images/nate-grant-QQ9LainS6tI-unsplash.jpg",
            icons: ["react", "github"],
            title: "Lifier",
        },
    },
};

const nl = {
    title: "Hoi, mijn naam is Jasper.",
    description: "Ik ben een echte <strong>techneut</strong>",
    info: `
    <p>Ik ben 17 jaar oud en ik ben altijd al een grote techneut geweest. Toen ik zes jaar oud was had ik al een website, waar tekeningen, foto's en spelletjes op stonden. Een techneut ben ik nu nog zeker. Ik blijf mijn grenzen steeds verleggen door elke keer wat nieuws te leren. Dingen zoals React Native, Typescript, interface design en home automation met Home Assistant ben ik momenteel mee bezig. Programmeren vind ik leuk omdat het nooit stil staat, er zijn altijd nieuwe en creatieve manieren om je vaardigheden te verbeteren.</p>
        `,
    workedwith: "Ik heb ervaring met:",
    projects: "Projecten",
    contactHeader:
        "Ik zou het leuk vinden om te chatten, stuur mij een bericht",
    contactName: "Jouw naam:",
    contactMail: "Jouw e-mailadres:",
    contactMessage: "Jouw bericht:",
    submit: "Verstuur",
    projectlist: {
        wereldwinkel: {
            title: "Wereldwinkel Nijkerk",
            description:
                "Ik heb een nieuwe website gemaakt voor Wereldwinkel Nijkerk met een zelfgemaakt wordpress-thema die de laatste Facebook-posts laadt.",
        },
        eggsimulator: {
            title: "Eisimulator",
            description:
                "Een spel gemaakt in Godot waar je een moeilijk bestuurbaar ei door verschillende parcours moet leiden",
        },
        lifier: {
            description:
                "Maak je leven een spel door XP te behalen door het halen van doelen. Op het web, android en iOS met React Native.",
        },
    },
};

const en = {
    title: "Hi, my name is Jasper.",
    description: "I am a real <strong>techie</strong>",
    info: `
    <p> I am 17 years old and I have always been a great techie. When I was six years old I already had a website with drawings, photos and games. I'm still definitely a techie. I keep pushing my boundaries by learning something new every time. I am currently working on things like React Native, Typescript, interface design and home automation with Home Assistant. I like programming because it never gets stale, there are always new and more creative ways to improve your skills. </p>
        `,
    workedwith: "I have experience with:",
    projects: "Projects",
    contactHeader: "I'd love to chat, send me a message",
    contactName: "Your name:",
    contactMail: "Your e-mail address:",
    contactMessage: "Your message:",
    submit: "Submit",
    projectlist: {
        wereldwinkel: {
            title: "World Shop Nijkerk",
            description:
                "I made a new website for the World Shop Nijkerk with a custom wordpress theme that loads the latest Facebook posts.",
        },
        eggsimulator: {
            title: "Egg simulator",
            description:
                "A game made in Godot where you try to control a rolling egg in different parkour maps.",
        },
        lifier: {
            description:
                "Make your life a game by earning XP through different skills and goals. On web, android and iOS with React Native.",
        },
    },
};

module.exports = {
    nl: _.merge({}, defaults, nl),
    en: _.merge({}, defaults, en),
};
