import 'react-native-get-random-values';
import {db} from '../db';
import {Task} from '../schemas/taskSchema';
import {v4 as uuidv4} from 'uuid';

export const createTask = (task: Omit<Task, 'id' | 'completed'>): Task => {
  let createdTask!: Task;
  const id = uuidv4();
  db.write(() => {
    createdTask = db
      .create<Task>('Task', {id, completed: false, ...task})
      .toJSON() as Task;
  });
  return createdTask;
};

export const getTasks = (): Task[] => {
  return db.objects<Task[]>('Task').toJSON() as Task[];
};

export const getTaskById = (id: string) => {
  const tasks = db.objects<Task>('Task');
  if (tasks.length === 0) {
    return null;
  }
  const task = tasks.filtered(`id: ${id}`);
  if (task.length === 0) {
    return null;
  }
  return task[0] as Task;
};

export const updatedTaskById = (
  id: string,
  data: Partial<Omit<Task, 'id'>>,
): boolean => {
  let updated = false;
  db.write(() => {
    let task = getTaskById(id);
    if (task) {
      task = {...task, ...data};
      updated = true;
    }
  });
  return updated;
};

export const deleteTask = (id: string): boolean => {
  let deleted = false;
  db.write(() => {
    let task = getTaskById(id);
    if (task) {
      db.delete(task);
      deleted = true;
    }
  });
  return deleted;
};
