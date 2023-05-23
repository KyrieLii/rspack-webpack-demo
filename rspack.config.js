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
  externals: ["react", "react-dom"],
  externalsType: "amd",
  output: {
    library: {
      type: "amd",
      name: "@[name]",
    },
  },
  builtins: {},
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
      templateParameters: (compilation) => {
        console.log(
          "compilation.namedChunkGroups",
          compilation.namedChunkGroups
        );
        console.log(
          "compilation.getStats().toJson().namedChunkGroups",
          JSON.stringify(
            compilation.getStats().toJson().namedChunkGroups,
            null,
            2
          )
        );

        return {};
      },
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
