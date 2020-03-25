var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");
browserSync = require("browser-sync").create();
responsive = require("gulp-responsive");
shell = require("gulp-shell");
clean = require("gulp-clean");
paths = require("./paths")

gulp.task('style', function () {
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
            .pipe(browserSync.stream())
    );
});

gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});

// Create smaller images for thumbnails etc.
gulp.task('images', function () {
    return gulp.src(paths.images.src)
        .pipe(responsive({
            '**/*': [{
                width: 320,
                rename: { suffix: '-small' },
            }, {
                width: 640,
                rename: { suffix: '-medium' },
            }, {
            }],
        }, {
            quality: 80,
            progressive: true,
            withMetadata: false,
            withoutEnlargement: true,
            errorOnUnusedImage: false,
            errorOnEnlargement: false
        }))
        .pipe(gulp.dest(paths.images.dest));
});

// Copy svg files to destination
gulp.task('svg', function () {
    return gulp.src(paths.svg.src)
        .pipe(gulp.dest(paths.svg.dest));
})

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: paths.outdir
        }
    });

    gulp.watch(paths.styles.src, gulp.series('style'));
    gulp.watch(paths.images.src, gulp.series('images'));
    gulp.watch(paths.svg.src, gulp.series('svg'));
    gulp.watch(`${paths.srcdir}/_site`, gulp.series('eleventy'));
});

// Make sure outdir exists
gulp.task('setup', function () {
    return gulp.src('*.*', { read: false })
        .pipe(gulp.dest(paths.outdir));
})

// Remove outdir
gulp.task('clean', function () {
    return gulp.src(paths.outdir, { read: false })
        .pipe(clean());
});

gulp.task('eleventy', shell.task('eleventy'));

gulp.task('build', gulp.series(
    'setup',
    'clean',
    'eleventy',
    gulp.parallel(
        'svg',
        'images',
        'style',
    )
));
