import React from 'react';
import {string, bool} from 'prop-types';

import * as S from './style';

const HeadingBar = ({heading, transparent, newsType}) => {
  const getNewsStatus = (
    <>
      <S.NewsStatusCard color={newsType}>
        <S.NewsStatusText>{newsType}</S.NewsStatusText>
      </S.NewsStatusCard>
    </>
  );
  return (
    <S.HeadContainer trans={transparent}>
      <S.Heading trans={transparent}>{heading}</S.Heading>
      {getNewsStatus}
    </S.HeadContainer>
  );
};

HeadingBar.propTypes = {
  nav: string,
  heading: string.isRequired,
  transparent: bool,
  newsType: string,
};

HeadingBar.defaultProps = {
  newsType: '',
};

export default HeadingBar;
