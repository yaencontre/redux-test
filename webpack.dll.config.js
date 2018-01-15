const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        modules: [
            'redux',
            'babel-polyfill'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'lib/[name].js',
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "[name]",
            path: path.join(__dirname, "[name]-manifest.json")
        })
    ]
};

