const path = require('path');

module.exports = {
    entry: './src/js/grid.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs')
    },
    module: {
        rules: [
            { test: /\.png$/, use: 'url-loader?mimetype=image/png' },
        ]
    }
};

