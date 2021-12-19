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
        comments: action.payload,
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
