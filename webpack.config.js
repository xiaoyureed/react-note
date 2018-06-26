const HtmlWebpackPlugin = require('html-webpack-plugin');// 动态插入 bundle 好的 .js 档到 .index.html
const path = require('path');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  // 档案起始点从 entry 进入，因为是阵列所以也可以是多个档案
  entry: [
    './src/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
    publicPath: '/', // 虚拟目录, 默认"/", 表示编译后的文件在 localhost:8008/, 如果是/xx, 则在 localhost:8008/xx/
  },
  module: {
    rules: [
      {
        // 使用 babel-loader 将所有 .js（排除了 npm 安装的套件位置 node_modules）转译。
        test: /\.js$/, // 正则匹配
        exclude: /node_modules/, // 排除
        use: 'babel-loader', // 使用的 babel 转译规则，使用 react、es2015。
        /* query: {// 若是已经单独使用 .babelrc 作为 presets 设定的话，则可以省略 query
          presets: ['es2015', 'react'],
        } */
      },
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: `${__dirname}/app`,
        exclude: /bundle\.js$/,
      },
    ],
  },
  devtool: 'inline-source-map',
  // devServer 则是 webpack-dev-server 设定
  devServer: {
    // contentBase: './dist',
    inline: true,
    port: 8008,
  },
  plugins: [HTMLWebpackPluginConfig],
};
