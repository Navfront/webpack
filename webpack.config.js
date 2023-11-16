const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ProgressPlugin} = require('webpack')
module.exports = (env)=> ({
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash]-bundle.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new ProgressPlugin()
    ]
})