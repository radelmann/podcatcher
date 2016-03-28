var express = require('express');
var router = new express.Router();
import { fetchFeed } from '../feed-tools';
const ascUrl = 'http://www.npr.org/templates/rss/podlayer.php?id=15709577';
const jjUrl = 'http://feeds.feedwrench.com/JavaScriptJabber.rss';
const pmUrl = 'http://www.npr.org/templates/rss/podlayer.php?id=93559255';
const lcUrl = 'http://feeds.feedburner.com/SlateLexiconValley';
const seUrl = 'http://feed.songexploder.net/songexploder';
const waUrl = 'http://feeds.5by5.tv/webahead';
const casts = [ascUrl, jjUrl, pmUrl, lcUrl, seUrl, waUrl];

function createRouter(db) {
  async function handleIndex(req, res) {
    const feeds = await* casts.map(fetchFeed);
    res.json(feeds);
  }

  router.get('/', handleIndex);

  return router;
}


module.exports = createRouter;