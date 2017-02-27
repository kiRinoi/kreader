var webpack = require('webpack')

module.exports = {
    entry: './src/entry.js',
    output: {
        path: __dirname,
        filename: './src/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.(png)|(jpg)$/, loader: "url-loader?limit=50000" }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by kiri')
    ]
}
