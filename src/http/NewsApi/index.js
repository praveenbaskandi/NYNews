import {get} from '../index';

export const getNewsList = async category =>
  get(`${category}.json?api-key=${'hDBMklaQ5GGPdMm8ZtnGr9FqBMqHACTI'}`);
