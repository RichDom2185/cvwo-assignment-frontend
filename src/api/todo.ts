import { TodoApiItem } from "../types/todo";
import { BACKEND_URL } from "../utils/constants";
import { creatTodoFromApiParams } from "../utils/todo";

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
