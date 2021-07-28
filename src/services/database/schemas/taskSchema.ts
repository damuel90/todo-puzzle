import Database from 'realm';

export interface Task {
  id: string;
  title: string;
  deadline?: string | Date;
  startTime?: string | Date;
  endTime?: string | Date;
  remind?: string;
  repeat?: string;
  completed: boolean;
}

const TaskSchema: Database.ObjectSchema = {
  name: 'Task',
  properties: {
    id: 'string',
    title: 'string',
    deadline: 'string?',
    startTime: 'string?',
    endTime: 'string?',
    remind: 'string?',
    repeat: 'string?',
    completed: 'bool',
  },
  primaryKey: 'id',
};

export default TaskSchema;
