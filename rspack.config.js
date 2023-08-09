const { default: HtmlPlugin } = require("@rspack/plugin-html");
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  mode: "development",
  entry: {
    main: "./src/main.jsx",
  },
  output: {
    libraryTarget: "umd",
  },
  externals: [],
  externalsType: "umd",
  builtins: {},
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
};
