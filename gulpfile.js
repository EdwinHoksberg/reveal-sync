'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    exec = require('child_process').exec,
    browserSync = require('browser-sync').create();

var options = {
    slidesDirectory: './slides/',
    outputDirectory: './build/',
};

gulp.task('build', function() {
    return gulp.src(options.slidesDirectory + '*.md')
        .pipe(concat('slides.md'))
        .pipe(gulp.dest(options.outputDirectory));
});

gulp.task('build-watch', ['build'], function() {
    browserSync.reload();
});

gulp.task('watch', function() {
    browserSync.init({
        ui: false,
        proxy: 'http://localhost:1948/slides.md'
    });

    exec('reveal-md ' + options.outputDirectory + 'slides.md --disableAutoOpen')

    gulp.watch(options.slidesDirectory + '*.md', ['build-watch']);
});

