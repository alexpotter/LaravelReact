const path = require("path")
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV === 'production'

config = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        app: ['react-hot-loader/patch', './resources/react/app.js'],
        admin: ['react-hot-loader/patch', './resources/react/admin.js'],
    },
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        publicPath: isProduction
            ?  path.resolve(__dirname, 'public/assets')
            : 'http://localhost:8080/assets/',
        filename: '[name].js',
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            admin: path.resolve(__dirname, 'client/admin'),
            app: path.resolve(__dirname, 'client/app'),
        }
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}

module.exports = config
