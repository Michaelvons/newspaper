import {
  COMMENT_LAZY_REQUEST,
  COMMENT_LAZY_SUCCESS,
  COMMENT_LAZY_FAILURE,
} from './commentTypes';

const initialState = {
  loading_comments: false,
  comments: [],
  error: '',
};

const setLazilyLoadedComments = payload => {
  //   payload.new_comments.map((item, index) => {
  //     payload.previous_comments.push(item);
  //   });

  return payload.new_comments;

  //   return payload.previous_comments;
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_LAZY_REQUEST:
      return {
        ...state,
        loading_comments: true,
        error: '',
      };

    case COMMENT_LAZY_SUCCESS:
      return {
        ...state,
        loading_comments: false,
        comments: setLazilyLoadedComments(action.payload),
      };

    case COMMENT_LAZY_FAILURE:
      return {
        ...state,
        loading_comments: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default commentReducer;
