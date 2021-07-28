import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, AddTasksScreen} from '../screens';
import {taskActions, useAppDispatch} from '../store';
import {getTasks} from '../services/database';

export type RootStackParamList = {
  Home: undefined;
  AddTasks: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackNavigation = () => {
  const {initTasks} = taskActions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tasks = getTasks();
    dispatch(initTasks(tasks));
  }, [initTasks, dispatch]);

  return (
    <RootStack.Navigator initialRouteName="Home" headerMode={'none'}>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="AddTasks" component={AddTasksScreen} />
    </RootStack.Navigator>
  );
};
