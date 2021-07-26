import Database from 'realm';

export const TaskSchema: Database.ObjectSchema = {
  name: 'Task',
  properties: {
    id: 'string',
    title: 'string',
    deadline: 'string',
    startTime: 'string',
    endTime: 'string',
    remind: 'string',
    repeat: 'string',
  },
  primaryKey: 'id',
};
