import { TodoApiItem, TodoItem } from "../types/todo";

type JsonString = string;

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

export const createApiParamsFromTodo = (todo: TodoItem): JsonString => {
  const apiData: TodoApiItem = {
    ...todo,
    tag: todo.tags?.join(", "),
    date: todo.reminderDate?.toISOString(),
  };
  return JSON.stringify(apiData);
};
