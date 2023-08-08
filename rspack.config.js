const { default: HtmlPlugin } = require("@rspack/plugin-html");
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  mode: process.env.NODE_ENV ?? "development",
  entry: {
    main: "./src/main.jsx",
    about: "./src/pages/about.jsx",
    contact: "./src/pages/contact.jsx",
  },
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
  optimization: {
    // splitChunks: {
    //   chunks: "async",
    // },
  },
};
