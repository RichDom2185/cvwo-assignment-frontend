import { BiTrash } from "react-icons/bi";

interface Props {
  callback: React.MouseEventHandler;
}

const DeleteTaskButton: React.FC<Props> = ({ callback }) => {
  return (
    <button
      className="transition bg-red-50 hover:bg-red-100 text-red-600 font-outfit font-medium tracking-wide px-3 py-2 rounded-sm space-x-3 flex items-center shadow-md hover:shadow-sm shadow-red-100 hover:shadow-red-300"
      onClick={callback}
    >
      <BiTrash size={22} className="inline" />
      <span>Delete Task</span>
    </button>
  );
};

export default DeleteTaskButton;
