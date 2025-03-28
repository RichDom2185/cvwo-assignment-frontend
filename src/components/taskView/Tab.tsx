import { colorFromTag, generateColorClasses } from "../../utils/tag";

type Props = {
  tabName: string;
  disabled?: boolean;
  isColored?: boolean;
  callback?: React.MouseEventHandler;
};

const Tab: React.FC<Props> = ({
  tabName,
  disabled = false,
  isColored = false,
  callback = () => {},
}) => {
  return (
    <li
      className={
        "px-2 rounded-sm bg-gray-100 text-gray-600 cursor-pointer select-none " +
        (isColored ? generateColorClasses(colorFromTag(tabName)) : "") +
        (disabled
          ? ""
          : " hover:bg-red-200 hover:text-red-700 hover:line-through")
      }
      onClick={(e) => !disabled && callback(e)}
    >
      {tabName}
    </li>
  );
};

export default Tab;
