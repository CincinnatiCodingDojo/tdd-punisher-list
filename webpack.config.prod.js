const config = require('kroger-webpack-config');

config.externals = {
  'react': 'react',
  'axios': 'axios',
  'redux': 'redux',
  'react-redux': 'react-redux'
};

module.exports = config;
