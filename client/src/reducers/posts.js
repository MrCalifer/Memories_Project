import {
  FETCH_ALL_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_POST_BY_SEARCH,
  START_LOADING,
  STOP_LOADING,
} from "../constants/actionTypes";
export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL_POST:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case CREATE_POST:
      return [...state, action.payload];
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case FETCH_POST_BY_SEARCH:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
