var gulp = require('gulp');
var webpack = require('webpack-stream');//连接wenpack
var supervisor = require( "gulp-supervisor" ); //实时重启服务
var runSequence = require('run-sequence');//任务先后順序
var changed = require('gulp-changed');//过滤变动的文件
var plumber = require('gulp-plumber');//捕获处理任务中的错误
//var minimg = require('gulp-imagemin');//压缩图片

var config = require('./webpack.config.js');
var reactPath = 'src/**/*.js';
var scssPath = 'src/**/*.scss';
var imgPath = 'src/assets/img/*.*';
//webpack
gulp.task('webpack', function(){
	return gulp.src([reactPath, scssPath])
	.pipe(plumber())
	.pipe(changed(reactPath))
	.pipe(changed(scssPath))
	.pipe(webpack(config))
	.pipe(gulp.dest('./dist'))
})
//压缩图片
// gulp.task('min:img', function  () {
// 	gulp.src(imgPath)
// 	.pipe(changed(imgPath))
// 	.pipe(minimg())
// 	.pipe(gulp.dest('./dist/img'))
// });
//开启实时监视node服务
gulp.task('supervisor', function() {
	supervisor( "app.js", {
        watch: [ "src" ],
        ignore: [ "node_modules" ],
        extensions: [ "js scss" ],
        exec: "node"
    } );
});
//监视文件变化
gulp.task('watch',function (){
	gulp.watch(reactPath,['webpack']);
	gulp.watch([imgPath], ['min:img']);
});
//默认gulp task
gulp.task('default', function(callback){
	 runSequence(
	 	['webpack', 'watch'],
	 	'supervisor',
	 	callback
	 )
});