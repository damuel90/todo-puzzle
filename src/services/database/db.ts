import Database from 'realm';
import TaskSchema from './schemas/taskSchema';

export const db = new Database({
  schema: [TaskSchema],
});
