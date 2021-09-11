const svgSprite = require("gulp-svg-sprite");
const gulp = require("gulp");
const spawn = require("child_process").spawn;
const fs = require("fs");
const favicons = require("gulp-favicons");

const isProd = process.env.ELEVENTY_ENV === "production";

const svgSpriteConfig = {
    mode: {
        inline: true,
        symbol: {
            dest: "icons",
            sprite: "icons.sprite.svg",
            example: false,
        },
    },
    shape: {
        transform: ["svgo"],
        id: {
            generator: "icon-%s",
        },
    },
    svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
    },
};

gulp.task("icons", function () {
    return gulp
        .src("./src/assets/icons/*.svg")
        .pipe(svgSprite(svgSpriteConfig))
        .pipe(gulp.dest("./dist/assets/", { overwrite: true }));
});

gulp.task("build", gulp.parallel("icons"));

gulp.task("reload", async function () {
    return browserSync.reload();
});

gulp.task("eleventy:serve", async function () {
    let server = spawn("eleventy", ["--serve"]);
    server.stdout.on("data", function (data) {
        process.stdout.write(data);
    });
    return;
});

gulp.task("favicons", function () {
    return gulp
        .src("./src/assets/images/svg/iconlight.svg")
        .pipe(
            favicons({
                appName: "Jasper Albering's Website",
                appShortName: "Jasper Albering",
                appDescription: "This is Jasper Albering's Website",
                developerName: "Jasper Albering",
                developerURL: "https://jasper.albering.nl/",
                background: "#008b8b",
                theme_color: "#008b8b",
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
            })
        )
        .pipe(gulp.dest("./src/assets/images/favicon/", { overwrite: true }));
});

gulp.task("watch", async function () {
    gulp.watch("./src/assets/icons/**/*", gulp.parallel("icons"));
    gulp.watch("./src/**/(*.js|*.svg)", async () => {
        return fs.writeFileSync(
            "./.eleventy.js",
            fs.readFileSync("./.eleventy.js"),
            () => {}
        );
    });
});

gulp.task(
    "dev",
    gulp.parallel(gulp.series("icons", "eleventy:serve"), "watch")
);
