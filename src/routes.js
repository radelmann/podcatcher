import React, { Component } from 'react';
import { Router, IndexRoute, Route } from 'react-router';

// Views
import App from './views/app';
import PodcastList from './views/podcast-list';
import PodcastEpisodeList from './views/podcast-episode-list';
import Queue from './views/queue';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={PodcastList} />
    <Route path="queue" component={Queue} />
    <Route path=":podcastId" component={PodcastEpisodeList} />
  </Route>
);

export default Routes;