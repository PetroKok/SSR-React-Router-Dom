const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

let webpack = require('webpack');
let path = require('path');
const srcPath = path.resolve(__dirname, 'src');
const publicPath = path.resolve(__dirname, 'public/bundle');

module.exports = {
    entry: ['babel-polyfill', 'react-hot-loader/patch', `${srcPath}/client.js`],
    output: {
        path: publicPath,
        filename: '[name].js',
        publicPath: '/public/bundle/',
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js', '.json'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: ['react-hot-loader/webpack', 'babel-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /\.jsx$/,
                use: ['react-hot-loader/webpack', 'babel-loader'],
                exclude: [/node_modules/]
            },
            {

                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }),
                // test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                // exclude: [/node_modules/],
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin({
            name: 'vendor',
            filename: 'vendor.[chunkhash].js',
            minChunks(module) {
                return module.context &&
                    module.context.indexOf('node_modules') >= 0;
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash].css',
            allChunks: true
        }),
        new StyleExtHtmlWebpackPlugin({
            minify: true
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new ExtractTextPlugin("stylesheets/myStyles.css")
    ],
    devtool: 'source-map'
};


