/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  mode: "production",
  entry: {
    main: "./src/main.jsx",
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  output: {
    filename: `[id].bundle.js`,
  },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
};
