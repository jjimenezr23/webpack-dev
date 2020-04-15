const htmlwebpackplugin = require('html-webpack-plugin');
const MiniCssExtractplugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const CpyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {

    mode: "development",
    optimization: {
        minimizer: [new OptimizeCssAssetsWebpackPlugin()]
    },
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractplugin.loader,
                    'css-loader'
                ]

            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize: false

                },

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false

                    }
                }]
            },
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: './src/index.html',
            filename: './index.html'

        }),
        new MiniCssExtractplugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CpyWebpackPlugin([
            { from: 'src/assets', to: 'assets/' }
        ]),
    ]


}