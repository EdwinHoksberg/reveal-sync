'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat-util'),
    exec = require('child_process').exec,
    browserSync = require('browser-sync').create(),
    watch = require('gulp-watch');

var options = {
    slidesDirectory: './slides',
    outputDirectory: './build'
};

gulp.task('watch', function() {
    browserSync.init({
        ui: false,
        proxy: 'http://localhost:1948/slides.md'
    });

    exec('reveal-md ' + options.outputDirectory + '/slides.md --disableAutoOpen');

    watch(options.slidesDirectory + '/**/*.md', function () {
        gulp.src(options.slidesDirectory + '/**/*.md')
            .pipe(concat('slides.md', { sep: '\r\n---\r\n' }))
            .pipe(gulp.dest(options.outputDirectory));

        browserSync.reload();
    });
});
