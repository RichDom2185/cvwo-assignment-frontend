import { ChangeEventHandler } from "react";
import Tag from "./Tag";
import TaskCheckbox from "./TaskCheckbox";

export interface Props {
    checked: boolean;
    onChange: ChangeEventHandler;
    text?: string;
};

const defaultText: string = 'Lorem ipum dolossr sit complerete t. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, totam?';

const Task = ({ checked, onChange, text = defaultText }: Props) => {
    return (
        <div className="flex gap-2 py-2">
            <TaskCheckbox checked={checked} onChange={onChange}/>
            <div className="transition flex-grow flex flex-wrap items-center gap-4 justify-between px-4 py-3 hover:bg-gray-100 rounded-2xl cursor-pointer">
                <p className={"flex-shrink" + (checked ? ' line-through text-gray-500' : '')}>{text}</p>
                <div className="tags flex-grow flex flex-wrap space-x-2 justify-end">
                    <Tag color='blue' tagName='test Tag' checked={checked} />
                    <Tag color='blue' tagName='test Tag' checked={checked} />
                    <Tag color='blue' tagName='test Tag' checked={checked} />
                </div>
            </div>
        </div>
    );
};

export default Task;