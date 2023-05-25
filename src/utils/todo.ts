import { TodoItem } from "../types/todo";

export const createTodoFromJson = (json: string): TodoItem => {
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
