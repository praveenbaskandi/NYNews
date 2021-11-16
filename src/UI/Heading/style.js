import styled from 'styled-components/native';

import {NEWS_TYPE} from '../../constants/news';
import {Colors} from '../../utils/Colors';
import {statusbarHeight} from '../../utils/dimension';
import {isAndroid} from '../../utils/common';
import {Title} from '../Text';

const getBackColor = status => {
  if (status === NEWS_TYPE.ONLINE) {
    return Colors.pGreen;
  } else if (status === NEWS_TYPE.OFFLINE) {
    return Colors.pRed;
  }
  return Colors.white;
};

export const HeadContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  padding-horizontal: 30px;
  align-items: center;
  justify-content: space-between;
  margin-top: ${statusbarHeight}px;
  background-color: ${({trans}) => (trans ? 'transparent' : Colors.white)};
`;

export const Heading = styled(Title)`
  font-size: 22px;
  line-height: 23px;
  align-self: center;
  color: ${({trans}) => (trans ? Colors.white : Colors.darkBlack)};
  ${isAndroid ? 'font-family: EffraHeavy;' : 'font-weight: 900;'}
`;

export const NewsStatusText = styled(Title)`
  font-size: 12px;
  line-height: 14px;
  margin-horizontal: 5px;
  text-align: center;
  color: ${Colors.white};
`;

export const NewsStatusCard = styled.View`
  height: 25px;
  z-index: 1;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  align-items: center;
  background-color: ${({color}) => getBackColor(color)};
`;
