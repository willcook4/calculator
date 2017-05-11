const gulp     	 = require('gulp');
const sass 		 	 = require('gulp-sass');
const cleanCSS 	 = require('gulp-clean-css');
const flatten		 = require('gulp-flatten');
const plumber    = require('gulp-plumber');
const nodemon    = require('gulp-nodemon');

const src  = 'src';
const dist = 'public';

gulp.task('nodemon', () => {
  return nodemon({
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('sass', () => {
  return gulp.src(`${src}/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({ compatibility: 'ie8'}))
    .pipe(plumber())
    .pipe(flatten())
    .pipe(gulp.dest(`${dist}/css/`));
});

gulp.task('watch', () => {
  gulp.watch(`${src}/**/*.scss`, ['sass']);
});

gulp.task('default', [
  'sass',
  'watch',
  'nodemon'
]);
