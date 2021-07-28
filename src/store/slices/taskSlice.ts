import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Task} from '../../services/database';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    initTasks: (_, action: PayloadAction<Task[]>) => {
      return action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    switchCompletedTask: (state, action: PayloadAction<string>) => {
      const task = state.find(currentTask => currentTask.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export default taskSlice;
