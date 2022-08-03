const _ = require("lodash");

const Button = require("../_includes/components/Button");

const defaults = {
    title: "Jasper Albering",
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
    info: `
    <p>Ik werk graag met allerlei soorten technologie.
      Mijn focus ligt op webontwikkeling,
      maar daarnaast sleutel ik vooral aan Linux, domotica, netwerken en een beetje elektronica.</p>
      <p>Momenteel studeer ik Informatica aan de Universiteit Utrecht.</p>
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
    info: `<p>I enjoy working with all kinds of technology.
     My main focus is on web development,
     but besides that I mostly tinker with Linux, home automation, networking and a little bit of electronics.</p>
     <p>Currently, I am studying Computer Science at Utrecht University.</p>`,
    workedwith: "I have experience with",
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
