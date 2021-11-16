import enUS from './en-US';
import deDE from './de-DE';

const locales = {
  'en-US': enUS,
  'de-DE': deDE,
};

export const localeOptions = [
  {
    label: 'en',
    value: 'en-US',
  },
  {
    label: 'de',
    value: 'de-DE',
  },
];

const getTranslations = (locale = 'en-US') => locales[locale];

export default getTranslations;
