import { resolve as _resolve, join as _join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { ProgressPlugin } from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import type { Configuration } from 'webpack'

interface EnvVariables {
  mode: 'development' | 'production'
  port: number
}

export default (env: EnvVariables): Configuration & DevServerConfiguration => {
  const isDev = env.mode === 'development'

  return {
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
      isDev ? new ProgressPlugin() : undefined
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
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev
      ? {
          static: {
            directory: _join(__dirname, 'public')
          },
          port: env.port ?? 3000,
          open: true
        }
      : undefined
  }
}
