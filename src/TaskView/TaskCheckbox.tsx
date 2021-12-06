import { ChangeEventHandler } from "react";

export interface Props {
    checked: boolean;
    onChange: ChangeEventHandler;
};

const TaskCheckbox = ({ checked, onChange }: Props) => {
    return checked
        ? <input type="checkbox" className="inline mx-2" onChange={onChange} defaultChecked />
        : <input type="checkbox" className="inline mx-2" onChange={onChange} />;
};

export default TaskCheckbox
    ;