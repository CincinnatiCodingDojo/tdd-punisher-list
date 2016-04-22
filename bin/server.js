'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('kroger-webpack-config');
const path = require('path');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

config.entry.unshift(`webpack-dev-server/client?http://${HOST}:${PORT}/`, 'webpack/hot/only-dev-server');
config.entry.push(path.resolve('node_modules/kroger-component-dev-harness/root.js'));

const compiler = webpack(config);

new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, 'build'),
  hot: true,
  historyApiFallback: true,
  stats: 'errors-only'
}).listen(PORT, HOST, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server listening at http://${HOST}:${PORT}`);
});
