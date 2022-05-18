// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const webpack = require('webpack');

// module.exports = {
//     mode: 'production',
//     devtool: 'cheap-module-source-map',
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'revenue-widget-bundle.min.js',
//         chunkFilename: '[id].js',
//         publicPath: ''
//     },
//     resolve: {
//         extensions: ['.js', '.jsx']
//     },
//     optimization: {
//         minimizer: [new UglifyJsPlugin()],
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader',
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\.css$/,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader']
//             },
//             {
//                 test: /\.(png|jpe?g|gif|svg)$/,
//                 loader: 'url-loader'
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: __dirname + '/src/index.html',
//             filename: 'index.html',
//             inject: 'body'
//         }),
//         new webpack.optimize.UglifyJsPlugin(),
//         new MiniCssExtractPlugin("styles.css")
//     ]
// };

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
});