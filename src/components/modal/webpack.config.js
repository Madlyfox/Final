const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Modal.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
  },
};
