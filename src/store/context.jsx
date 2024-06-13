import { createContext, useContext } from 'react';

export const MyData = createContext();

export function UseMyData() {
  return useContext(MyData);
}
