const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// settings for ssr
const ssr = {
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, 'lib'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
};

// settings for client
const client = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  target: 'web',
  devtool: 'source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      excludeChunks: ['server'],
    }),
    new CopyPlugin([{ from: 'public/images', to: 'images' }]),
  ],
};

const shared = {
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};

module.exports = [
  {
    ...shared,
    ...ssr,
  },
  {
    ...shared,
    ...client,
  },
];
