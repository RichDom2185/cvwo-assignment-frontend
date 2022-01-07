import Tab from "./Tab";

const Tabbar = () => {
    return (
        <div className="flex items-center gap-x-3 bg-gray-200 px-3 rounded-t-2xl">
            <span className="font-outfit font-semibold">Viewing Tags:</span>
            <ul id="tags" className="flex space-x-2 my-2">
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Tab />
            </ul>
        </div>
    );
};

export default Tabbar;