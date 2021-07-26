import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, AddTasksScreen} from '../screens';
import {taskActions} from '../store';

export type RootStackParamList = {
  Home: undefined;
  AddTasks: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackNavigation = () => {
  const {getTasks} = taskActions;

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <RootStack.Navigator initialRouteName="Home" headerMode={'none'}>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="AddTasks" component={AddTasksScreen} />
    </RootStack.Navigator>
  );
};
