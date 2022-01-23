import { HiOutlineChevronLeft } from "react-icons/hi";

const BackButton = () => {
  const clickFunction : React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return <button className="transition flex items-center justify-center gap-x-1 hover:text-gray-700 hover:bg-gray-100 px-3 py-2 hover:shadow-md rounded-lg cursor-pointer" onClick={clickFunction}>
    <HiOutlineChevronLeft />
    <span>Back to Tasks List</span>
  </button>;
};

export default BackButton;