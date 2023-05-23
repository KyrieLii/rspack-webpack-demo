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
    libraryTarget: "amd",
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      templateParameters: (compilation) => {
        console.log(
          "compilation.namedChunkGroups",
          compilation.namedChunkGroups.get("main").chunks
        );
        console.log(
          "compilation.getStats().toJson().namedChunkGroups",
          compilation.getStats().toJson().namedChunkGroups
        );

        return {};
      },
    }),
    {
      apply(compiler) {
        console.log("compiler.namedChunkGroups", compiler.namedChunkGroups);
      },
    },
  ],
  resolve: {
    extensions: [".jsx", ".js"],
  },
  externals: ["react", "react-dom"],
  externalsType: "amd",
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
