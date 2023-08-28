const path = require("path");
const esbuild = require("esbuild");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.jsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist_webpack"),
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js"],
  },
  devServer: {
    devMiddleware: { writeToDisk: true },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        loader: "esbuild-loader",
        resolve: {
          fullySpecified: false,
        },
        options: {
          loader: "tsx",
        },
      },
      //   {
      //     test: /\.jsx?$/,
      //     exclude: /node_modules/,
      //     loader: "babel-loader",
      //     options: { presets: ["@babel/env", "@babel/preset-react"] },
      //   },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
