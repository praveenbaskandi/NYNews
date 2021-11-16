import Toast from 'react-native-toast-message';

export const toastSuccess = (title, subTitle) => {
  return Toast.show({
    type: 'success',
    text1: title,
    autoHide: true,
    text2: subTitle,
  });
};

export const toastError = (title, subTitle) => {
  return Toast.show({
    type: 'error',
    text1: title,
    autoHide: true,
    text2: subTitle,
  });
};

export const toastWarning = (title, subTitle) => {
  return Toast.show({
    type: 'info',
    text1: title,
    autoHide: true,
    text2: subTitle,
  });
};
