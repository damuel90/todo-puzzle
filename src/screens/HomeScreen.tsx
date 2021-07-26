import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../navigations';

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export const HomeScreen: React.FC<HomeProps> = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
