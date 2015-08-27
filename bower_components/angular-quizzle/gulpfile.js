var gulp = require('gulp');
var config = require('./gulp.config.js')();
var $ = require('gulp-load-plugins')({lazy:true});

gulp.task('build-watch', ['build'], function () {
	return gulp.watch('src/*', ['build']);
})
gulp.task('build', ['concat-js', 'concat-css'])

gulp.task('concat-js', ['templates'], function (){
	return gulp.src(config.js)
		.pipe($.order(config.order))
		.pipe($.concat(config.moduleName+'.js'))
		.pipe(gulp.dest('dist'));
})

gulp.task('concat-css', function () {
	return gulp.src(config.css)
		.pipe($.concat(config.moduleName+'.css'))
		.pipe(gulp.dest('dist'));
})

gulp.task('templates', function () {
	return gulp.src(config.html)
		.pipe($.angularTemplatecache({standalone:true}))
		.pipe(gulp.dest('src'));
})

function inject(src, label, order) {
    var options = {read: false};
    if (label) {
        options.name = 'inject:' + label;
    }

    return $.inject(orderSrc(src, order), options);
}