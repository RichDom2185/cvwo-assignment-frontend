import { ChangeEvent, useState } from "react";
import Tabbar from "./Tabbar";
import Task from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState([
        false, true, true, false, false, true
    ]);

    // let checkedList : boolean[] = [false, true, true, false, false, true];

    function makeChangeFunction(index: number) {
        return (event: ChangeEvent<HTMLInputElement>) => {
            // let newTasks = tasks.slice();
            // newTasks[index] = event.target.checked;
            // setTasks(newTasks);
            setTasks(tasks.map((item, i) => i === index ? event.target.checked : item));
        }
    }

    return (
        <div className="bg-gray-50 rounded-2xl">
            <Tabbar />
            <div className="divide-y divide-gray-200 px-3">
                { tasks.map((item, index) => <Task checked={item} onChange={makeChangeFunction(index)} text="test lstesere nvbxc rfuod asdjksa c" />)}
            </div>
        </div>
    );
};

export default TaskList;