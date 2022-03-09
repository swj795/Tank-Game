// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
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
};
