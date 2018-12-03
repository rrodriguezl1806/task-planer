const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

const webpackCommon = require('./webpack.common');

module.exports = {
    ...webpackCommon(false),
    devServer: {
        port: 3000,
        publicPath: '/',
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        hot: true
    },
    plugins: [
        new HtmlWebPackPlugin({ chunks: ['bundle'], template: "./src/index.html", filename: "./index.html" }),
        // new HtmlWebPackPlugin({ chunks: ['callback'], template: "./src/callback.html", filename: "./callback.html" }),
        // new HtmlWebPackPlugin({ chunks: ['logout'], template: "./src/logout.html", filename: "./logout.html" }),
        // new HtmlWebPackPlugin({ chunks: ['silentRefresh'], template: "./src/silent-renew.html", filename: "./silent-renew.html" }),
        // new ServiceWorkerWebpackPlugin({ entry: path.join(__dirname, 'src/sw.js'), excludes: ['**/.*', '**/*.map', '*.html'], }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};