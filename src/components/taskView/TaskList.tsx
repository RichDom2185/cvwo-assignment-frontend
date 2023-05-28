import { useEffect, useMemo, useState } from "react";
import { TodoApiItem } from "../../types/todo";
import { BACKEND_URL } from "../../utils/constants";
import { useLocalStorage } from "../../utils/hooks";
import { creatTodoFromApiParams } from "../../utils/todo";
import Tabbar from "./Tabbar";
import Task from "./Task";

const TaskList = () => {
  const { getStorageToken } = useLocalStorage("token");
  const token = getStorageToken();

  const { getStorageTodoList, setStorageTodoList } =
    useLocalStorage("todoList");
  const todoList = useMemo(
    () => getStorageTodoList() ?? [],
    [getStorageTodoList]
  );
  const [displayedList, setDisplayedList] = useState(todoList);

  async function fetchTasks(token: string | undefined) {
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
    console.log(data);
    // TODO: Handle errors pending refactor
    const tasks = data.map(creatTodoFromApiParams);

    // TODO: Set this outside (no side effects)
    setStorageTodoList(tasks);
    setDisplayedList(tasks);
    return tasks;
  }

  // Get Todos
  useEffect(() => {
    fetchTasks(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // Set Todos
  // useEffect(() => {
  //   setStorageTodoList(todoList);
  // }, [setStorageTodoList, todoList]);

  function toggleTodoItemState(uuid: string) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const newList = todoList.map((todoItem) =>
        todoItem.id === uuid
          ? { ...todoItem, completed: event.target.checked }
          : todoItem
      );
      // TODO: Fire API call
      setStorageTodoList(newList);
    };
  }

  const [activeTabs, setActiveTabs] = useState<string[]>([]);
  const updateFilterFunction: (tagName: string) => React.MouseEventHandler =
    (tagName: string) => (e) => {
      e.stopPropagation();
      setActiveTabs(
        activeTabs.includes(tagName)
          ? activeTabs.filter((t) => t !== tagName)
          : [...activeTabs, tagName]
      );
    };
  useEffect(() => {
    setDisplayedList(
      todoList.filter(
        (todoItem) =>
          // Show all tasks if no tags are selected
          !activeTabs.length ||
          activeTabs.some((activeTab) => todoItem.tags?.includes(activeTab))
      )
    );
  }, [activeTabs, todoList]);

  return (
    <div className="bg-gray-50 rounded-2xl">
      <Tabbar activeTabs={activeTabs} updateFilter={updateFilterFunction} />
      <div className="divide-y divide-gray-200 px-3">
        {displayedList
          // .sort((a, b) => a.completed === b.completed ? 0 : a.completed ? -1 : 1)
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((todoItem, index) => (
            <Task
              key={index}
              id={todoItem.id}
              checked={todoItem.completed}
              onChange={toggleTodoItemState(todoItem.id)}
              title={todoItem.title}
              tags={todoItem.tags}
              updateFilter={updateFilterFunction}
            />
          ))}
        {!displayedList.length && (
          <div className="flex gap-2 py-2">
            <div className="transition flex-grow flex flex-wrap items-center gap-4 justify-between px-4 py-3 rounded-2xl cursor-pointer">
              <p className="flex-shrink text-gray-500 m-auto italic">
                No tasks found
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
