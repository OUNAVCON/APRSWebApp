var gulp = require("gulp");
var babel = require("gulp-babel");
var del = require('del');



gulp.task('default', ['clean','build']);

gulp.task('build', function () {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['dist/**/*']);
});

gulp.watch('src/**/*.js', ['default']);