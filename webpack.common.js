var path = require("path");

module.exports = {
 // mode: "production",
 entry: "./src/index.ts",
 output: {
  path: path.resolve(__dirname, "build"),
  filename: "index.bundle.js",
 },
 resolve: {
  extensions: [".tsx", ".ts", ".js"],
 },
 devServer: { static: path.join(__dirname, "src") },
 module: {
  rules: [
   {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ["babel-loader"],
   },
   {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: ["ts-loader"],
   },
   {
    test: /\.(css|scss)$/,
    use: ["style-loader", "css-loader"],
   },
   // {
   //  test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
   //  use: ["file-loader"],
   // },
  ]
 },
 externals: {
  react: "react"
 }
};