var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: '#source-map',
	entry: {
		main : './src/main.js',
		commons : ['react', 'react-dom']
	},
	output: {
	    path: path.resolve(__dirname, './dist'),
	    filename: 'main.js',
	    publicPath: '/dist/'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader:'babel',
				query: {
			        presets: ['react']
			   	}
			},
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
			{ test: /\.(jpg|png|gif)$/, loader: 'file'}
			//loader: "file-loader?name=images/[hash].[ext]"
		]
	},
	plugins: [
		//提取公共js
	    new webpack.optimize.CommonsChunkPlugin({
	        name: "commons",
	        filename:"common.js"
	        //minChunks: Infinity
	    }),
	    //独立出css
	    new ExtractTextPlugin("style.css", {allChunks: true})
	]
}