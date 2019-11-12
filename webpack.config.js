const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');


module.exports = {
  mode: "production",
  entry: ['./src/ts/app.ts'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[contentHash].js'
  },
  module: {
    rules: [
      //typescript compiler
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/template.html' }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', ".json"],
  },
};
