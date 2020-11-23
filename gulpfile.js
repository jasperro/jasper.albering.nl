const cssesc = require("cssesc");
const postcss = require("gulp-postcss");
const svgSprite = require("gulp-svg-sprite");
const gulp = require("gulp");

const isProd = process.env.ELEVENTY_ENV === "production";

gulp.task("css", function () {
    return gulp
        .src("./src/assets/styles/main.css")
        .pipe(postcss())
        .pipe(gulp.dest("./dist/assets/styles/"));
});

gulp.task("icons", function () {
    return gulp
        .src("./src/assets/icons/*.svg")
        .pipe(svgSprite(svgSpriteConfig))
        .pipe(gulp.dest("./dist/assets/"));
});

/*
  Watch folders for changess
*/
gulp.task("watch", function () {
    gulp.watch("./src/assets/styles/**/*.css", gulp.parallel("build"));
});

gulp.task("build", gulp.parallel("icons", "css"));

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

function renderError(error) {
    return `
        /* Error compiling stylesheet */
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }
        html,
        body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            font-family: monospace;
            font-size: 1.25rem;
            line-height:1.5;
        } 
        body::before { 
            content: ''; 
            background: #000;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: fixed;
        }
        body::after { 
            content: '${cssesc(error)}'; 
            white-space: pre;
            display: block;
            top: 0; 
            padding: 30px;
            margin: 50px;
            width: calc(100% - 100px);
            color:#721c24;
            background: #f8d7da;
            border: solid 2px red;
            position: fixed;
        }`;
}
