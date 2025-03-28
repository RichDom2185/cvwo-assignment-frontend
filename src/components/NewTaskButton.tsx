import { MdPostAdd } from "react-icons/md";
import { useNavigate } from "react-router";

const NewTaskButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      className="transition bg-blue-50 hover:bg-blue-100 text-blue-600 font-outfit font-medium tracking-wide px-3 py-2 rounded-sm space-x-3 flex items-center shadow-md hover:shadow-sm shadow-blue-100 hover:shadow-blue-300"
      onClick={() => navigate("/details/new")}
    >
      <MdPostAdd size={24} className="inline" />
      <span>New Task</span>
    </button>
  );
};

export default NewTaskButton;
