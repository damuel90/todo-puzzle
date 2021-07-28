export const cleanObject = (obj: Record<string, any>) => {
  return Object.keys(obj).reduce((newObj: Record<string, any>, key: string) => {
    const value = obj[key];
    if (value) {
      return {...newObj, [key]: value};
    }
    return newObj;
  }, {});
};
