var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var styleSRC = 'src/scss/style.scss';
var styleDIST = './dist/css';
var styleWatch = 'src/scss/**/*.scss';

gulp.task('style', function(){
    gulp.src(styleSRC)
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(styleDIST));
});

gulp.task('default', ['style']);

gulp.task('watch', ['default'], function(){
    gulp.watch(styleWatch, ['style']);
})