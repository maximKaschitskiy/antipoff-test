const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    publicPath: "/",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 8080,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: 'url-loader'
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
