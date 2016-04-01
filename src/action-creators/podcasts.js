import { MOVE_QUEUE_ITEM, REMOVE_EPISODE_FROM_QUEUE, ADD_EPISODE_TO_QUEUE, ADD_PODCASTS, CLEAR_PODCAST_EPISODE, LOAD_PODCAST_EPISODE } from '../actions';
import fetch from 'isomorphic-fetch';
const PODCAST_API_URL = '/api/podcasts';

export function getPodcasts() {
  return (dispatch) => {
    fetch(PODCAST_API_URL)
      .then(response => response.json())
      .then(podcasts =>
        dispatch(addPodcasts(podcasts))
      );
  };
}

export function addPodcasts(podcasts) {
  return {
    type: ADD_PODCASTS,
    payload: podcasts
  };
}

export function loadPodcastEpisode(episode) {
  return {
    type: LOAD_PODCAST_EPISODE,
    payload: episode
  };
}

export function clearPodcastEpisode() {
  return {
    type: CLEAR_PODCAST_EPISODE
  };
}

export function addEpisodeToQueue(episode) {
  return {
    type: ADD_EPISODE_TO_QUEUE,
    payload: episode
  };
}

export function removeEpisodeFromQueue(episode) {
  return {
    type: REMOVE_EPISODE_FROM_QUEUE,
    payload: episode
  };
}

export function moveQueueItem(payload) {
  return {
    type: MOVE_QUEUE_ITEM,
    payload: payload
  };
}