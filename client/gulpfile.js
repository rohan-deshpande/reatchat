//UTIL
var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var print = require('gulp-print');

//CSS
var minify = require('gulp-minify-css');
var autoprefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('style', function () {
    return gulp.src('css/build.scss')
    .pipe(sass())
    .pipe(autoprefix())
    .pipe(concat('app.css'))
    .pipe(minify())
    .pipe(gulp.dest('css/'));
});


gulp.task('watch' , function() {
    gulp.watch('css/*' , ['style']);
});

gulp.task('default' , ['style' , 'watch']);
