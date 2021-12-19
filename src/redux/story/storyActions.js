import {
  STORY_FETCH_REQUEST,
  STORY_FETCH_SUCCESS,
  STORY_FETCH_FAILURE,
  STORY_LAZY_REQUEST,
  STORY_LAZY_SUCCESS,
  STORY_LAZY_FAILURE,
} from './storyTypes';
import axios from 'axios';

export const storyFetchRequest = () => {
  return {
    type: STORY_FETCH_REQUEST,
  };
};

export const storyFetchSuccess = array => {
  return {
    type: STORY_FETCH_SUCCESS,
    payload: array,
  };
};

export const storyFetchFailure = err => {
  return {
    type: STORY_FETCH_FAILURE,
    payload: err,
  };
};

export const storyLazyRequest = () => {
  return {
    type: STORY_LAZY_REQUEST,
  };
};

export const storyLazySuccess = (newStories, previousStories) => {
  return {
    type: STORY_LAZY_SUCCESS,
    payload: {new_stories: newStories, previous_stories: previousStories},
  };
};

export const storyLazyFailure = err => {
  return {
    type: STORY_LAZY_FAILURE,
    payload: err,
  };
};

export const storyFetch = () => dispatch =>
  new Promise(function (resolve, reject) {
    dispatch(storyFetchRequest());

    axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(res => {
        console.log('res->', res);
        dispatch(storyFetchSuccess(res.data));
        resolve(res);
      })
      .catch(err => {
        dispatch(storyFetchFailure(err));
        reject(err);
      });
  });

export const storyLazy = (endpoints, stories) => dispatch =>
  new Promise(function (resolve, reject) {
    dispatch(storyLazyRequest());

    axios
      .all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(res => {
        let response = res.map((item, index) => item.data);
        console.log(response);
        dispatch(storyLazySuccess(response, stories));
        resolve(response);
      })
      .catch(err => {
        dispatch(storyLazyFailure(err));
        reject(err);
      });
  });
