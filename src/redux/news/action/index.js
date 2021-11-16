import {getNewsList} from '../../../http/NewsApi';
import {checkIsDeviceConnected} from '../../../utils/netInfo';
import LocalStorage from '../../../utils/localStorage';
import {NEWS_TYPE} from '../../../constants/news';
import {errorHandler} from '../../helpers';
import * as types from './types';

const getNewsDataRequest = () => ({
  type: types.GET_NEWS_DATA_REQUEST,
});

const getNewsDataSuccess = payload => ({
  type: types.GET_NEWS_DATA_SUCCESS,
  payload,
});

const getNewsDataFailure = payload => ({
  type: types.GET_NEWS_DATA_FAILURE,
  payload,
});

const updateNewsType = payload => ({
  type: types.UPDATE_NEWS_TYPE,
  payload,
});

export const getNewsListApi = category => async (dispatch, getState) => {
  const {errors} = getState().locale.translations.data;
  dispatch(getNewsDataRequest());
  try {
    const newsList = await getNewsList(category);
    LocalStorage.setItem(category, JSON.stringify(newsList));
    dispatch(getNewsDataSuccess(newsList));
    dispatch(updateNewsType(NEWS_TYPE.ONLINE));
  } catch (error) {
    const connected = await checkIsDeviceConnected();
    if (connected) {
      errorHandler({onFailure: getNewsDataFailure, error, errors, dispatch});
      dispatch(updateNewsType(NEWS_TYPE.NO));
    } else {
      const newsList = await LocalStorage.getItem(category);
      if (newsList !== null) {
        dispatch(getNewsDataSuccess(JSON.parse(newsList)));
        dispatch(updateNewsType(NEWS_TYPE.OFFLINE));
      } else {
        errorHandler({onFailure: getNewsDataFailure, error, errors, dispatch});
        dispatch(updateNewsType(NEWS_TYPE.NO));
      }
    }
  }
};
