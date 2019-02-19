var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('source/sass/style.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});