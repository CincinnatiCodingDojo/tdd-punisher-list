'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../../webpack.config');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
  // BRETT: polling necessary for Docker on Mac?
  // watchOptions: {
  //   aggregateTimeout: 1000,
  //   poll: 1000
  // },
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://0.0.0.0:3000');
});
