import webpack from 'webpack';
import path from 'path';
import express from 'express';
import open from 'open';

import config from '../webpack.config.dev.js';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath   
  })
);

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http:localhost:${port}`);
  }
});
