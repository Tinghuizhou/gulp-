/**
 * Created by F on 2017/7/15.
 */
var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('copy', function () {
    //console.log('hello world');
    gulp.src("code/index.html")
        .pipe(gulp.dest("dist/"));
});
gulp.task('dist', function () {
    gulp.watch("code/index.html", ['copy']);
    gulp.watch("style/*.less", ['style']);
});
var cssnano = require('gulp-cssnano');
gulp.task('style', function () {
    gulp.src('style/*.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest("dist/css/"));
});
var browserSync = require("browser-sync").create();
gulp.task("serve", function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
});