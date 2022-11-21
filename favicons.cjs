const favicons = require("favicons");
const path = require("node:path");
const fs = require("fs");

const baseOutputDir = "./public/assets/images/favicon/";

favicons(
    "./src/assets/images/svg/iconlight.svg",
    {
        appName: "Jasper Albering's Website",
        appShortName: "Jasper Albering",
        appDescription: "This is Jasper Albering's Website",
        developerName: "Jasper Albering",
        developerURL: "https://jasper.albering.nl/",
        background: "#c6ece9",
        theme_color: "#007a72",
        path: "/assets/images/favicon/",
        url: "https://jasper.albering.nl/",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        version: 1.0,
        logging: false,
        html: "index.html",
        pipeHTML: true,
        replace: true,
        icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            coast: true,
            favicons: true,
            firefox: false,
            windows: true,
            yandex: true,
        },
    },
    (error, response) => {
        if (error) {
            return console.log(error.message);
        }
        console.log(response.images);
        response.images.forEach((file) => {
            fs.writeFile(
                path.join(baseOutputDir, file.name),
                file.contents,
                (error) => {
                    if (error) return console.log(error);
                }
            );
        });
        console.log(response.files);
        console.log(response.html);
    }
);
