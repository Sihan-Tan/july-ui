const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.base.config')
const config = require('../config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

process.env.NODE_ENV = 'production'

const configuration = merge(commonConfig, {
    devtool: 'source-map',
    entry: {
        app: './src/index.js'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        filename: 'july-ui.common.js',
        library: 'july-ui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['../lib']),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/utils/flexible/index.js'),
                to: path.resolve(__dirname, '../lib/flexible.[ext]'),
                ignore: ['.*']
            }
        ]),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warning: false,
                    drop_debugger: true,
                    drop_console: true
                }
            },
            sourceMap: config.build.productionSourceMap,
            parallel: true
        })
    ]
})

module.exports = configuration