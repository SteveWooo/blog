const path = require("path");;
const webpack = require('webpack');

module.exports = {
	entry: "./js/index.js",
	output: {
		publicPath:"/dist/",
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer : {
		port : 8081
	},
	module : {
		rules : [{
			test : /\.css$/,
			use : ["style-loader", "css-loader"]
		}]
	}
}