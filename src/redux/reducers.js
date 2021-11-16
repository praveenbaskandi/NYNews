import {combineReducers} from 'redux';

import news from './news/reducer';

// Legacy
import locale from './locale';

export default () =>
  combineReducers({
    news,

    // Legacy
    locale,
  });
