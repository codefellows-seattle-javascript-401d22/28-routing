'use strict';

const HtmlPlugin = require('html-webpack-plugin');
// extracts html and compiles it into 1 html file
const ExtractPlugin = require('extract-text-webpack-plugin');
// extracts css out of inline style tags and css files into 1 file

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  // source mapping so errors render to non-built files and lines
  devServer: {
    historyApiFallback: true,
    // accounts for unregistered 404 routes, allows you to use the back button
    // enables client side routing
  },
  entry: `${__dirname}/src/main.js`,
  // entry point of my app
  output: {
    path: `${__dirname}/build`,
    // where build is compiled to
    publicPath: '/',
    // base path for all assets in my app; serves all files inside of public path as part of my appo
    filename: 'bundle-[hash].js',
    // names bundled files, all have same hash
  },
  plugins: [
    new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
    // specifies file to compile html into
    new ExtractPlugin('bundle-[hash].css'),
    // specifies file to compile css into
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // webpacks babel support; compiles javascript into 1 file
      },
      {
        test: /\.scss$/,
        // loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
        loader : 'style-loader!css-loader!sass-loader',
        // sass loader compiles css into inline style tags then css loader compiles it into 1 css file
      },
    ],
  },
};