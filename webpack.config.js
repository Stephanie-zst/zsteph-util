/*
 * @Descripttion:
 * @Author: Stephanie-zst
 * @Date: 2021-02-27 19:02:06
 * @LastEditTime: 2021-03-01 22:20:01
 */
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    'zsteph-util': './src/index.js',
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ZstephUtil',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()], // 启用作用域提升
}
