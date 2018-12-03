const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

const webpackCommon = require('./webpack.common');

module.exports = {
    ...webpackCommon(true),
    plugins: [
        new HtmlWebPackPlugin({ minify: { removeComments: true, collapseWhitespace: true, }, chunks: ['bundle'], template: "./src/index.html", filename: "./index.html" }),
        // new HtmlWebPackPlugin({ minify: { removeComments: true, collapseWhitespace: true, }, chunks: ['callback'], template: "./src/callback.html", filename: "./callback.html" }),
        // new HtmlWebPackPlugin({ minify: { removeComments: true, collapseWhitespace: true, }, chunks: ['logout'], template: "./src/logout.html", filename: "./logout.html" }),
        // new HtmlWebPackPlugin({ minify: { removeComments: true, collapseWhitespace: true, }, chunks: ['silentRefresh'], template: "./src/silent-renew.html", filename: "./silent-renew.html" }),
        // new MiniCssExtractPlugin(),
        // new ServiceWorkerWebpackPlugin({ entry: path.join(__dirname, 'src/sw.js'), excludes: ['**/.*', '**/*.map', '*.html'], }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                // test: /\.js(\?.*)?$/i,
                cache: true,
                parallel: true,
                sourceMap: true,
                extractComments: true,
                uglifyOptions: {
                    output: {
                        comments: false, // remove comments
                    },
                    compress: {
                        unused: true,
                        dead_code: true, // big one--strip code that will never execute
                        warnings: false, // good for prod apps so users can't peek behind curtain
                        drop_debugger: true,
                        conditionals: true,
                        evaluate: true,
                        drop_console: true, // strips console statements
                        sequences: true,
                        booleans: true,
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};