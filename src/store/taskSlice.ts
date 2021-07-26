import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  Task,
  createTask,
  getTasks,
  updatedTaskById,
  deleteTask,
} from '../services/database';

const initialState: Task[] = [];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTasks: state => {
      let savedTask = getTasks();
      return [...state, ...savedTask];
    },
    addTask: (state, action: PayloadAction<Task>) => {
      const task = createTask(action.payload);
      return [...state, task];
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const removed = deleteTask(action.payload);
      if (removed) {
        return state.filter(task => task.id !== action.payload);
      } else {
        return state;
      }
    },
    checkTask: (
      state,
      {payload}: PayloadAction<{id: string; completed: boolean}>,
    ) => {
      const updated = updatedTaskById(payload.id, {
        completed: payload.completed,
      });
      if (updated) {
        return state.reduce((list: Task[], curretTask: Task) => {
          if (curretTask.id === payload.id) {
            curretTask.completed = payload.completed;
            return [...list, curretTask];
          }
          return list;
        }, []);
      } else {
        return state;
      }
    },
  },
});

export default taskSlice;
