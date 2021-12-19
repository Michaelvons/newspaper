import {
  COMMENT_LAZY_REQUEST,
  COMMENT_LAZY_SUCCESS,
  COMMENT_LAZY_FAILURE,
} from './commentTypes';
import axios from 'axios';

export const commentLazyRequest = () => {
  return {
    type: COMMENT_LAZY_REQUEST,
  };
};

export const commentLazySuccess = (newComments, previousComments) => {
  return {
    type: COMMENT_LAZY_SUCCESS,
    payload: {new_comments: newComments, previous_comments: previousComments},
  };
};

export const commentLazyFailure = err => {
  return {
    type: COMMENT_LAZY_FAILURE,
    payload: err,
  };
};

export const commentLazy = (endpoints, comments) => dispatch =>
  new Promise(function (resolve, reject) {
    dispatch(commentLazyRequest());

    axios
      .all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(res => {
        let response = res.map((item, index) => item.data);
        console.log(response);
        dispatch(commentLazySuccess(response, comments));
        resolve(response);
      })
      .catch(err => {
        dispatch(commentLazyFailure(err));
        reject(err);
      });
  });
