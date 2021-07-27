/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StatusBar, SafeAreaView, View} from 'react-native';
import {RootStackParamList} from '../navigations';
import {theme} from '../constants';
import {
  Button,
  IconButton,
  Main,
  Header,
  Typography,
  Input,
  Field,
  DatePicker,
} from '../components';

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
      <Header
        left={
          <IconButton size={18} iconName="chevron-back" onPress={() => {}} />
        }
        center={<Typography isBold>Add Task</Typography>}
      />

      <Main>
        <View style={{flex: 1}}>
          <Field label="Title">
            <Input placeholder="Design team meeting" />
          </Field>
          <Field label="Deadline" style={{marginTop: theme.padding}}>
            <DatePicker placeholder="2021-02-28" />
          </Field>
        </View>
        <Button title="Create a Task" onPress={() => {}} />
      </Main>
    </SafeAreaView>
  );
};
