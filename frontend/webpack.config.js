const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",  //Webpack, kodun derlemeye başlayacağı dosyayı belirler. 
  output: {
    path: path.resolve(__dirname, "./static/frontend"),//Derlenmiş kodun hangi dosyaya ve nereye kaydedileceğini belirler
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {//development: Geliştirme için okunabilir, optimize edilmemiş kod.production: Üretim için optimize edilmiş, küçültülmüş kod.
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("development"),     //development: Geliştirme için okunabilir, optimize edilmemiş kod.
                                                    //production: Üretim için optimize edilmiş, küçültülmüş kod.
      },
    }),
  ],
};