var gulp = require('gulp');
var webpack = require('webpack-stream');//连接wenpack
var supervisor = require( "gulp-supervisor" ); //实时重启服务
var runSequence = require('run-sequence');//任务先后順序
var changed = require('gulp-changed');//过滤变动的文件
var plumber = require('gulp-plumber');//捕获处理任务中的错误
var sass = require('gulp-sass');//编译sass
var imagemin = require('gulp-imagemin');//压缩img
var htmlmin = require('gulp-htmlmin');//压缩html

var config = require('./webpack.config.js');
var reactPath = 'src/**/*.jsx';
var imgPath = 'src/assets/img/*.*';
var sassPath = 'src/assets/scss/*.scss';
var fontPath = 'src/assets/fonts/*.*';
var htmlPath = 'src/*.html'
//webpack
gulp.task('webpack', function(){
	return gulp.src(reactPath)
	.pipe(plumber())
	.pipe(changed(reactPath))
	.pipe(webpack(config))
	.pipe(gulp.dest('./dist'))
})
//开启实时监视node服务
gulp.task('supervisor', function() {
	supervisor( "app.js", {
        watch: [ "src" ],
        ignore: [ "node_modules" ],
        extensions: [ "jsx js scss" ],
        exec: "node"
    } );
});
//sass
gulp.task('sass', function(){
	return gulp.src(sassPath)
	.pipe(plumber())
	.pipe(changed(sassPath))
	.pipe(sass({outputStyle:'expanded'}))
	.pipe(gulp.dest('./dist'))
})
//img
gulp.task('images', function(){
	return gulp.src(imgPath)
	.pipe(plumber())
	.pipe(changed(imgPath))
	.pipe(gulp.dest('./dist/img'))
})
//fonts
gulp.task('fonts', function(){
	return gulp.src(fontPath)
	.pipe(changed(fontPath))
	.pipe(gulp.dest('./dist/fonts'))
})
//html
gulp.task('html', function(){
	return gulp.src(htmlPath)
	.pipe(changed(htmlPath))
	.pipe(gulp.dest('./dist'))
})
//监视文件变化
gulp.task('watch',function (){
	gulp.watch(reactPath,['webpack']);
	gulp.watch(sassPath,['sass']);
	gulp.watch(imgPath,['images']);
	gulp.watch(fontPath,['fonts']);
});
//默认gulp task
gulp.task('default', function(callback){
	 runSequence(
	 	['webpack', 'sass', 'images', 'html', 'fonts', 'watch'],
	 	'supervisor',
	 	callback
	 )
});