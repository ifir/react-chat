var gulp = require('gulp');
var webpack = require('webpack-stream');//连接wenpack
var supervisor = require( "gulp-supervisor" ); //实时重启服务
var runSequence = require('run-sequence');//任务先后順序
var changed = require('gulp-changed');//过滤变动的文件
var plumber = require('gulp-plumber');//捕获处理任务中的错误

var config = require('./webpack.config.js');
var reactjspath = 'src/**/*.js';
var scsspath = 'src/**/*.scss';
//webpack
gulp.task('webpack', function(){
	return gulp.src(reactjspath)
	.pipe(plumber())
	.pipe(changed('./dist'))
	.pipe(webpack(config))
	.pipe(gulp.dest('./dist'))
})
//开启实时监视node服务
// gulp.task('nodemon', function() {
// 	nodemon({
// 		script: 'app.js',
// 		ext: 'js scss'
// 		/*env: {
// 			'NODE_ENV': 'development'
// 		}*/
// 	})
// });
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
	gulp.watch(reactjspath,['webpack']);
});
//默认gulp task
gulp.task('default', function(callback){
	 runSequence(
	 	['webpack', 'watch'],
	 	'supervisor',
	 	callback
	 )
});