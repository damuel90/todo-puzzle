import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  Task,
  createTask,
  getTasks,
  updatedTaskById,
} from '../../services/database';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    getTasks: () => {
      return getTasks();
    },
    addTask: (state, action: PayloadAction<Task>) => {
      const task = createTask(action.payload);
      state.push(task);
    },
    switchCompletedTask: (state, action: PayloadAction<string>) => {
      const task = state.find(currentTask => currentTask.id === action.payload);
      if (task) {
        updatedTaskById(task.id, {
          completed: !task.completed,
        });
        task.completed = !task.completed;
      }
    },
  },
});

export default taskSlice;
