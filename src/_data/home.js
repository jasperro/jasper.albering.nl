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
    <p>Ik ben 17 jaar oud en altijd wel een fan geweest van computers. Er is altijd wel iets interessants geweest aan een mysterieus apparaat dat van alles kan. Deze interesse is met mij gebleven, en nu wil ik er iets mee doen. Het is altijd leuk om iets te bekijken op het eerste gezicht, en dan te kijken wat daar nou achter zit, wat laat het draaien?</p>
    <p>Open source, React, Vue.js, Linux en Home Automation zijn waar ik mij in specialiseer, maar alles in de technologie heeft mijn interesse.</p>
        `,
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
    <p> I am 17 years old and have always loved computers. There has always been something interesting about a mysterious device that can do anything. This interest has remained with me, and now I want to do something with it. It's always nice to see something at first glance, and then see what's behind it, what makes it work? </p>
    <p> Open source, React, Vue.js, Linux and Home Automation are what I specialize in, but everything in technology has my interest. </p>
        `,
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
