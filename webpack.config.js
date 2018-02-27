let webpack = require('webpack');
let path = require('path');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
];

plugins.push(new BundleAnalyzerPlugin());

module.exports = {
    context: srcPath,
    target: 'web',

    entry: {
        client: ['babel-polyfill', 'react-hot-loader/patch', `${srcPath}/client.js`],
        vendor: ['react', 'react-dom', 'react-router-dom'],
    },

    output: {
        path: distPath,
        filename: '[name].js',
        publicPath: '/assets/',
    },
    plugins,
    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js', '.json'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: ['react-hot-loader/webpack', 'babel-loader'],
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jsx$/,
                use: ['react-hot-loader/webpack', 'babel-loader'],
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: [/node_modules/, /public/],
            }
        ]
    },
    devtool: 'source-map'
};


