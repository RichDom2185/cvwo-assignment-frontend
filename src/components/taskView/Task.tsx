import Tag from "./Tag";
import TaskCheckbox from "./TaskCheckbox";
import { useNavigate } from "react-router-dom";

export interface Props {
    id: string;
    checked: boolean;
    onChange: React.ChangeEventHandler;
    title?: string;
    tags?: string[];
    updateFilter: (tagName: string) => React.MouseEventHandler;
};

const defaultText: string = 'Untitled To-Do';

const colors: string[] = ['gray', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan',
    'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchscia', 'pink', 'rose'];

const generator = require('random-seed');

function colorFromTag(tag: string): string {
    // const hash: number = tag.charCodeAt(0) + tag.charCodeAt(tag.length - 1);
    // return colors[hash % colors.length];
    const index: number = generator(tag).intBetween(0, colors.length - 1);
    return colors[index];
}

function onClickHandler(uuid: string): React.MouseEventHandler<HTMLDivElement> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    return () => {
        navigate(`/details/${uuid}`);
    };
}

const Task = ({ id, checked, onChange, title: text = defaultText, tags, updateFilter }: Props) => {
    return (
        <div className="flex gap-2 py-2">
            <TaskCheckbox checked={checked} onChange={onChange} />
            <div className="transition flex-grow flex flex-wrap items-center gap-4 justify-between px-4 py-3 hover:bg-gray-100 rounded-2xl cursor-pointer" onClick={onClickHandler(id)}>
                <p className={"flex-shrink" + (checked ? ' line-through text-gray-500' : '')}>{text}</p>
                <div className="tags flex-grow flex flex-wrap space-x-2 justify-end">
                    {tags && tags.map((tag, index) => <Tag key={index} color={colorFromTag(tag)} tagName={tag} checked={checked} callback={updateFilter(tag)} />)}
                </div>
            </div>
        </div>
    );
};

export default Task;