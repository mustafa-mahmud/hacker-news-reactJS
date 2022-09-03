import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  console.log(action.type);

  switch (action.type) {
    case SET_STORIES:
      const { hits, nbPages, query } = action.payload;
      return { ...state, hits, nbPages, query, loading: false };

    case SET_LOADING:
      return { ...state, loading: true };
    default:
      throw new Error('Type does not match with any Dispatch');
  }
};
export default reducer;
