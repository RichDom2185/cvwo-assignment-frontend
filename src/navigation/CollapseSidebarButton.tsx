import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";

interface Props {
  onClick: React.MouseEventHandler;
  collapsed: boolean;
}

const CollapseSidebarButton: React.FC<Props> = (props) => {
  return (
    <div
      className="transition flex items-center justify-center text-gray-400 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg cursor-pointer"
      onClick={props.onClick}
    >
      {props.collapsed ? (
        <HiOutlineChevronDoubleRight />
      ) : (
        <HiOutlineChevronDoubleLeft />
      )}
      {!props.collapsed && (
        <span className="grow text-center uppercase text-sm font-medium mx-2 tracking-wider leading-none select-none">
          Collapse Sidebar
        </span>
      )}
    </div>
  );
};
export default CollapseSidebarButton;
