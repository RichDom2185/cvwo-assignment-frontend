import React from "react";
import { BiSave } from "react-icons/bi";

interface Props {
  callback: React.MouseEventHandler;
}

const SaveTaskButton: React.FC<Props> = ({ callback }) => {
  return (
    <button
      className="transition border border-blue-500 bg-blue-50 hover:bg-blue-500 text-blue-600 hover:text-white font-outfit font-medium tracking-wide px-3 py-2 rounded space-x-2 flex items-center shadow-md hover:shadow shadow-blue-300 hover:shadow-blue-300"
      onClick={callback}
    >
      <BiSave size={22} className="inline" />
      <span>Save Task</span>
    </button>
  );
};

export default SaveTaskButton;
