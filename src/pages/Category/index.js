import React, {useState} from 'react';
import {string, func} from 'prop-types';

import useSelect from '../selector';
import * as S from './style';

const Category = ({category, setCategory}) => {
  const {translations, optionsCat} = useSelect();
  const [selected, updateSelected] = useState(category);

  return (
    <S.HeadContainer>
      <S.CatHeadingText>{translations.section}</S.CatHeadingText>
      {/* category list added */}
      <S.ListView
        data={optionsCat}
        numColumns={3}
        renderItem={({item, index}) => (
          <S.CategoryCard
            key={item.label}
            onPress={() => {
              updateSelected(item.keyword);
              setCategory(item.keyword);
            }}
            selected={selected === item.keyword}>
            <S.CatText selected={selected === item.keyword}>
              {item.label}
            </S.CatText>
          </S.CategoryCard>
        )}
        keyExtractor={item => item.label}
      />
    </S.HeadContainer>
  );
};

Category.propTypes = {
  category: string.isRequired,
  setCategory: func.isRequired,
};

export default Category;
