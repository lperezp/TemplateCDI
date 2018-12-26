const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // create style node from JS string
          "css-loader", // translate CSS into CommonJS
          "sass-loader" //compile Sass yo CSS, using Node Sass by default
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/, 
        loader: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'sass-loader'
        ],
      }
    ]
  }
};