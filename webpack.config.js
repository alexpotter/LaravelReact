import webpack from 'webpack'
import path from 'path'
import { fileURLToPath } from 'url'

const isProduction = process.env.NODE_ENV === 'production'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        app: ['./resources/react/App.tsx'],
        admin: ['./resources/react/Admin.tsx'],
    },
		target: 'web',
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        publicPath: isProduction
            ?  path.resolve(__dirname, 'public/assets')
            : 'http://localhost:8080/assets/',
        filename: '[name].js',
    },
		devServer: {
			devMiddleware: {
				publicPath: '/assets',
			},
			static: {
				directory: path.join(__dirname, 'public'),
			},
			host: 'localhost',
			hot: true,
			port: 8080,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			allowedHosts: 'all'
		},
    resolve: {
        modules: ['node_modules'],
        alias: {
            admin: path.resolve(__dirname, 'client/admin'),
            app: path.resolve(__dirname, 'client/app'),
        },
				extensions: ['.tsx', '.ts', '.js'],
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
								test: /\.tsx?$/,
								use: 'ts-loader',
								exclude: /node_modules/,
						},
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
}

if (!isProduction) {
    // config.module.rules.unshift({
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     enforce: 'pre',
    //     use: {
    //         loader: 'eslint-loader',
    //     },
    // })
}

export default config
