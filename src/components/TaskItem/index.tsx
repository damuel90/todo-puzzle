import React from 'react';
import {Typography} from '../Typography';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {theme} from '../../constants';
import {TaskItemContainer} from './TaskItemContainer';
import {Task, updatedTaskById} from '../../services/database';
import {taskActions, useAppDispatch} from '../../store';
import {useToast} from 'react-native-toast-notifications';

export interface TaskItemProps extends Task {}

export const TaskItem: React.FC<TaskItemProps> = ({id, title, completed}) => {
  const {switchCompletedTask} = taskActions;
  const dispatch = useAppDispatch();
  const toast = useToast();
  let bouncyCheckboxRef: BouncyCheckbox | null = null;

  const handleCheckbox = (isChecked?: boolean | undefined) => {
    const updated = updatedTaskById(id, {completed: isChecked});
    if (!updated) {
      toast.show('An error occurred while updating the task', {type: 'danger'});
    }
    dispatch(switchCompletedTask(id));
  };

  return (
    <TaskItemContainer
      activeOpacity={0.5}
      onPress={() => bouncyCheckboxRef?.onPress()}>
      <BouncyCheckbox
        ref={(ref: any) => (bouncyCheckboxRef = ref)}
        fillColor={completed ? 'tomato' : 'orange'}
        iconStyle={{
          borderRadius: theme.borderRadius / 2,
          borderColor: completed ? 'transparent' : 'orange',
        }}
        isChecked={completed}
        onPress={handleCheckbox}
      />
      <Typography size={16}>{title}</Typography>
    </TaskItemContainer>
  );
};
