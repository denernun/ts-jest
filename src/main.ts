function getValueFromObject<T extends Record<string, unknown>, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj = {
  name: 'John',
  age: 30,
};

console.log(getValueFromObject(obj, 'name'));
