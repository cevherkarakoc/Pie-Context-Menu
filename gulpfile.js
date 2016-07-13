var gulp = require('gulp');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('default', ["minify-js","minify-css"]);

gulp.task('minify-js', function() {
  gulp.src('src/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('minify-css', function() {
    return gulp.src('src/*.css')
    .pipe(cleanCSS({compatibility: ''}))
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest('dist'));

});