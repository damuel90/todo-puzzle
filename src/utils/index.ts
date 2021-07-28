import {Task} from '../services/database';

export const cleanObject = (obj: Record<string, any>) => {
  return Object.keys(obj).reduce((newObj: Record<string, any>, key: string) => {
    const value = obj[key];
    if (value) {
      return {...newObj, [key]: value};
    }
    return newObj;
  }, {});
};

export interface SectionedTasks {
  title: string;
  data: Task[];
}

export const getSectionedTasks = (tasks: Task[]) => {
  return tasks.reduce(
    (list: SectionedTasks[], task: Task) => {
      if (task.completed) {
        let {data} = list[0];
        data.push(task);
        return [{...list[0], data}, list[1]];
      } else {
        let {data} = list[1];
        data.push(task);
        return [list[0], {...list[1], data}];
      }
    },
    [
      {title: 'Completed Taks', data: []},
      {title: 'Pending Taks', data: []},
    ] as SectionedTasks[],
  );
};
