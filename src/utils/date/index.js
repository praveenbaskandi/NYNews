import moment from 'moment';

const TODAY = new Date();
export const CURRENT_MONTH = TODAY.getMonth();
export const CURRENT_YEAR = TODAY.getFullYear();
export const CURRENT_DAY_OF_MONTH = TODAY.getDate();

export const DATE_FORMAT = 'DD/MM/YYYY';
export const DATE_TIME_DASHED_FORMAT = 'DD/MM/YYYY - HH:mm A';
export const DATE_FORMAT_DASHED = 'YYYY-MM-DD';
export const MMM_YYYY = 'MMM YYYY';
export const D_MMM_YYYY = 'D MMM YYYY';
export const DD_MM_YYYY = 'DD-MM-YYYY';
export const DD_MMM_YYYY = 'DD MMM YYYY';
export const MM_YYYY = 'MM/YYYY';
export const MMMM_YYYY = 'MMMM YYYY';
export const M = 'M';
export const YYYY = 'YYYY';
export const DATE_FORMAT_WITH_SPACES = 'DD / MM / YYYY';

export const formatDateToSlash = date =>
  date ? moment(date).format(DATE_FORMAT) : 'None';
