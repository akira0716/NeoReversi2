const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: __dirname + "/src/main.tsx",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: [/\.(ts|tsx)$/],
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader", // ts-loader を使用するように変更
            options: {
              configFile: "tsconfig.json", // 追加
            },
          },
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
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      // Setting favicon path.
      favicon: "./src/public/favicon.ico",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: __dirname + "/dist",
    },
    port: 8080,
  },
};
