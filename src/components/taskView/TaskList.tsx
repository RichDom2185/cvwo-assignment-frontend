import React, { useCallback, useEffect, useMemo, useState } from "react";
import { fetchTasks } from "../../api/todo";
import { TodoItem } from "../../types/todo";
import { useLocalStorage } from "../../utils/hooks";
import Tabbar from "./Tabbar";
import Task from "./Task";

const TaskList: React.FC = () => {
  const { getStorageToken } = useLocalStorage("token");
  const token = getStorageToken();

  const { getStorageTodoList, setStorageTodoList } =
    useLocalStorage("todoList");
  const [todoList, setTodoList] = useState(getStorageTodoList() ?? []);
  const handleSetTodoList = useCallback(
    (newList: TodoItem[]) => {
      setTodoList(newList);
      setStorageTodoList(newList);
    },
    [setStorageTodoList]
  );

  // Get Todos on mount
  useEffect(() => {
    // Do not reload tasks when in offline mode (no token)
    if (token !== undefined) {
      fetchTasks(token).then((tasks) => handleSetTodoList(tasks));
    }
  }, [handleSetTodoList, token]);

  function toggleTodoItemState(uuid: string) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const newList = todoList.map((todoItem) =>
        todoItem.id === uuid
          ? { ...todoItem, completed: event.target.checked }
          : todoItem
      );
      // TODO: Fire API call
      handleSetTodoList(newList);
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

  const displayedList = useMemo(() => {
    return todoList.filter(
      (todoItem) =>
        // Show all tasks if no tags are selected
        !activeTabs.length ||
        activeTabs.some((activeTab) => todoItem.tags?.includes(activeTab))
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
            <div className="transition grow flex flex-wrap items-center gap-4 justify-between px-4 py-3 rounded-2xl cursor-pointer">
              <p className="shrink text-gray-500 m-auto italic">
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
