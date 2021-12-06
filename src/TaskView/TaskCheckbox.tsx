import { ChangeEventHandler } from "react";

export interface Props {
    checked: boolean;
    onChange: ChangeEventHandler;
};

const TaskCheckbox = ({ checked, onChange }: Props) => {
    return checked
        ? <input type="checkbox" className="inline mx-2" onChange={onChange} title="Mark not done" defaultChecked />
        : <input type="checkbox" className="inline mx-2" onChange={onChange} title="Mark as done" />;
};

export default TaskCheckbox
    ;