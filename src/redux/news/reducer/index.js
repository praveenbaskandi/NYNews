import * as types from '../action/types';

export const initialState = {
  newsList: [],
  isLoading: false,
  newsType: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEWS_DATA_SUCCESS:
      return {
        ...state,
        newsList: action.payload.results,
        isLoading: false,
      };

    case types.GET_NEWS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_NEWS_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        newsList: [],
        error: action.payload,
      };

    case types.UPDATE_NEWS_TYPE:
      return {
        ...state,
        isLoading: false,
        newsType: action.payload,
      };

    default: {
      return state;
    }
  }
};
