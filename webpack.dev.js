var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: "./src/index",
    output: {
        path: __dirname + '/src',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css") },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!sass")},
            //{ test: /\.js$/,exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    },
    plugins: [
    	// 根据模版生成html
        new HtmlWebpackPlugin({
            title: 'demo',
            template: './src/index.temp.html',
        }),
        // 分离css
        new ExtractTextPlugin("styles.css"),
        // 优化js
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false,  // 是否输出注释
          },
          compress: {
            warnings: false
          }
        }),
        // 打开浏览器
  		new OpenBrowserPlugin({ url: 'http://localhost:9999' })
    ]
};