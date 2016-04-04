var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var serveStatic = require('serve-static');


//TASKS

gulp.task('lint', function(){
	return gulp.src('app/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('sass', function(){
     return gulp.src(['app/**/*.scss', '!app/sass/_*.scss'])
         .pipe(concat('angularProyect.scss'))
         .pipe(sass({outputStyle:'expanded'}))
         .pipe(gulp.dest('dist/css'))
         .pipe(connect.reload());
});


gulp.task('scripts',function(){
	return gulp.src('app/**/*.js')
		.pipe(concat('angularProyect.js'))
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
});

gulp.task('connect', function(){
	connect.server({
		port:9500,
		livereload:true
	});
});

gulp.task('serveStatic', function(){
	var app = connect();

	app.use(serveStatic("./angularjs"));
	app.listen(9500);
})

gulp.task('default', ['lint', 'sass', 'scripts']);
gulp.task('serve', ['default', 'connect', 'watch', 'serveStatic']);

