var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var connect = require('gulp-connect');


//TASKS

gulp.task('lint', function(){
	return gulp.src('app/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('sass', function(){
     return gulp.src(['app/**/*.scss', '!app/sass/_*.scss'])
         .pipe(concat('angularProject.scss'))
         .pipe(sass({outputStyle:'expanded'}))
         .pipe(gulp.dest('dist/css'))
         .pipe(connect.reload());
});


gulp.task('scripts',function(){
	return gulp.src('app/**/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

gulp.task('html', function(){
	gulp.src('./*.html')
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('app/**/*.js',['lint','scripts']);
	gulp.watch('app/**/*.scss',['sass']);
	gulp.watch('*.html',['html']);
	gulp.watch('dist/**/*.*', ['livereload']);
});

gulp.task('livereload', function() {
  gulp.src('dist/**/*.*')
    .pipe(connect.reload());
});

gulp.task('connect', function(){
	connect.server({
		port:9600,
		livereload:true
	});
});

gulp.task('default', ['lint', 'sass', 'scripts']);
gulp.task('serve', ['default', 'connect', 'watch']);

