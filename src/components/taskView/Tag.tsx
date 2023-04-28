export interface Props {
  tagName: string;
  color: string;
  checked: boolean;
  callback?: React.MouseEventHandler;
}

const Tag = (props: Props) => {
  const bgColor: string = props.checked ? "gray" : props.color;

  const onClick = props.callback ?? (() => {});

  function generateColorClasses(color: string): string {
    switch (color) {
      case "gray":
        return " bg-gray-100 hover:bg-gray-200 border-gray-300";
      case "red":
        return " bg-red-100 hover:bg-red-200 border-red-300";
      case "orange":
        return " bg-orange-100 hover:bg-orange-200 border-orange-300";
      case "amber":
        return " bg-amber-100 hover:bg-amber-200 border-amber-300";
      case "yellow":
        return " bg-yellow-100 hover:bg-yellow-200 border-yellow-300";
      case "lime":
        return " bg-lime-100 hover:bg-lime-200 border-lime-300";
      case "green":
        return " bg-green-100 hover:bg-green-200 border-green-300";
      case "emerald":
        return " bg-emerald-100 hover:bg-emerald-200 border-emerald-300";
      case "teal":
        return " bg-teal-100 hover:bg-teal-200 border-teal-300";
      case "cyan":
        return " bg-cyan-100 hover:bg-cyan-200 border-cyan-300";
      case "sky":
        return " bg-sky-100 hover:bg-sky-200 border-sky-300";
      case "blue":
        return " bg-blue-100 hover:bg-blue-200 border-blue-300";
      case "indigo":
        return " bg-indigo-100 hover:bg-indigo-200 border-indigo-300";
      case "violet":
        return " bg-violet-100 hover:bg-violet-200 border-violet-300";
      case "purple":
        return " bg-purple-100 hover:bg-purple-200 border-purple-300";
      case "fuchsia":
        return " bg-fuchsia-100 hover:bg-fuchsia-200 border-fuchsia-300";
      case "pink":
        return " bg-pink-100 hover:bg-pink-200 border-pink-300";
      case "rose":
        return " bg-rose-100 hover:bg-rose-200 border-rose-300";
      default:
        return "";
    }
  }

  return (
    <div
      className={
        "tag transition flex justify-center rounded-full text-sm font-medium select-none py-1 px-2 border" +
        generateColorClasses(bgColor) +
        (props.checked ? " text-gray-500" : "")
      }
      onClick={onClick}
    >
      <span>{props.tagName}</span>
    </div>
  );
};

export default Tag;
