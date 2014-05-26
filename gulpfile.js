var buildFolder = './Build/'
        , gulp = require('gulp')
        , fs = require('fs')
        , rename = require('gulp-rename')
        , coffee = require("gulp-coffee")
        , concat = require("gulp-concat")
        , header = require("gulp-header")
        , jshint = require("gulp-jshint")
        , coffeelint = require("gulp-coffeelint")
        , minifyCss = require("gulp-minify-css")
        , minifyHtml = require("gulp-minify-html")
        , sass = require("gulp-sass")
        , less = require("gulp-less")
        , uglify = require("gulp-uglify")
        , watch = require("gulp-watch");

// Get version using NodeJs file system
var getVersion = function () {
    return fs.readFileSync('Version');
};

// Get copyright using NodeJs file system
var getCopyright = function () {
    return fs.readFileSync('Copyright');
};

// Get copyright using NodeJs file system
var getCopyrightVersion = function () {
    return fs.readFileSync('CopyrightVersion');
};

// Run All tasks one by one
gulp.task('default', ['compile-coffee'
            , 'compile-less'
            , 'compile-sass'
            , 'minify-css'
            , 'minify-html'
            , 'minify-js'
            , 'concat'
            , 'concat-copyright'
            , 'concat-copyright-version'
            , 'jsLint'
            , 'coffeeLint'
            , 'bundle-one'
            , 'rename'
]);

// Compile CoffeeScript
gulp.task('compile-coffee', function () {
    gulp.src('./CoffeeScript/one.coffee')
            .pipe(coffee())
            .pipe(gulp.dest(buildFolder + 'compile-coffee'));
});

// Compile Less
gulp.task('compile-less', function () {
    gulp.src('./Less/one.less')
            .pipe(less())
            .pipe(gulp.dest(buildFolder + 'compile-less'));
});

// Compile Sass
gulp.task('compile-sass', function () {
    gulp.src('./Sass/one.sass')
            .pipe(sass())
            .pipe(gulp.dest(buildFolder + 'compile-sass'));
});

// Minify Css
gulp.task('minify-css', function () {
    gulp.src('./Css/one.css')
            .pipe(minifyCss())
            .pipe(gulp.dest(buildFolder + 'minify-css'));
});

// Minify HTML
gulp.task('minify-html', function () {
    gulp.src('./Html/*.html')
            .pipe(minifyHtml())
            .pipe(gulp.dest(buildFolder + 'minify-html'));
});

// Minify JavaScript
gulp.task('minify-js', function () {
    gulp.src('./JavaScript/*.js')
            .pipe(uglify())
            .pipe(gulp.dest(buildFolder + 'minify-js'));
});

// Concat JavaScript
gulp.task('concat', function () {
    gulp.src('./JavaScript/*.js')
            .pipe(concat('concat.js'))
            .pipe(gulp.dest(buildFolder + 'concat'));
});

// Concat JavaScript and Add Copyright
gulp.task('concat-copyright', function () {
    gulp.src('./JavaScript/*.js')
            .pipe(concat('concat-copyright.js'))
            .pipe(header(getCopyright()))
            .pipe(gulp.dest(buildFolder + 'concat'));
});

// Concat JavaScript and Add Copyright + Version
gulp.task('concat-copyright-version', function () {
    gulp.src('./JavaScript/*.js')
            .pipe(concat('concat-copyright-version.js'))
            .pipe(header(getCopyrightVersion(), {version: getVersion()}))
            .pipe(gulp.dest(buildFolder + 'concat'));
});

// Lint JavaScript
gulp.task('jsLint', function () {
    gulp.src('./JavaScript/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter());
});

// Lint CoffeeScript
gulp.task('coffeeLint', function () {
    gulp.src('./CoffeeScript/*.coffee')
            .pipe(coffeelint())
            .pipe(coffeelint.reporter());
});

// Compile CoffeeScript and rename it
gulp.task('rename', function () {
    gulp.src('./CoffeeScript/one.coffee')
            .pipe(coffee())
            .pipe(rename('renamed.js'))
            .pipe(gulp.dest(buildFolder + 'compile-coffee'));
});

// bundleOne.js: Lint, Compile, Concat and minify JavaScript + Add Copyright and Version
gulp.task('bundle-one', function () {
    gulp.src('./CoffeeScript/*.coffee')
            .pipe(coffeelint()) // lint files
            .pipe(coffeelint.reporter('fail')) // make sure the task fails if not compliant
            .pipe(concat('bundleOne.js')) // concat files
            .pipe(coffee()) // compile coffee
            .pipe(uglify()) // minify files
            .pipe(header(getCopyrightVersion(), {version: getVersion()})) // Add the copyright
            .pipe(gulp.dest(buildFolder + 'bundle')); // Dump the result
});

gulp.task('watch-coffeescript', function () {
    watch({glob: './CoffeeScript/*.coffee'}, function (files) {
        gulp.start('compile-coffee');
    });
});