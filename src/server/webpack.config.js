let webpack = require('webpack');
let path = require('path');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const srcPath = path.resolve(__dirname, 'src');
const publicPath = path.resolve(__dirname, 'public/bundle');

const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    })
];

// plugins.push(new BundleAnalyzerPlugin());

module.exports = {
    context: srcPath,
    target: 'web',

    entry: {
        client: ['babel-polyfill', 'react-hot-loader/patch', `${srcPath}/client.js`],
        vendor: ['react', 'react-dom', 'react-router-dom'],
    },

    output: {
        path: publicPath,
        filename: '[name].js',
        publicPath: '/public/bundle/',
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
                exclude: [/node_modules/]
            },
            {
                test: /\.jsx$/,
                use: ['react-hot-loader/webpack', 'babel-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: [/node_modules/],
            }
        ]
    },
    devtool: 'source-map'
};


