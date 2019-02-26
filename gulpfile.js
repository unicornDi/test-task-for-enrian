var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();

gulp.task('pug', function() {
    return gulp.src('source/pug/pages/index-page/*.pug')
    .pipe(pug({
        pretty:true
    }))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('sass', function() {
    return gulp.src('source/sass/style.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('server', function () {
    browserSync.init({
      server: 'public/',
      notify: false,
      open: true,
      cors: true,
      ui: false
    });

    gulp.watch('source/pug/**/*.pug' , gulp.series('pug'));
    gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('sass'));
});

gulp.task("copy", function () {
    return gulp.src([
    "source/fonts/**/*.{eot,ttf,woff,woff2}" 
     ], {
       base: "source"
     })
     .pipe(gulp.dest("public"));
   });
gulp.task('start', gulp.series('copy', 'pug','sass','server'));
