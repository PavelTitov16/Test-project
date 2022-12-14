const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) =>
    !isDev
        ? {}
        : {
              devServer: {
                  open: true,
                  port: 8080,
                  static: path.join(__dirname, 'assets'),
              },
          };

module.exports = ({ development }) => ({
    mode: development ? 'development' : 'production',
    devtool: development ? 'inline-source-map' : false,
    entry: {
        main: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext]',
    },
    module: {
        rules: [
            {
                test: /\.[tj]s$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'assets',
                    noErrorOnMissing: true,
                },
            ],
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new EslingPlugin({ extensions: 'ts' }),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    ...devServer(development),
});
