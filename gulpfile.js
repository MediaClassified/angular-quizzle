var gulp = require('gulp');
var config = require('./gulp.config.js')();
var $ = require('gulp-load-plugins')({lazy:true});


gulp.task('build', ['concat-js', 'concat-css'])

gulp.task('concat-js', function (){
	return gulp.src(config.module)
		.pipe(inject(config.js))
		.pipe(gulp.dest('dist'));
})

gulp.task('concat-css', function () {

})

function inject(src, label, order) {
    var options = {read: false};
    if (label) {
        options.name = 'inject:' + label;
    }

    return $.inject(orderSrc(src, order), options);
}

function orderSrc (src, order) {
    //order = order || ['**/*'];
    return gulp
        .src(src)
        .pipe($.if(order, $.order(order)));
}
