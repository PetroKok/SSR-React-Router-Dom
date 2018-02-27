const path = require('path');
let webpack = require('webpack');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    devtool: 'source-map',
    entry: './src/client.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: { presets: ["env"]  }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "/assets/"),
        compress: true,
        port: 9000
    }
};