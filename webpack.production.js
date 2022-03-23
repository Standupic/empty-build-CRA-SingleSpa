const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "cra-single",
    projectName: "cra-single",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [
      new ModuleFederationPlugin({
        name: "cra-single",
        library: { type: "var", name: "cra_single" },
        filename: "cra-single.js",
        exposes: {
          "cra-single": "./src/cra-single-cra-single",
        },
        shared: ["react", "react-dom"],
      }),
    ],
    // modify the webpack config however you'd like to by adding to this object
  });
};
