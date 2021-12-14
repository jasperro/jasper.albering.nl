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
    Ik ben een techneut. Dat betekent altijd bezig zijn met verschillende projecten, gewoon lekker sleutelen aan van alles. Denk bijvoorbeeld aan het bouwen en "hacken" van kleine apparaatjes, en hun sensordata integreren in Home Assistant, het ontwerpen en bouwen van een applicatie, of gewoon iets anders interessants. Het is altijd leuk om gewoon een beetje rond te snuffelen op GitHub en te kijken wat er allemaal voor slims bedacht is. Technologie is zo interessant omdat het nooit stil staat, er zijn altijd nieuwe en creatieve manieren om echte problemen op te lossen.
<br><br>
Momenteel ben ik Computer Science aan het studeren aan de Universiteit Utrecht.
        `,
    workedwith: "Ik heb ervaring met o.a.",
    projects: "Een paar van mijn projecten",
    about: "Over mij",
    contactButton: "Contacteer mij",
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
    description: "I like to learn new things",
    info: `I'm a techie. That means always working on different projects, just tinkering with everything. Think for example building and "hacking" small devices, and integrating their sensor data into Home Assistant, designing and building applications, or just something else I think is interesting. It's always fun to just look around on GitHub and see what other people have thought up. Technology is so interesting because it never stands still, there are always new and creative ways to solve real problems.
<br><br>
I am currently studying Computer Science at Utrecht University.`,
    workedwith: "I have experience with",
    projects: "Projects",
    about: "About me",
    contactButton: "Contact me",
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
