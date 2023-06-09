import React from "react";
import { useNavigate } from "react-router-dom";
import { colorFromTag } from "../../utils/tag";
import Tag from "./Tag";
import TaskCheckbox from "./TaskCheckbox";

export interface Props {
  id: string;
  checked: boolean;
  onChange: React.ChangeEventHandler;
  title?: string;
  tags?: string[];
  updateFilter: (tagName: string) => React.MouseEventHandler;
}

const defaultText: string = "Untitled To-Do";

function onClickHandler(uuid: string): React.MouseEventHandler<HTMLDivElement> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  return () => {
    navigate(`/details/${uuid}`);
  };
}

const Task: React.FC<Props> = ({
  id,
  checked,
  onChange,
  title: text = defaultText,
  tags,
  updateFilter,
}) => {
  return (
    <div className="flex gap-2 py-2">
      <TaskCheckbox checked={checked} onChange={onChange} />
      <div
        className="transition flex-grow flex flex-wrap items-center gap-4 justify-between px-4 py-3 hover:bg-gray-100 rounded-2xl cursor-pointer"
        onClick={onClickHandler(id)}
      >
        <p
          className={
            "flex-shrink" + (checked ? " line-through text-gray-500" : "")
          }
        >
          {text}
        </p>
        <div className="tags flex-grow flex flex-wrap space-x-2 justify-end">
          {tags &&
            tags.map((tag, index) => (
              <Tag
                key={index}
                color={colorFromTag(tag)}
                tagName={tag}
                checked={checked}
                callback={updateFilter(tag)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
