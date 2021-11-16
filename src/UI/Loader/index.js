import React from 'react';
import {number, bool} from 'prop-types';

import loaderSource from '../../assets/common/loader.json';
import * as S from './style';

const Loader = ({size}) => {
  return <S.Loading h={size} w={size} source={loaderSource} autoPlay loop />;
};

Loader.propTypes = {
  size: number,
  isAbsolute: bool,
};

Loader.defaultProps = {
  size: 50,
  isAbsolute: false,
};

export default Loader;
