import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StatusBar, SafeAreaView, View} from 'react-native';
import {RootStackParamList} from '../navigations';
import {remindOptions, repeatOptions, theme} from '../constants';
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
import {Item} from 'react-native-picker-select';
import {ScrollView} from 'react-native-gesture-handler';
import {useToast} from 'react-native-toast-notifications';
import {createTask, Task} from '../services/database';
import {taskActions, useAppDispatch} from '../store';
import {cleanObject} from '../utils';

export interface AddTasksProps {
  navigation: StackNavigationProp<RootStackParamList, 'AddTasks'>;
}

export const AddTasksScreen: React.FC<AddTasksProps> = ({navigation}) => {
  const [title, setTitle] = useState<string>('');
  const [deadline, setDeadline] = useState<Date | undefined>(undefined);
  const [start, setStart] = useState<Date | undefined>(undefined);
  const [end, setEnd] = useState<Date | undefined>(undefined);
  const [remind, setRemind] = useState<Item | undefined>(undefined);
  const [repeat, setRepeat] = useState<Item | undefined>(undefined);
  const toast = useToast();
  const {addTask} = taskActions;
  const dispatch = useAppDispatch();

  const handleDateChange =
    (setState: React.Dispatch<React.SetStateAction<Date | undefined>>) =>
    (value: Date) => {
      setState(value);
    };

  const handleSelectChange =
    (setState: React.Dispatch<React.SetStateAction<Item | undefined>>) =>
    (value: Item) => {
      setState(value);
    };

  const handleSubmit = () => {
    if (!title) {
      return toast.show('Title is required', {type: 'warning'});
    }
    const task = cleanObject({
      title,
      deadline: deadline?.toString(),
      start: start?.toString(),
      end: end?.toString(),
      remind: remind?.value,
      repeat: repeat?.value,
    }) as Task;
    const createdTask = createTask(task);
    dispatch(addTask(createdTask));
    setTitle('');
    setDeadline(undefined);
    setStart(undefined);
    setEnd(undefined);
    setRemind(undefined);
    setRepeat(undefined);
    toast.show('Task added successfully', {type: 'success'});
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
          <IconButton
            size={18}
            iconName="chevron-back"
            onPress={() => navigation.navigate('Home')}
          />
        }
        center={<Typography isBold>Add Task</Typography>}
      />
      <ScrollView>
        <Main>
          <View style={{flex: 1}}>
            <Field label="Title">
              <Input
                value={title}
                placeholder="Design team meeting"
                onChangeText={value => setTitle(value)}
              />
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
              <Select
                placeholder="10 minutes early"
                value={remind}
                onChange={handleSelectChange(setRemind)}
                options={remindOptions}
              />
            </Field>
            <Field label="Repeat" style={{marginTop: theme.padding}}>
              <Select
                placeholder="Weekly"
                value={repeat}
                onChange={handleSelectChange(setRepeat)}
                options={repeatOptions}
              />
            </Field>
          </View>
          <Button
            title="Create a Task"
            style={{marginTop: theme.padding}}
            onPress={handleSubmit}
          />
        </Main>
      </ScrollView>
    </SafeAreaView>
  );
};
