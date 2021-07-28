import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {SectionList, StatusBar, View} from 'react-native';
import {RootStackParamList} from '../navigations';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Badge,
  Button,
  Header,
  IconButton,
  TaskItem,
  Typography,
} from '../components';
import {theme} from '../constants';
import {useAppSelector} from '../store';
import {useMemo} from 'react';
import {getSectionedTasks, SectionedTasks} from '../utils';

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const tasks = useAppSelector(state => state.tasks);

  const DATA = useMemo<SectionedTasks[]>(() => {
    const reversedTask = [...tasks].reverse();
    return getSectionedTasks(reversedTask);
  }, [tasks]);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme.colors.commons.white}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.commons.white}
      />
      <Header
        center={<Typography isBold>To-Do App</Typography>}
        right={
          <>
            <IconButton
              size={20}
              iconName="search-outline"
              color={theme.colors.textInput}
              onPress={() => {}}
              style={{marginRight: 5}}
            />
            <Badge topOffset={3} rigthOffset={5} size={7}>
              <IconButton
                size={20}
                iconName="notifications-outline"
                color={theme.colors.textInput}
                onPress={() => {}}
              />
            </Badge>
            <IconButton
              size={20}
              iconName="menu-outline"
              color={theme.colors.textInput}
              onPress={() => {}}
              style={{marginLeft: 5}}
            />
          </>
        }
      />
      <View style={{flex: 1}}>
        <SectionList
          style={{paddingHorizontal: theme.padding}}
          sections={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TaskItem {...item} />}
          renderSectionHeader={({section: {title, data}}) => (
            <>
              <Typography size={20} isBold style={{marginTop: theme.padding}}>
                {title}
              </Typography>
              {data.length === 0 && (
                <Typography
                  size={15}
                  color={theme.colors.commons.gray}
                  style={{marginTop: theme.padding / 2}}>
                  There are no tasks in this section.
                </Typography>
              )}
            </>
          )}
        />
      </View>
      <Button
        title="Add a Task"
        style={{margin: theme.padding}}
        onPress={() => navigation.navigate('AddTasks')}
      />
    </SafeAreaView>
  );
};
