import { compressToUTF16, decompressFromUTF16 } from "lz-string";
import { useEffect, useState } from "react";
import { TodoItem } from "../../types/todo";
import { BACKEND_URL } from "../../utils/constants";
import { useLocalStorage } from "../../utils/hooks";
import Tabbar from "./Tabbar";
import Task from "./Task";

type ResponseData = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  tag: string;
  date: string;
  time: string;
  user_id: string;
  created_at: string;
  updated_at: string;
};

const TaskList = () => {
  // const [tasks, setTasks] = useState([
  //     false, true, true, false, false, true
  // ]);

  // const testSeed : TodoItem[] = [
  //     // sample data
  //     {
  //         id: "1xcvhkxjvxcv",
  //         title: "This is the test title",
  //         description: "Test description",
  //         completed: false,
  //         tags: ["test", "abc"],
  //         reminderDate: new Date(),
  //     },
  //     {
  //         id: "2asjkbkxvhxkcv",
  //         title: "This is the title",
  //         description: "Test description",
  //         completed: true,
  //         tags: ["test", "2ef"],
  //         reminderDate: new Date(),
  //     },
  //     {
  //         id: "3kjxcv kjxv",
  //         title: "This is the test title",
  //         description: "Test description",
  //         completed: false,
  //         tags: ["test", "abc"],
  //         reminderDate: new Date(),
  //     },
  //     {
  //         id: "2aduasdiasdhascx",
  //         title: "This is the test title",
  //         description: "Test description",
  //         completed: false,
  //         tags: ["xcvxcv", "abc"],
  //         reminderDate: new Date(),
  //     },
  // ];

  const { getStorageToken } = useLocalStorage("token");
  const token = getStorageToken();

  const [todoList, setTodoList] = useState<TodoItem[]>(
    getTodoListFromLocalStorage
  );

  function getTodoListFromLocalStorage(): TodoItem[] {
    try {
      const todoListString: string | null = decompressFromUTF16(
        window.localStorage.getItem("todoData") ?? ""
      );
      if (todoListString) {
        // setTodoList(JSON.parse(todoListString) as TodoItem[]);
        return JSON.parse(todoListString) as TodoItem[];
      }
    } catch (e) {
      console.log("Error while reading todo data from local storage:", e);
    }
    return [];
  }

  async function fetchTasks(token: string) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${BACKEND_URL}/todos`, requestOptions);
    const data = await response.json();
    console.log(data);
    if (!data.error) {
      const asTodoList: TodoItem[] = (data as ResponseData[]).map(
        (item: ResponseData) => {
          const newItem: TodoItem = {
            id: item.id,
            title: item.title,
            description: item.description,
            completed: item.completed,
            tags: item.tag ? item.tag.split(",") : [],
            reminderDate: new Date(item.date ?? ""),
          };
          return newItem;
        }
      );
      setTodoList(asTodoList);
    } else {
      console.log("Error:", data.error);
    }
  }

  // Get Todos
  useEffect(() => {
    if (token) {
      fetchTasks(token);
    }
    try {
      const todoListString: string | null = decompressFromUTF16(
        window.localStorage.getItem("todoData") ?? ""
      );
      if (todoListString) {
        setTodoList(JSON.parse(todoListString) as TodoItem[]);
        // setTodoList(testSeed);
      }
    } catch (e) {
      console.log("Error while reading todo data from local storage:", e);
    }
  }, [token]);

  // Set Todos
  useEffect(() => {
    try {
      const serializedTodoList: string = compressToUTF16(
        JSON.stringify(todoList)
      );
      window.localStorage.setItem("todoData", serializedTodoList);
    } catch (e) {
      console.log("Error while saving todo data to local storage:", e);
    }
  }, [todoList]);

  // let checkedList : boolean[] = [false, true, true, false, false, true];

  // function makeChangeFunction(index: number) {
  //     return (event: React.ChangeEvent<HTMLInputElement>) => {
  //         setTasks(tasks.map((item, i) => i === index ? event.target.checked : item));
  //     }
  // }

  function toggleTodoItemState(uuid: string) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      // setTasks(tasks.map((item) => i === uuid ? event.target.checked : item));
      setTodoList(
        todoList.map((todoItem) =>
          todoItem.id === uuid
            ? { ...todoItem, completed: event.target.checked }
            : todoItem
        )
      );
    };
  }

  const [activeTabs, setActiveTabs] = useState<string[]>([]);

  // function makeUpdateFilterFunction(): (tagName: string) => React.MouseEventHandler {
  //     return (tagName: string) => (e) => {
  //         e.stopPropagation();
  //         setActiveTabs(activeTabs.includes(tagName)
  //             ? activeTabs.filter(t => t !== tagName)
  //             : [...activeTabs, tagName]);
  //     };
  // }

  const updateFilterFunction: (tagName: string) => React.MouseEventHandler =
    (tagName: string) => (e) => {
      e.stopPropagation();
      setActiveTabs(
        activeTabs.includes(tagName)
          ? activeTabs.filter((t) => t !== tagName)
          : [...activeTabs, tagName]
      );
    };

  // function hasCommonItems(arr1: string[], arr2: string[]) : boolean {
  //     return arr1.some(item => arr2.includes(item));
  // }

  return (
    <div className="bg-gray-50 rounded-2xl">
      <Tabbar activeTabs={activeTabs} updateFilter={updateFilterFunction} />
      <div className="divide-y divide-gray-200 px-3">
        {/* {tasks.map((item, index) => <Task checked={item} onChange={makeChangeFunction(index)} text="test lstesere nvbxc rfuod asdjksa c" />)} */}
        {todoList
          .filter(
            (todoItem) =>
              !activeTabs.length ||
              activeTabs.some((activeTab) => todoItem.tags?.includes(activeTab))
          )
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
        {!todoList.filter(
          (todoItem) =>
            !activeTabs.length ||
            activeTabs.some((activeTab) => todoItem.tags?.includes(activeTab))
        ).length && (
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
