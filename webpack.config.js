const path = require('path');

const sourceDirectory = path.resolve(__dirname, 'src');
const distributionDirectory = path.resolve(__dirname, 'dist');

module.exports = {
    context: sourceDirectory,
    entry: './index.js',
    output: {
        publicPath: 'http://localhost:7000/',
        path: distributionDirectory,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                include: sourceDirectory,
                loader: 'ng-annotate?add=true!babel?presets[]=es2015'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(wav|mp3)$/,
                loader: 'file-loader'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
	]
    }
};
