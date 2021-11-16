import React from 'react';
import {shape, string, arrayOf, number} from 'prop-types';

import {formatDateToSlash} from '../utils/date';
import useSelect from './selector';
import * as S from './style';

const NewsCard = ({data}) => {
  const {translations} = useSelect();

  return (
    <S.Container>
      <S.CardImage source={{uri: data.multimedia[0].url}} />
      <S.ContainerText>
        <S.TextHeading numberOfLines={2}>{data.title}</S.TextHeading>
        <S.TextSubHeading mt={20}>{data.byline}</S.TextSubHeading>
        <S.TextSubHeading>
          {`${translations.published} ${formatDateToSlash(data.updated_date)}`}
        </S.TextSubHeading>
      </S.ContainerText>
      <S.Divider />
    </S.Container>
  );
};

NewsCard.propTypes = {
  data: shape({
    section: string.isRequired,
    subsection: string.isRequired,
    title: string.isRequired,
    abstract: string.isRequired,
    url: string.isRequired,
    uri: string.isRequired,

    byline: string.isRequired,
    item_type: string.isRequired,
    updated_date: string.isRequired,
    created_date: string.isRequired,
    published_date: string.isRequired,
    material_type_facet: string.isRequired,
    kicker: string.isRequired,
    multimedia: arrayOf(
      shape({
        url: string.isRequired,
        format: string.isRequired,
        height: number.isRequired,
        width: number.isRequired,
        type: string.isRequired,
        subtype: string.isRequired,
        caption: string.isRequired,
        copyright: string.isRequired,
      }),
    ),
    short_url: string.isRequired,
  }),
};

export default NewsCard;
