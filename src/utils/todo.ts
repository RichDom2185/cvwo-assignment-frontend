import { TodoApiItem, TodoItem } from "../types/todo";

type Json = string;

// TODO: Deprecate this after code refactor
export const createTodoFromJson = (json: Json): TodoItem => {
  const todo = JSON.parse(json);
  return {
    id: todo.id ?? "",
    title: todo.title ?? "",
    description: todo.description ?? "",
    completed: todo.completed ?? false,
    tags: todo.tags ?? [],
    reminderDate: todo.reminderDate ? new Date(todo.reminderDate) : undefined,
    reminderTime: todo.reminderTime ? new Date(todo.reminderTime) : undefined,
  };
};

export const creatTodoFromApiParams = (todo: TodoApiItem): TodoItem => {
  return {
    id: todo.id,
    title: todo.title ?? "",
    description: todo.description ?? "",
    completed: todo.completed,
    tags: todo.tag ? todo.tag.split(",").map((tag) => tag.trim()) : [],
    reminderDate: todo.date ? new Date(todo.date) : undefined,
    reminderTime: todo.time ? new Date(todo.time) : undefined,
  };
};

export const createApiParamsFromTodo = (todo: TodoItem): Json => {
  const apiData: TodoApiItem = {
    ...todo,
    tag: todo.tags?.join(", "),
    date: todo.reminderDate?.toISOString(),
  };
  return JSON.stringify(apiData);
};
