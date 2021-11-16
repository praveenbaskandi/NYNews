import styled from 'styled-components/native';

import {Title} from '../../UI/Text';
import {Colors} from '../../utils/Colors';

export const HeadContainer = styled.View`
  width: 100%;
  background-color: ${Colors.white};
`;

export const CatText = styled(Title)`
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: ${({selected}) => (selected ? Colors.pWhite : Colors.darkBlack)};
`;

export const ListView = styled.FlatList`
  background-color: ${Colors.white};
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 30px;
`;

export const CatHeadingText = styled(Title)`
  font-size: 20px;
  line-height: 22px;
  text-align: left;
  margin-horizontal: 30px;
  color: ${Colors.darkBlack};
`;

export const CategoryCard = styled.TouchableOpacity`
  height: 30px;
  flex: 1;
  margin-horizontal: 5px;
  align-items: center;
  flex-direction: row;
  border-radius: 30px;
  margin-top: 5px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  border-color: ${({selected}) =>
    selected ? Colors.pBlue : Colors.pLightBlue};
  background-color: ${({selected}) =>
    selected ? Colors.pBlue : Colors.pWhite};
`;
