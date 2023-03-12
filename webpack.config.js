const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.jsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist_webpack"),
    library: {
      name: "@[name]",
      type: "amd",
    },
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    extensions: [".jsx", ".js"],
  },
  externals: ["react", "react-dom"],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "css-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] },
      },
      {
        test: /\.svg$/,
        loader: "@svgr/webpack",
      },
    ],
  },
};
