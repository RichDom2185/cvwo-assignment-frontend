import { Token } from "./auth";
import { TodoItem } from "./todo";
import { UserData } from "./user";

export type LocalStorage = {
  currentUser: UserData;
  token: Token;
  todoList: Array<TodoItem>;
};
