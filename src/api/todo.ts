import { TodoApiItem, TodoItem } from "../types/todo";
import { BACKEND_URL } from "../utils/constants";
import { creatTodoFromApiParams, createApiParamsFromTodo } from "../utils/todo";

// list + read; TODO: Decouple
export async function fetchTasks(token: string | undefined) {
  if (!token) {
    return [];
  }
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${BACKEND_URL}/todos`, requestOptions);
  const data = (await response.json()) as TodoApiItem[];
  // TODO: Handle errors pending refactor
  const tasks = data.map(creatTodoFromApiParams);
  return tasks;
}

// create
export async function addTodo(todo: TodoItem, token: string) {
  const todoString = createApiParamsFromTodo(todo);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: todoString,
  };
  await fetch(`${BACKEND_URL}/todos`, requestOptions);
}

// update
export async function updateTodo(todo: TodoItem, token: string) {
  const todoString = createApiParamsFromTodo(todo);
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: todoString,
  };
  await fetch(`${BACKEND_URL}/todos/${todo.id}`, requestOptions);
}

// delete
export async function deleteTodo(todo: TodoItem, token: string) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  await fetch(`${BACKEND_URL}/todos/${todo.id}`, requestOptions);
}
