const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const IS_DEV = process.env.NODE_ENV === 'development'
const ANALYZE = process.env.ANALYZE_BUNDLE === 'true'

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    title: 'Index',
    template: path.join('src', 'index.html')
  })
]

if (ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: IS_DEV ? 'bundle.js' : '[name].[contenthash].js'
  },
  mode: IS_DEV ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 8,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`
          }
        }
      }
    }
  },
  plugins,
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.json', '.js', '.jsx'],
    mainFiles: ['index'],
    alias: {
      '@data': path.join(__dirname, 'src', 'table', 'data'),
      '@examples': path.join(__dirname, 'src', 'examples'),
      '@presentation': path.join(__dirname, 'src', 'table', 'presentation'),
      '@table': path.join(__dirname, 'src', 'table')
    }
  },
  devtool: IS_DEV ? 'cheap-module-eval-source-map' : 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    compress: false,
    contentBase: './dist',
    inline: true,
    hot: true,
    open: false,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true
    }
  }
}
