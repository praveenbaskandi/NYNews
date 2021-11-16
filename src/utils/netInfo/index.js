import NetInfo from '@react-native-community/netinfo';

export const checkIsDeviceConnected = async () => {
  const connectedInfo = await NetInfo.fetch();

  return connectedInfo.isInternetReachable ?? connectedInfo.isConnected;
};
