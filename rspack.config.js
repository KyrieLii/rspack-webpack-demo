/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  mode: "development",
  entry: {
    main: "./src/main.jsx",
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  externalsType: "amd",
  output: {
    library: {
      type: "amd",
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
    ],
  },
};
