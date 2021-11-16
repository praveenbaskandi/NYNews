import React, {useState} from 'react';
import {arrayOf, number, oneOfType, shape, string, any, func} from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';

import imgDrop from '../../assets/icon-arrow.png';
import * as S from './style';

const DropDown = ({items, setData, placeholder, ml}) => {
  const [value, setValue] = useState();
  const onValueChange = item => {
    setValue(item.label);
    setData(item);
  };
  const inputValue = value && value.toString();

  return (
    <S.Container ml={ml}>
      <RNPickerSelect
        items={items}
        useNativeAndroidPickerStyle={false}
        style={S.generateSelectStyles()}
        onValueChange={onValueChange}
        placeholder={placeholder}
        value={inputValue}
      />
      <S.DropImage source={imgDrop} />
    </S.Container>
  );
};

DropDown.propTypes = {
  ml: number,
  setData: func.isRequired,
  selected: string,
  items: arrayOf(
    shape({
      label: oneOfType([number, string]),
      value: oneOfType([number, string]),
    }),
  ).isRequired,
  placeholder: shape({
    label: oneOfType([number, string]),
    value: any,
  }),
};

DropDown.defaultProps = {
  ml: 0,
  placeholder: {},
  selected: '',
  isRequired: false,
  labelDisabled: false,
  visualizeDisabled: false,
};

export default DropDown;
