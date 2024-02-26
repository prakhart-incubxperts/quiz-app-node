const nodeExternals = require("webpack-node-externals");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {webpack} = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// import nodeExternals from "webpack-node-externals";
// import path from "path";
// import CopyWebpackPlugin from "copy-webpack-plugin";
// import webpack from "webpack";
// import CleanWebpackPlugin from "clean-webpack-plugin"

module.exports = (env, argv) => {
  return {
    entry:"./src/app.ts",
    externalsPresets: { node: true },
    context: __dirname,
    externals: [nodeExternals()],
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          { from: "package.json" },
          { from: "package-lock.json" },
        ],
      }),
    ],
    node: {
      __dirname: true,
    },
    resolve: {
      extensions: [".ts",".tsx", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          include:[path.resolve(__dirname, 'src')],
          exclude: /node_modules/
        },
      ],
    },
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "main.js",
    },
  };
};
