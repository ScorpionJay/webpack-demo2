# webpack demo

##　install :smile:
~~~sh
npm install webpack --save-dev
~~~


Content Base
The webpack-dev-server will serve the files in the current directory, unless you configure a specific content base.

$ webpack-dev-server --content-base build/


webpack-dev-server --content-base src

There are some additional options:

--content-base <file/directory/url/port>: base path for the content.
--quiet: don’t output anything to the console.
--no-info: suppress boring information.
--colors: add some colors to the output.
--no-colors: don’t use colors in the output.
--compress: use gzip compression.
--host <hostname/ip>: hostname or IP. 0.0.0.0 binds to all hosts.
--port <number>: port.
--inline: embed the webpack-dev-server runtime into the bundle.
--hot: adds the HotModuleReplacementPlugin and switch the server to hot mode. Note: make sure you don’t add HotModuleReplacementPlugin twice.
--hot --inline also adds the webpack/hot/dev-server entry.
--public: overrides the host and port used in --inline mode for the client (useful for a VM or Docker).
--lazy: no watching, compiles on request (cannot be combined with --hot).
--https: serves webpack-dev-server over HTTPS Protocol. Includes a self-signed certificate that is used when serving the requests.
--cert, --cacert, --key: Paths the certificate files.
--open: opens the url in default browser (for webpack-dev-server versions > 2.0).
--history-api-fallback: enables support for history API fallback.
--client-log-level: controls the console log messages shown in the browser. Use error, warning, info or none.



## loader
npm install style-loader --save-dev
### [css loader](https://github.com/webpack/css-loader)

https://github.com/jtangelder/sass-loader

// install
npm install sass-loader node-sass webpack --save-dev

// loader
{ test: /\.scss$/, loaders: ["style", "css", "sass"]}

es6 react

// install
npm install babel-loader babel-core babel-preset-es2015 --save-dev

// loader 
{ test: /\.js$/,exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }


https://github.com/ampedandwired/html-webpack-plugin


打开浏览器
https://github.com/baldore/open-browser-webpack-plugin

npm install  open-browser-webpack-plugin --sae-dev


webpack 分离css

npm install  extract-text-webpack-plugin --save-dev

---
-	install
-	css、sass
-	html
-	open browser
-	js优化（删除注释 压缩，verder，common）
-	prod
-	icon
-	flag
-	image


# How to run :+1:
~~~sh
npm run dev
npm run build
~~~