import {
  STORY_FETCH_REQUEST,
  STORY_FETCH_SUCCESS,
  STORY_FETCH_FAILURE,
  STORY_LAZY_REQUEST,
  STORY_LAZY_SUCCESS,
  STORY_LAZY_FAILURE,
} from './storyTypes';

const initialState = {
  loading_stories: false,
  loading_story_ids: false,
  story_ids: [],
  stories: [],
  error: '',
};

const setLazilyLoadedStories = payload => {
  // sort by value

  let sortByTrending = payload.new_stories.sort(function (a, b) {
    return b.score - a.score;
  });

  //   console.log('sortByTrending->', sortByTrending);

  payload.new_stories.map((item, index) => {
    if (item.id === sortByTrending[0].id) {
      payload.previous_stories.push({...item, is_trending: true});
    } else {
      payload.previous_stories.push({...item, is_trending: false});
    }
  });

  return payload.previous_stories;
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORY_FETCH_REQUEST:
      return {
        ...state,
        loading_story_ids: true,
        error: '',
      };

    case STORY_FETCH_SUCCESS:
      return {
        ...state,
        loading_story_ids: false,
        story_ids: action.payload,
      };

    case STORY_FETCH_FAILURE:
      return {
        ...state,
        loading_story_ids: false,
        error: action.payload,
      };

    case STORY_LAZY_REQUEST:
      return {
        ...state,
        loading_stories: true,
        error: '',
      };

    case STORY_LAZY_SUCCESS:
      return {
        ...state,
        loading_stories: false,
        stories: setLazilyLoadedStories(action.payload),
      };

    case STORY_LAZY_FAILURE:
      return {
        ...state,
        loading_stories: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default storyReducer;
