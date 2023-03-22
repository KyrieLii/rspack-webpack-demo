const path = require("path");

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  mode: "development",
  entry: {
    main: "./src/main.jsx",
  },
  //   externals: {
  //     react: "react",
  //     "react-dom": "react-dom",
  //   },
  externalsType: "umd",
  output: {
    library: {
      type: "umd",
      name: "@[name]",
    },
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
      {
        test: /\.ya?ml$/,
        use: [
          { loader: path.resolve("./src/loader/jsonLoader") },
          {
            loader: require.resolve("yaml-loader"),
            options: {
              asJSON: true,
            },
          },
        ],
      },
    ],
  },
};
