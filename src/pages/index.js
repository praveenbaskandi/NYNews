import React, {useLayoutEffect, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';

import {checkNetConnection} from '../utils/netInfo';
import {getNewsListApi} from '../redux/news/action';
import Header from '../UI/Heading';
import Loader from '../UI/Loader';
import Category from './Category';
import Filter from './Filter';
import NewsCard from './NewsCard';
import useSelect from './selector';
import * as S from './style';

const HomePage = () => {
  const {translations, newsList, newsType, isLoading} = useSelect();
  const [dataList, setDataList] = useState(newsList);
  const [category, setCategory] = useState('arts');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  // fetching data from api
  useEffect(() => {
    setLocation('');
    setKeyword('');
    dispatch(getNewsListApi(category));
  }, [category, dispatch]);

  // data setting to state
  useLayoutEffect(() => {
    setDataList(newsList);
  }, [newsList]);

  // use for the keyword and location filter
  useEffect(() => {
    let filteredNews;
    if (keyword !== '') {
      filteredNews = newsList.filter(
        item =>
          item.title.toLowerCase().includes(keyword) ||
          item.abstract.toLowerCase().includes(keyword),
      );
    }
    if (location !== '') {
      filteredNews = newsList.filter(
        item =>
          item.title.toLowerCase().includes(location) ||
          item.abstract.toLowerCase().includes(location),
      );
    }
    setDataList(filteredNews);

    if (location === '' && keyword === '') {
      setDataList(newsList);
    }
  }, [location, keyword, newsList]);

  return (
    <S.HeadContainer>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Header heading={translations.nytNewsFeed} newsType={newsType} />
      <S.ScrollVertical>
        {/* category list added from component */}
        <Category setCategory={setCategory} category={category} />
        {/* fliter list added from component */}
        <Filter setLocation={setLocation} setKeyword={setKeyword} />
        {/* new list added from api or local */}
        {dataList?.length > 0 ? (
          <S.ListView
            data={dataList}
            renderItem={({item, index}) => <NewsCard key={index} data={item} />}
            keyExtractor={item => item.title}
            ListHea
          />
        ) : (
          <S.EmptyContainer>
            {checkNetConnection ? (
              <S.TextEmpty>{translations.noInternet}</S.TextEmpty>
            ) : (
              <S.TextEmpty>{translations.noDataToDisplay}</S.TextEmpty>
            )}
          </S.EmptyContainer>
        )}
      </S.ScrollVertical>
      {/* loading in case api data fetch*/}
      {isLoading ? (
        <S.LoaderView>
          <Loader size={50} />
        </S.LoaderView>
      ) : null}
    </S.HeadContainer>
  );
};

export default HomePage;
