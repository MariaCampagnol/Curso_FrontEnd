const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('mensagem', () => {
    return console.log('A danki eh top!');
});

gulp.task('copiarHTML', () => {
    gulp.src('src/*.html').pipe(gulp.dest('destino'))
});

gulp.task('default', () => {
    return console.log('Hey');
});

gulp.task('diminuirImagem',()=>{
    gulp.src('src/*').pipe(imagemin()).pipe(gulp.dest('dist'));
});