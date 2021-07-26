import 'react-native-gesture-handler';
import React from 'react';
import {RootStackNavigation} from './navigations';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
};

export default App;
