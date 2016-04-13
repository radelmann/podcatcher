import React, { Component } from 'react';
import { Router, IndexRoute, Route } from 'react-router';

// Views
import App from './views/app';
import PodcastList from './views/podcast-list';
import FilteredEpisodeList from './containers/filtered-episode-list';
import Queue from './views/queue';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={PodcastList} />
    <Route path="queue" component={Queue} />
    <Route path=":podcastId" component={FilteredEpisodeList} />
  </Route>
);

export default Routes;