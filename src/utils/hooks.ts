import { LocalStorage } from "../types/localStorage";

type MakeGetterTypes<T extends Record<string, any>> = {
  [key in keyof T as `getStorage${Capitalize<key & string>}`]: () => T[key];
};

type MakeSetterTypes<T extends Record<string, any>> = {
  [key in keyof T as `setStorage${Capitalize<key & string>}`]: (
    value: T[key]
  ) => void;
};

export const useLocalStorage = <T extends keyof LocalStorage>(
  key: T
): Pick<
  MakeGetterTypes<LocalStorage> & MakeSetterTypes<LocalStorage>,
  `getStorage${Capitalize<T>}` | `setStorage${Capitalize<T>}`
> => {
  const camelCaseKey = key.replace(/^\w/, (c) =>
    c.toUpperCase()
  ) as Capitalize<T>;
  const getterKey: `getStorage${Capitalize<T>}` = `getStorage${camelCaseKey}`;
  const setterKey: `setStorage${Capitalize<T>}` = `setStorage${camelCaseKey}`;
  // TODO: Investigate weird inferred type
  const exports = {
    [getterKey]: (): LocalStorage[T] | undefined => {
      const value = window.localStorage.getItem(key);
      return value === null ? undefined : JSON.parse(value);
    },
    [setterKey]: (value: LocalStorage[T]): void => {
      const json = JSON.stringify(value);
      window.localStorage.setItem(key, json);
    },
  };
  // TODO: Investigate if we can remove the typecast
  return exports as any;
};
