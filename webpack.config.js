/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    test: {
      import: './src/test.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  output: {
    filename: '[name][hash:5].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jepg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
    generator: {
      asset: {
        filename: 'assets/[name][ext]',
        outputPath: 'assets',
      },
    },
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
