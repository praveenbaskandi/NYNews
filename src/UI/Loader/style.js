import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

export const Loading = styled(LottieView)`
  width: ${({w = 0}) => w}px;
  height: ${({h = 0}) => h}px;
`;
