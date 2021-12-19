import {combineReducers} from 'redux';
import commentReducer from './comment/commentReducers';
import storyReducer from './story/storyReducers';

const rootReducer = combineReducers({
  story: storyReducer,
  comment: commentReducer,
});

export default rootReducer;
