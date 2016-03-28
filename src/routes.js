import React, { Component } from 'react';
import { Router, IndexRoute, Route } from 'react-router';

// Views
import App from './views/app';
import PodcastList from './views/podcast-list';
import PodcastEpisodeList from './views/podcast-episode-list';
import Playlist from './views/playlist';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={PodcastList} />
    <Route path="playlist" component={Playlist} />
    <Route path=":podcastId" component={PodcastEpisodeList} />
  </Route>
);

export default Routes;