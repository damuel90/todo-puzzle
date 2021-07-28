import 'react-native-gesture-handler';
import React from 'react';
import {RootStackNavigation} from './navigations';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './store';
import {CustomToastProvider} from './components';

const App = () => {
  return (
    <CustomToastProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootStackNavigation />
        </NavigationContainer>
      </Provider>
    </CustomToastProvider>
  );
};

export default App;
