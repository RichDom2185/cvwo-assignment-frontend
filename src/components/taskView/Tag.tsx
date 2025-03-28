import { TagColor } from "../../types/tag";
import { generateColorClasses } from "../../utils/tag";

type Props = {
  tagName: string;
  color: TagColor;
  checked: boolean;
  callback?: React.MouseEventHandler;
};

const Tag: React.FC<Props> = (props) => {
  const bgColor: TagColor = props.checked ? TagColor.GRAY : props.color;

  const onClick = props.callback ?? (() => {});

  return (
    <div
      className={
        "tag transition flex justify-center rounded-full text-sm font-medium select-none py-1 px-2 border " +
        generateColorClasses(bgColor, true, true) +
        (props.checked ? " text-gray-500" : "")
      }
      onClick={onClick}
    >
      <span>{props.tagName}</span>
    </div>
  );
};

export default Tag;
