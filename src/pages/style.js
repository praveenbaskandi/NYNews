import styled from 'styled-components/native';

import {Title} from '../UI/Text';
import {isAndroid} from '../utils/common';
import {Colors} from '../utils/Colors';

export const HeadContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
`;

export const ScrollVertical = styled.View`
  width: 100%;
  flex: 1;
`;

export const ListView = styled.FlatList`
  background-color: ${Colors.white};
  margin-top: 20px;
`;

export const Container = styled.View`
  margin-horizontal: 30px;
  flex-direction: row;
  padding-vertical: 10px;
`;

export const ContainerText = styled.View`
  flex: 1;
`;

export const TextHeading = styled(Title)`
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  color: ${Colors.pTextBlack};
  ${isAndroid ? 'font-family: EffraBold;' : 'font-weight: 600;'}
`;

export const TextSubHeading = styled(Title)`
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  margin-top: ${({mt = 0}) => mt}px;
  color: ${Colors.pTextGrey};
`;

export const CardImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: ${Colors.blure};
`;

export const Divider = styled.View`
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Colors.pLightBlue};
`;

export const TextEmpty = styled(Title)`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-top: 100px;
  color: ${Colors.darkBlack};
`;

export const LoaderView = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.pBackOpacity};
`;

export const BoxRow = styled.View`
  flex-direction: row;
`;

export const FilterRow = styled.View`
  flex-direction: row;
  margin-horizontal: 30px;
  margin-top: 20px;
  justify-content: space-between;
`;

export const EmptyContainer = styled.View`
  width: 100%
  margin-horizontal: 10px;
`;
