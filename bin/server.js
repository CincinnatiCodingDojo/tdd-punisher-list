'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

// Pull in our shared webpack config. Feel free to use your own with caution.
const config = require('kroger-webpack-config');
const path = require('path');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

config.entry.unshift(`webpack-dev-server/client?http://${HOST}:${PORT}/`, 'webpack/hot/only-dev-server');

// The webpack config doesn't have an entry, so we have to add one. We can't just add our component as the entry
// because it's meant to 'plug in' to a larger app. So we have an npm module that simulates a small app that can
// load your component up on the page. So we add dev-harness/root.js as our entry. It knows to find your src/index
// file and use the reducer and Component exports to get things working.
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
