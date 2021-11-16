import styled from 'styled-components/native';

import {Colors} from '../../utils/Colors';

export const generateSelectStyles = () => ({
  chevronContainer: {
    opacity: 0,
  },
  alignSelf: 'center',
  done: {
    color: Colors.darkBlack,
  },
  inputAndroid: {
    fontSize: 16,
    lineHeight: 18,
    color: Colors.pTextBlack,
    padding: 0,
  },
  inputAndroidContainer: {
    height: 30,
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 30,
    width: 150,
    borderColor: Colors.pLightBlue,
  },
  inputIOS: {
    color: Colors.pTextBlack,
    fontFamily: 'Effra',
    fontSize: 16,
  },
  inputIOSContainer: {
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 30,
    width: 150,
    borderColor: Colors.pLightBlue,
    justifyContent: 'center',
  },
});

export const Container = styled.View`
  flex-direction: row;
  height: 30px;
  align-items: center;
  margin-left: ${({ml = 0}) => ml}px;
`;

export const DropImage = styled.Image`
  height: 10px;
  width: 10px;
  position: absolute;
  right: 5px;
`;
