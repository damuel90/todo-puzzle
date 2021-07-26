import Database from 'realm';
import {TaskSchema} from './schemas/taskSchema';

export const database = new Database({
  schema: [TaskSchema],
});
