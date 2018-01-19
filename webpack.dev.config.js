const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: [
            path.resolve(__dirname, 'src/js/index.js'),
            path.resolve(__dirname, 'src/css/style.scss')
        ],
        dynamic: path.resolve(__dirname, 'src/js/dynamic.js')
    },
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'js/[name].js',
        publicPath: '/dist/',
        chunkFilename: 'js/[id].[chunkhash].js',
    },
    devtool: "source-map",
    devServer: {
        port: 9009,
        contentBase: path.resolve(__dirname, 'public')
    },
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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"],
                        plugins: ["syntax-dynamic-import"]
                    }
                }
            },
            {
                test: /\.twig$/,
                use: {
                    loader: "twig-loader",
                    options: {
                        node: { fs: "empty" }
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public/dist'], {
            exclude: ['lib']
        }),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest')
        })
    ]
};