var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('./src/Assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/Assets/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./src/Assets/sass/**/*.scss',['styles']);
});