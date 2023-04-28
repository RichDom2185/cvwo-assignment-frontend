import { FiX } from "react-icons/fi";

interface Props {
  tagName: string;
  clickFunction: React.MouseEventHandler<HTMLSpanElement>;
}

const TagChip = ({ tagName, clickFunction }: Props) => {
  return (
    <span
      className="group transition duration-100 px-3 py-2 rounded-full text-gray-600 bg-gray-100 font-outfit flex align-center items-center w-max cursor-pointer hover:bg-red-100 leading-none"
      onClick={clickFunction}
    >
      {tagName}
      <FiX
        className="transition duration-100 close-button ml-2 group-hover:text-red-500"
        size={12}
      />
    </span>
  );
};

export default TagChip;
