import { BiSave } from "react-icons/bi";

interface Props {
  callback: React.MouseEventHandler;
}

const SaveTaskButton: React.FC<Props> = ({ callback }) => {
  return (
    <button
      className="transition bg-blue-50 hover:bg-blue-100 text-blue-600 font-outfit font-medium tracking-wide px-3 py-2 rounded-sm space-x-2 flex items-center shadow-md hover:shadow-sm shadow-blue-200 hover:shadow-blue-300"
      onClick={callback}
    >
      <BiSave size={22} className="inline" />
      <span>Save Task</span>
    </button>
  );
};

export default SaveTaskButton;
