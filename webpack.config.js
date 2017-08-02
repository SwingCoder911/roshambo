var sass = require('node-sass');

const exportConfig = {
    entry: {
        "app": "./app/js/main.js"    
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
        publicPath: "/",
        sourceMapFilename: '[name].map',
        chunkFilename: "[id].bundle.js"
    },
    module:{
        loaders: [
        {
            test:/\.jsx?$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        },
        {
            test: /\.css$/,
            loader: "css-loader"
        },
        {
            test: /\.html$/,
            loader: "file-loader?name=[name].[ext]",
        },
        {
            test: /\.(jpe?g|png)$/,
            loader: "file-loader?name=[path][name].[ext]"
        },
        {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader'
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }
        ]
    }
};
module.exports = exportConfig;