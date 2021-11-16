import {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {NEWS_KEYWORD} from '../constants/news';

const useSelect = () => {
  const {screen} = useSelector(({locale}) => locale.translations.data);

  const {isLoading, newsList, newsType} = useSelector(({news: N}) => N);

  const optionsCat = useMemo(() => {
    const catArray = [];
    for (let count = 0; count < screen.category.length; count++) {
      catArray.push({
        label: screen.category[count],
        selected: false,
        keyword: NEWS_KEYWORD[count],
      });
    }

    return catArray;
  }, [screen.category]);

  return {
    isLoading,
    newsList,
    optionsCat,
    newsType,
    translations: {
      ...screen,
    },
  };
};

export default useSelect;
