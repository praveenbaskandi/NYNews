import styled from 'styled-components/native';

import {isAndroid} from '../../utils/common';
import {Colors} from '../../utils/Colors';

const StyledText = styled.Text.attrs(({testID}) => ({
  accessibilityLabel: testID,
  accessible: !!testID,
}))`
  font-family: ${isAndroid ? 'Effra-Regular' : 'Effra'};
`;

export const Divider = styled.View`
  background-color: ${Colors.glGrey};
  height: 1px;
  margin-bottom: ${({mb}) => mb || 0}px;
  margin-horizontal: ${({mh}) => mh || 0}px;
  margin-top: ${({mt = 0}) => mt}px;
`;

export const ErrorText = styled(StyledText)`
  color: ${Colors.error};
  font-size: 15px;
  letter-spacing: 0.2px;
  line-height: 17px;
`;

export const Title = styled(StyledText)`
  color: ${Colors.primary};
  font-size: 15px;
  letter-spacing: 0.44px;
  line-height: 15px;
`;

export const BottomTitle = styled(StyledText)`
  color: ${Colors.primary};
  font-size: 15px;
  letter-spacing: 0.44px;
  line-height: 15px;
  text-align: center;
`;
