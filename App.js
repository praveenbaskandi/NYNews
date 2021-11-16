import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import configureStore from './src/redux/store';
import Navigator from '../NYNews/src/navigation';

const App = () => {
  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Navigator />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
