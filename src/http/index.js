// import {history} from '../redux/configureStore';
// import ToastController from '../UI/ToastController';
// import LocalStorage from '../utils/localStorage';

export const baseUrl = 'https://api.nytimes.com/svc/topstories/v2/';

let token = false;

export const setToken = value => {
  token = value;
};

export const unsetToken = () => {
  token = false;
};

export const getRequestOptions = async () => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return options;
};

const fetchError = response => {
  if (response && response.error) {
    throw {error: response.error}; // eslint-disable-line no-throw-literal
  } else {
    throw {error: {message: 'Something went wrong!'}}; // eslint-disable-line no-throw-literal
  }
};

const throwErrorResponse = resp => {
  throw resp;
};

const processResponse = async resp => {
  if (resp.status === 503) {
    return;
  }

  if (resp.status === 401) {
    return;
  }

  const body = await resp.json();

  if (body.data === null || body.data === undefined) {
    return resp.ok ? body : throwErrorResponse(body);
  }

  return resp.ok && body.success ? body.data : throwErrorResponse(body.error);
};

export const get = async (url, params = {}) => {
  const options = await getRequestOptions();
  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    method: 'GET',
  }).catch(fetchError);

  return processResponse(response);
};

export const post = async (url, body = {}) => {
  const options = await getRequestOptions();
  const fetchOpts = {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
  };

  const response = await fetch(`${baseUrl}${url}`, fetchOpts).catch(err => {
    fetchError(err);
  });

  return processResponse(response);
};
