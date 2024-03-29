import Button from "@src/components/Button.astro";

export default {
    info: `
    <p>Ik werk graag met allerlei soorten technologie.
      Mijn focus ligt op webontwikkeling,
      maar daarnaast sleutel ik vooral aan Linux, domotica, netwerken en een beetje elektronica.</p>
      <p>Momenteel studeer ik Informatica aan de Universiteit Utrecht.</p>
        `,
    workedwith: "Ik heb ervaring met o.a.",
    projects: "Een paar van mijn projecten",
    contactHeader: "Laten we praten, stuur een bericht",
    contactName: "Jouw naam",
    contactMail: "Jouw e-mailadres",
    contactMessage: "Jouw bericht",
    submit: "Verstuur",
    sendMail: `Stuur een mailtje naar <a href="mailto:jasper@albering.nl">jasper@albering.nl</a>`,
    projectlist: {
        /*wereldwinkel: {
            title: "Wereldwinkel Nijkerk",
            description:
                "Ik heb een nieuwe website gemaakt voor Wereldwinkel Nijkerk met een zelfgemaakt wordpress-thema die de laatste Facebook-posts laadt.",
            actioncomponent: [
                Button,
                {
                    text: "Bekijk op GitHub",
                    icon: "github",
                    href: "https://github.com/jasperro/wereldwinkelnijkerk",
                },
            ],
        },*/
        eggsimulator: {
            title: "Eisimulator",
            description:
                "Een spel gemaakt in Godot waar je een moeilijk bestuurbaar ei door verschillende parcours moet leiden",
            actioncomponent: [
                Button,
                {
                    text: "Bekijk op GitHub",
                    icon: "github",
                    href: "https://github.com/jasperro/egg-simulator",
                    variant: "github",
                },
            ],
        },
        lifier: {
            description:
                "Maak je leven een spel door XP te behalen door het halen van doelen. Op het web, android en iOS met React Native.",
            actioncomponent: [
                Button,
                {
                    text: "Bekijk op GitHub",
                    icon: "github",
                    href: "https://github.com/jasperro/Lifier",
                    variant: "github",
                },
            ],
        },
    },
};
