const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: __dirname + "/src/main.jsx",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        //拡張子がpng,jpg,gif,svgを検知したら
        test: /\.(png|jpg|gif|svg|ico)/,
        use: [
          {
            loader: "file-loader",
            options: {
              //[name]は画像名、[ext]は拡張子
              name: "images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [__dirname + "/node_modules"],
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      // Setting favicon path.
      favicon: "./src/public/favicon.ico",
    }),
  ],
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /^\/*/, to: "/index.html" }],
    },
    static: {
      directory: __dirname + "/dist",
    },
    port: 8080,
  },
};
