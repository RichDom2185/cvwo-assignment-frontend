import { useState, useEffect } from "react";
import Tabbar from "./Tabbar";
import Task from "./Task";
import { TodoItem } from "../../App";
import { compressToUTF16, decompressFromUTF16 } from "lz-string";

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

    const [todoList, setTodoList] = useState<TodoItem[]>(getTodoListFromLocalStorage);

    function getTodoListFromLocalStorage() : TodoItem[] {
        try {
            const todoListString: string | null = decompressFromUTF16(window.localStorage.getItem('todoData') ?? '');
            if (todoListString) {
                // setTodoList(JSON.parse(todoListString) as TodoItem[]);
                return JSON.parse(todoListString) as TodoItem[];
            }
        } catch (e) {
            console.log('Error while reading todo data from local storage:', e);
        }
        return [];
    }

    useEffect(() => {
        try {
            const todoListString: string | null = decompressFromUTF16(window.localStorage.getItem('todoData') ?? '');
            if (todoListString) {
                setTodoList(JSON.parse(todoListString) as TodoItem[]);
                // setTodoList(testSeed);
            }
        } catch (e) {
            console.log('Error while reading todo data from local storage:', e);
        }
    }, []);

    useEffect(() => {
        try {
            const serializedTodoList: string = compressToUTF16(JSON.stringify(todoList));
            window.localStorage.setItem('todoData', serializedTodoList);
        } catch (e) {
            console.log('Error while saving todo data to local storage:', e);
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
            setTodoList(todoList.map(
                (todoItem) => todoItem.id === uuid
                    ? { ...todoItem, completed: event.target.checked }
                    : todoItem)
            );
        }
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

    const updateFilterFunction: (tagName: string) => React.MouseEventHandler = (tagName: string) => (e) => {
        e.stopPropagation();
        setActiveTabs(activeTabs.includes(tagName)
            ? activeTabs.filter(t => t !== tagName)
            : [...activeTabs, tagName]);
    };

    return (
        <div className="bg-gray-50 rounded-2xl">
            <Tabbar activeTabs={activeTabs} updateFilter={updateFilterFunction}/>
            <div className="divide-y divide-gray-200 px-3">
                {/* {tasks.map((item, index) => <Task checked={item} onChange={makeChangeFunction(index)} text="test lstesere nvbxc rfuod asdjksa c" />)} */}
                {todoList.map((todoItem) => <Task
                    id={todoItem.id}
                    checked={todoItem.completed}
                    onChange={toggleTodoItemState(todoItem.id)}
                    title={todoItem.title}
                    tags={todoItem.tags}
                    updateFilter={updateFilterFunction} />)}
            </div>
        </div>
    );
};

export default TaskList;