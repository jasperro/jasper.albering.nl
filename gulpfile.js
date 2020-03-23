var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");
browserSync = require("browser-sync").create();


var paths = {
    styles: {
        src: "src/scss/**/*.scss",
        dest: "css/"
    },
}

function style() {
    return (
        gulp
            .src(paths.styles.src)
            // Initialize sourcemaps before compilation starts
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            // Use postcss with autoprefixer and compress the compiled file using cssnano
            .pipe(postcss([autoprefixer(), cssnano()]))
            // Now add/write the sourcemaps
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.styles.dest))
    );
}

function reload() {
    browserSync.reload();
}


function watch() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

    gulp.watch(paths.styles.src, gulp.series(style, reload));
    gulp.watch("**/*.html", reload);

}

exports.build = style;
exports.watch = watch;
