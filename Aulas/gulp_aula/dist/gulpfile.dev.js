"use strict";

var gulp = require('gulp');

var imagemin = require('gulp-imagemin');

gulp.task('mensagem', function () {
  return console.log('A danki eh top!');
});
gulp.task('copiarHTML', function () {
  gulp.src('src/*.html').pipe(gulp.dest('destino'));
});
gulp.task('default', function () {
  return console.log('Hey');
});
gulp.task('diminuirImagem', function () {
  gulp.src('src/*').pipe(imagemin()).pipe(gulp.dest('dist'));
});