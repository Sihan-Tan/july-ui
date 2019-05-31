const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const utils = require('./utils')
const commonConfig = require('./webpack.base.config')
const config = require('../config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Components = require('../components.json')

process.env.NODE_ENV = 'production'

const configuration = merge(commonConfig, {
    entry: Components,
    output: {
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        filename: path.posix.join('', '[name]/[name].js'),
        chunkFilename: path.posix.join('', '[name]/[name].js'),
        libraryTarget: 'umd'
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
        new CleanWebpackPlugin(['dist']),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warning: false
                }
            },
            sourceMap: config.build.productionSourceMap,
            parallel: true
        })
    ]
})

module.exports = configuration