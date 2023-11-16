import { resolve as _resolve } from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin } from 'webpack';

interface EnvVariables {
    mode: 'development' | 'production'
}

export default (env: EnvVariables)=> ({
    mode: env.mode ?? 'development',
    entry: _resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: _resolve(__dirname, 'build'),
        filename: '[name].[contenthash]-bundle.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: _resolve(__dirname, 'public', 'index.html')
        }),
        new ProgressPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
})