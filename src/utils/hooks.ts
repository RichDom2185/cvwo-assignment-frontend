import { compressToUTF16, decompressFromUTF16 } from "lz-string";
import { useCallback } from "react";
import { LocalStorage } from "../types/localStorage";

type MakeGetterTypes<T extends Record<string, any>> = {
  [key in keyof T as `getStorage${Capitalize<key & string>}`]: () =>
    | T[key]
    | undefined;
};

type MakeSetterTypes<T extends Record<string, any>> = {
  [key in keyof T as `setStorage${Capitalize<key & string>}`]: (
    value: T[key]
  ) => void;
};

export const useLocalStorage = <T extends keyof LocalStorage>(
  key: T
): MakeGetterTypes<Pick<LocalStorage, T>> &
  MakeSetterTypes<Pick<LocalStorage, T>> => {
  const camelCaseKey = key.replace(/^\w/, (c) =>
    c.toUpperCase()
  ) as Capitalize<T>;
  const getterKey: `getStorage${Capitalize<T>}` = `getStorage${camelCaseKey}`;
  const setterKey: `setStorage${Capitalize<T>}` = `setStorage${camelCaseKey}`;
  // TODO: Investigate weird inferred type
  const exports = {
    [getterKey]: useCallback((): LocalStorage[T] | undefined => {
      const value = window.localStorage.getItem(key);
      return value === null
        ? undefined
        : JSON.parse(decompressFromUTF16(value));
    }, [key]),
    [setterKey]: useCallback(
      (value: LocalStorage[T]): void => {
        const json = JSON.stringify(value);
        window.localStorage.setItem(key, compressToUTF16(json));
      },
      [key]
    ),
  };
  // TODO: Investigate if we can remove the typecast
  return exports as any;
};
