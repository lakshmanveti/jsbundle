const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    'bundle/index': './src/App.ts',
    'headers/index': './lib/headers/test.js',
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'output')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // alias: {
    //     handlebars: 'handlebars/dist/handlebars.js',
    // },
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js']
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  }
};