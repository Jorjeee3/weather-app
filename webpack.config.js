const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: ['./src/index.js', './src/normalize.css', './src/index.css', './src/services/weather/months.js', './src/services/weather/Weather.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
//   optimization: {
//     // [...]
//     minimize: true,
//   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
//   optimization: {
//     minimizer: [
//       // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
//       // `...`,
//       new CssMinimizerPlugin(),
//     ],
//   },
//   plugins: [new MiniCssExtractPlugin()],
};