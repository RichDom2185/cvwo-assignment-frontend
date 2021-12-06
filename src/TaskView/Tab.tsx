import { MouseEventHandler } from "react";

const Tab = () => {

    return (
        <li className="transition duration-75 px-2 rounded-md font-outfit font-seibold text-gray-600 cursor-pointer select-none"
            onClick={(e) => {
                // e.preventDefault();
                e.currentTarget.classList.toggle("bg-gray-400");
                // console.log(e.currentTarget);
            }}>
            Test
            </li>
    );
};

export default Tab;