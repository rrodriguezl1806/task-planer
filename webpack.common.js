const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = function (isProduction) {
    return {
        entry: {
            "bundle": path.resolve(__dirname, 'src/index.js'),
            // "callback": path.resolve(__dirname, 'src/callback.js'),
            // "logout": path.resolve(__dirname, 'src/logout.js'),
            // "silentRefresh": path.resolve(__dirname, 'src/silentRefresh.js'),
        },
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: '[name].js'
        },
        // target: 'web',
        // resolve: {
        //     extensions: ['.js'],
        //     alias: {
        //         'serviceworker-webpack-plugin/lib': path.resolve(__dirname, './src'),
        //     },
        // },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: "html-loader"
                    }]
                },
                {
                    test: /\.css$/,
                    use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
                },
                {
                    test: /\.sass$/,
                    use: [
                        { loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader' },
                        { loader: 'css-loader' },
                        {
                            loader: 'sass-loader', options: {}
                        },
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        { loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader' },
                        { loader: 'css-loader' },
                        {
                            loader: 'less-loader', options: {
                                modifyVars: {
                                    // 'footer-font-size': '14px',
                                    // // 'footer-line-height': '@line-height-base',
                                    // 'footter-padding-top': '24px',
                                    // 'footter-padding-left': '50px',
                                    // // 'layout-footer-padding': '@footter-padding-top @footter-padding-left',
                                    // // 'footter-height': '@footter-padding-top * 2 + @footer-font-size * @footer-line-height',
                                    // // LIST
                                    // 'background-list-header': '#fff',
                                    // 'position-list-header': 'sticky',
                                    // 'zindex-list-header': '1',
                                    // // 'background-list-footer': '@background-list-header',
                                    // // 'position-list-footer': '@position-list-header',
                                    // 'zindex-list-footer': '1',
                                    // // COLLAPSE
                                    // // 'collapse-header-bg': '@layout-header-background',
                                    // // Layout
                                    // 'border-radius-base': '0',
                                    // 'layout-content-padding': '5px 15px',
                                },
                                javascriptEnabled: true,
                            },
                        },
                    ]
                },
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 1000000,
                            fallback: 'file-loader',
                            name: 'images/[name].[hash].[ext]',
                        }
                    }
                },
            ]
        },
    }
}