interface Props {
    tabName: string;
    disabled?: boolean;
    callback?: React.MouseEventHandler;
}

const Tab = ({ tabName, disabled = false, callback = () => {} }: Props) => {
    // {e.currentTarget.classList.toggle("bg-gray-300");}
    return (
        <li className={"px-2 rounded bg-gray-100 text-gray-600 cursor-pointer select-none" + (disabled ? '' : ' hover:bg-red-200 hover:text-red-700 hover:line-through')}
            onClick={(e) => !disabled && callback(e)}>
            {tabName}
        </li>
    );
};

export default Tab;