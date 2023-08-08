const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV ?? "development",
  entry: {
    main: "./src/main.jsx",
    about: "./src/pages/about.jsx",
    contact: "./src/pages/contact.jsx",
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
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  optimization: {
    chunkIds: "named",
    moduleIds: "named",
    // usedExports: true,
    // sideEffects: true,
    // splitChunks: {
    //   chunks: "all",
    // },
    chunkIds: "named",
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
