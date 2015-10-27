var webpack = require('webpack');
var merge = require('webpack-merge');
var HTMLWebPackPlugin = require('html-webpack-plugin');
var path = require('path');

var TARGET = process.env.npm_lifecycle_event;
var ROOT = path.resolve(__dirname);

var common = {
  entry: [
    'bootstrap-sass!./bootstrap-sass.config.js',
    path.resolve(ROOT, 'app')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT, 'build'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loaders: ['imports?jQuery=jquery']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(ROOT, 'app')
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loaders: ['url?limit=10000&mimetype=application/font-woff']
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loaders: ['url?limit=10000&mimetype=application/font-woff']
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loaders: ['url?limit=10000&mimetype=application/octet-stream']
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loaders: ['file-loader']
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loaders: ['url?limit=10000&mimetype=image/svg+xml']
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: path.resolve(ROOT, 'node_modules')
      }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      title: 'APRS'
    }),
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: path.resolve(ROOT, 'app')
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      port: 9600
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
} else {
  module.exports = common;
}

