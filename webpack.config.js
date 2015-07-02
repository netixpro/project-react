/*global require, module*/

'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            materialize: path.resolve(__dirname, 'node_modules/materialize-css/bin/materialize.js'),
            trianglify: path.resolve(__dirname, 'bower_components/trianglify/lib/trianglify.js')
        }
    },

    entry: [
        'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        './app/index.jsx'
    ],

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],

    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'bundle.js'
    },

    // Source maps support (or 'inline-source-map' also works)
    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot','jsx?harmony'],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.scss?$/,
                loader: 'style!css!sass?includePaths[]=' + path.resolve(__dirname, 'node_modules/compass-mixins/lib')
            },
            {
                test: /\.woff(2)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)?$/,
                loader: "file"
            }
        ]
    }
};