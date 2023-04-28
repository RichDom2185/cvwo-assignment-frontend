import { MdPostAdd } from "react-icons/md";
import { useNavigate } from "react-router";
// import { decompressFromUTF16 } from 'lz-string';

const NewTaskButton = () => {
  // const currentUserData: string | null = decompressFromUTF16(window.localStorage.getItem("user") ?? '');

  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler = (e) => {
    const dateString: string =
      new Date().toISOString().replace(/-|:|\.\d\d\d/g, "") ?? "";
    console.log(dateString);
    // if (currentUserData) { // online
    //     // TODO
    //     return;
    // }
    // offline
    // const generator = require('random-seed');
    // navigate(`/details/${generator().intBetween(0, 100000)}`);
    navigate(`/details/new`);
  };

  return (
    <button
      className="transition bg-blue-50 hover:bg-blue-100 text-blue-600 font-outfit font-medium tracking-wide px-3 py-2 rounded space-x-3 flex items-center shadow-md hover:shadow shadow-blue-100 hover:shadow-blue-300"
      onClick={handleClick}
    >
      <MdPostAdd size={24} className="inline" />
      <span>New Task</span>
    </button>
  );
};

export default NewTaskButton;
