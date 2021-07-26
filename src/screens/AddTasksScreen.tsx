import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../navigations';

export interface AddTasksProps {
  navigation: StackNavigationProp<RootStackParamList, 'AddTasks'>;
}

export const AddTasksScreen: React.FC<AddTasksProps> = () => {
  return (
    <View>
      <Text>AddTasksScreen</Text>
    </View>
  );
};
