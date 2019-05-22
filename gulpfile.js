
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

var paths = {
    styles: {
        // By using styles/**/*.scss we're telling gulp to check all folders for any scss file
        src: ['src/scss/*.scss', 
        // Source of scss files of bootstrap and font-awesome
        'node_modules/bootstrap/scss/bootstrap.scss'],
        // Compiled scss files will go here (destination)
        dest: 'src/css'
    }
    ,scripts: {
        //Source of js files of bootstrap , popper.js and jquery
        src:['node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/popper.js/dist/popper.min.js',
        'node_modules/jquery/dist/jquery.min.js'],
        // Compiled js files will go here (destination)
        dest: 'src/js'
    }
    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
};

function style() {
    return gulp
        .src(paths.styles.src)
        // Initialize sourcemaps before compilation starts
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        // Use postcss with autoprefixer and compress the compiled file using cssnano
        .pipe(postcss([autoprefixer(), cssnano()]))
        // rename styles after minifying
        .pipe(rename({suffix: '.min'}))
        // Now add/write the sourcemaps
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream());
}

function script() {
    return gulp 
        .src(paths.scripts.src)
        .pipe(gulp.dest(paths.scripts.dest))
}

// A simple task to reload the page
function reload() {
    browserSync.reload();
}

// Add browsersync initialization at the start of the watch task
function watch() {
    browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        server: {
            baseDir: "./src"
        }
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
    });
    gulp.watch(paths.styles.src, style);
    gulp.watch(paths.scripts.src, script);
    // We should tell gulp which files to watch to trigger the reload
    // This can be html or whatever you're using to develop your website
    // Note -- you can obviously add the path to the Paths object
    //gulp.watch("src/*.html", reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
}
 
// We don't have to expose the reload function
// It's currently only useful in other functions

    
// Don't forget to expose the task!
exports.watch = watch

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style

// Run 'gulp style' to run style task
exports.style = style
// Run 'gulp script to run script task'
exports.script = script

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.parallel(style, script, watch);
 
/*
 * You can still use `gulp.task` to expose tasks
 */
//gulp.task('build', build);
 
/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);




