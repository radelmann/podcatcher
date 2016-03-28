var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var url = require('url');
var createPodcastAPIRouter = require('./routers/podcasts');
var createHistoryAPIRouter = require('./routers/history');
var levelup = require('levelup');

var levelOpts = {
  createIfMissing: true,
  valueEncoding: {
    encode: JSON.stringify,
    decode: JSON.parse
  }
};

var db = levelup('./db', levelOpts)

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

app.use('/api/podcasts', createPodcastAPIRouter(db));

app.use('/api/history', createHistoryAPIRouter(db));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8000');
});
