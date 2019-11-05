const path = require('path');

module.exports = {
  resolve: { extensions: ['.js', '.jsx'] },
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, 'lib'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
