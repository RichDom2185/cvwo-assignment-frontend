interface Props {
  tabName: string;
  disabled?: boolean;
  isColored?: boolean;
  callback?: React.MouseEventHandler;
}

const Tab = ({
  tabName,
  disabled = false,
  isColored = false,
  callback = () => {},
}: Props) => {
  const colors: string[] = [
    "gray",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchscia",
    "pink",
    "rose",
  ];

  const generator = require("random-seed");

  function colorFromTag(tag: string): string {
    const index: number = generator(tag).intBetween(0, colors.length - 1);
    return colors[index];
  }

  function generateColorClasses(color: string): string {
    switch (color) {
      case "gray":
        return " bg-gray-100";
      case "red":
        return " bg-red-100";
      case "orange":
        return " bg-orange-100";
      case "amber":
        return " bg-amber-100";
      case "yellow":
        return " bg-yellow-100";
      case "lime":
        return " bg-lime-100";
      case "green":
        return " bg-green-100";
      case "emerald":
        return " bg-emerald-100";
      case "teal":
        return " bg-teal-100";
      case "cyan":
        return " bg-cyan-100";
      case "sky":
        return " bg-sky-100";
      case "blue":
        return " bg-blue-100";
      case "indigo":
        return " bg-indigo-100";
      case "violet":
        return " bg-violet-100";
      case "purple":
        return " bg-purple-100";
      case "fuchsia":
        return " bg-fuchsia-100";
      case "pink":
        return " bg-pink-100";
      case "rose":
        return " bg-rose-100";
      default:
        return "";
    }
  }

  return (
    <li
      className={
        "px-2 rounded bg-gray-100 text-gray-600 cursor-pointer select-none" +
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
