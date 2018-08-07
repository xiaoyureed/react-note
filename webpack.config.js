const HtmlWebpackPlugin = require('html-webpack-plugin');// 动态插入 bundle 好的 .js 档到 .index.html
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    path: `${__dirname}/dist`, // 生成文件到哪个目录
    filename: 'index_bundle.js',
    // 这一opt, 决定生成的index.html中, 脚本引入路径
    // publicPath: '/', // 虚拟目录, 默认"/", 表示编译后的文件在 localhost:8008/, 如果是/xx, 则在 localhost:8008/xx/
  },
  module: {
    rules: [
      {
        // 使用 babel-loader 将所有 .js（排除了 npm 安装的套件位置 node_modules）转译。
        // 用法参考: http://www.ruanyifeng.com/blog/2016/01/babel.html
        test: /\.js$/, // 正则匹配
        exclude: /(node_modules|bower_components)/, // 排除
        // 使用的 babel 转译规则，使用 react、es2015。
        use: 'babel-loader',
        /* use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }, */
        /* query: {// 若是已经单独使用 .babelrc 作为 presets 设定的话，则可以省略 query
          presets: ['es2015', 'react'],
        } */
      },
      {// 这里不知道还有用没有, 因为已经配置了eslintrc文件, 存疑
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: `${__dirname}/app`,
        exclude: /bundle\.js$/,
      }, {
        test: /\.css$/,
        use: [// 更多 loader: https://webpack.js.org/guides/hot-module-replacement/#other-code-and-frameworks
          // 一般来说需要引入css-loader和style-loader，其中css-loader用于解析，而style-loader则将解析后的样式嵌入js代码。
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]', // css模块化， 原来的配置： css?modules&localIdentName=[name]__[local]-[hash:base64:5]
        ],
      },
      /* {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('postcss-cssnext')(),
                require('autoprefixer')(),
                require('cssnano')()
              ],
            },
          },
        ],
      }, */
      { // 不知道为何, 这么配置less不能生效
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          // 'css-loader',
          {
            loader: 'less-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  // devServer 则是 webpack-dev-server 设定
  devServer: {
    // contentBase: './dist',
    inline: true, // 浏览器刷新
    port: 8008,
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    HTMLWebpackPluginConfig,
  ],
};
