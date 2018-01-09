const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const webpack = require('webpack');

module.exports = {
    entry: {
        main: [
            path.resolve(__dirname, 'src/js/index.js'),
            path.resolve(__dirname, 'src/css/style.scss')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'js/[name].js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            }
        ]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // }),
        new ExtractTextPlugin("css/[name].css")
    ]
};

