import queryString from 'query-string';
import * as _ from 'underscore';

const qs = params =>
  (!_.isEmpty(params) ? `?${queryString.stringify(params)}` : '').trim();

export default qs;
