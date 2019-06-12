const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/js/grid.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs/js')
    },
    module: {
        rules: [
            {
                test: /\.jpeg$/,
                use: 'url-loader?mimetype=image/jpeg'
            },
            /* { // regular css files
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1',
                }),
            },*/
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    /* plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: 'dist/[name].bundle.css',
            allChunks: true,
        }),
    ], */
    mode: 'development'
};

