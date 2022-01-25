import { BiTrash } from 'react-icons/bi';

interface Props {
    callback: React.MouseEventHandler;
};

const DeleteTaskButton = ({ callback }: Props) => {
    return (
        <button className="transition bg-blue-50 hover:bg-blue-100 text-blue-600 font-outfit font-medium tracking-wide px-3 py-2 rounded space-x-3 flex items-center shadow-md hover:shadow shadow-blue-100 hover:shadow-blue-300" onClick={callback}>
            <BiTrash size={22} className='inline' />
            <span>Delete Task</span>
        </button>
    )
};

export default DeleteTaskButton;