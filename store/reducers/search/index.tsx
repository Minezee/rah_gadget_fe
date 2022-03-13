import { SET_SEARCH } from "../../actions/search";

const searchState = {
  searchLoading: false,
  searchResult: false,
  searchError: false,
};

const search = (state = searchState, action: any) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchLoading: action.payload.loading,
        searchResult: action.payload.data,
        searchError: action.payload.errorMessage,
      };
    default:
      return state
  }
};

export default search
