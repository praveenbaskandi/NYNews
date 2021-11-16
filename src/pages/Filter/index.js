import React from 'react';
import {func} from 'prop-types';

import {COUNTRIES_LIST, KEYWORD_LIST} from '../../constants/news';
import DropDown from '../../UI/DropDown';
import * as S from '../style';

const Filter = ({setLocation, setKeyword}) => {
  const locationHolder = {label: 'Location', value: ''};
  const keywordHolder = {label: 'Keyword', value: ''};

  return (
    <S.FilterRow>
      <DropDown
        setData={setLocation}
        items={COUNTRIES_LIST}
        placeholder={locationHolder}
      />
      <DropDown
        setData={setKeyword}
        ml={10}
        items={KEYWORD_LIST}
        placeholder={keywordHolder}
      />
    </S.FilterRow>
  );
};

Filter.propTypes = {
  setLocation: func.isRequired,
  setKeyword: func.isRequired,
};

export default Filter;
