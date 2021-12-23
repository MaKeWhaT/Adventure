"use strict";
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.tsx?$/],
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'chunk-vendors',
        },
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '/public/index.html'),
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            pages: path.resolve(__dirname, 'pages'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
};
//# sourceMappingURL=webpack.common.js.map