var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders:[
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test:/\.css$/,
                loader: 'style!css?modules!postcss'//感叹号的作用在于使用同一文件能够使用不同类型的loader
            }
        ]
    },
    postcss: [
        require('autoprefixer') //调用autoprefixer插件
    ],
    plugins:[
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new  webpack.HotModuleReplacementPlugin()
    ],
    devtool: "eval-source-map",
    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 3000,
        hot:true
    }
}