/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
  TimePicker,
  Select,
} from '../components';

export interface AddTasksProps {
  navigation: StackNavigationProp<RootStackParamList, 'AddTasks'>;
}

export const AddTasksScreen: React.FC<AddTasksProps> = () => {
  const [deadline, setDeadline] = useState<Date>(null!);
  const [start, setStart] = useState<Date>(null!);
  const [end, setEnd] = useState<Date>(null!);

  const handleDateChange =
    (setState: React.Dispatch<React.SetStateAction<Date>>) => (value: Date) => {
      setState(value);
    };

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
            <DatePicker
              placeholder="2021-02-28"
              value={deadline}
              onChange={handleDateChange(setDeadline)}
            />
          </Field>
          <View style={{flexDirection: 'row', marginTop: theme.padding}}>
            <Field label="Start time" style={{flex: 1, marginRight: 10}}>
              <TimePicker
                placeholder="11:00 am"
                value={start}
                onChange={handleDateChange(setStart)}
              />
            </Field>
            <Field label="End time" style={{flex: 1, marginLeft: 10}}>
              <TimePicker
                placeholder="11:00 am"
                value={end}
                onChange={handleDateChange(setEnd)}
              />
            </Field>
          </View>
          <Field label="Remind" style={{marginTop: theme.padding}}>
            <Select />
          </Field>
        </View>
        <Button title="Create a Task" onPress={() => {}} />
      </Main>
    </SafeAreaView>
  );
};
