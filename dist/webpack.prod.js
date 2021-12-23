"use strict";
var merge = require('webpack-merge').merge;
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var common = require('./webpack.common');
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].[contenthash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin({ openAnalyzer: true }),
    ],
});
//# sourceMappingURL=webpack.prod.js.map