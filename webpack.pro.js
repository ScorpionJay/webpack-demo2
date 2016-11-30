var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require("path")

module.exports = {
    context: path.join(__dirname, "src"),
    cache:true,
    devtool: false,
    entry: {
        app: "./index",
        //vendor: ["jquery"]
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        'jquery': 'jQuery'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css") },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!sass")},
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015']
              }
            }
        ]
    },
    plugins: [
        // 根据模版生成html
        new HtmlWebpackPlugin({
            title: 'demo',
            template: './index.temp.html',
            minify:{ 
                removeComments : true,
                collapseWhitespace:true,
                removeAttributeQuotes:true
              }
        }),
        // 分离css
        new ExtractTextPlugin("styles.css"),
        // 分离库
        //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"),
        // 优化js
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false,  // 是否输出注释
          },
          compress: {
            warnings: false
          }
        }),
        new webpack.ProvidePlugin({
             // Automtically detect jQuery and $ as free var in modules
             // and inject the jquery library
             // This is required by many jquery plugins
             $: "jquery",
             jQuery: "jquery",
             //"window.jQuery": "jquery"
         }),
    ]
};