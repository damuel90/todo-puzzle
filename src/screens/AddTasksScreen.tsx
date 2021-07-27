/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Text, StatusBar, SafeAreaView} from 'react-native';
import {RootStackParamList} from '../navigations';
import {theme} from '../constants';
import {Header, Typography} from '../components';

export interface AddTasksProps {
  navigation: StackNavigationProp<RootStackParamList, 'AddTasks'>;
}

export const AddTasksScreen: React.FC<AddTasksProps> = () => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme.colors.commons.white}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.commons.white}
      />
      <Header>
        <Typography>Add Tasks</Typography>
      </Header>
      <Text>AddTasksScreen</Text>
    </SafeAreaView>
  );
};
