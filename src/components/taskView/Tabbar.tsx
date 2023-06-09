import React from "react";
import Tab from "./Tab";

interface Props {
  activeTabs: string[];
  updateFilter: (tagName: string) => React.MouseEventHandler;
}

const Tabbar: React.FC<Props> = ({ activeTabs, updateFilter }) => {
  return (
    <div className="flex items-center gap-x-3 bg-blue-200 shadow-sm shadow-blue-300 px-3 rounded-t-2xl">
      <span className="font-outfit">Viewing:</span>
      <ul id="tags" className="flex items-center space-x-2 my-2">
        {activeTabs.map((tab, index) => (
          <Tab
            key={index}
            tabName={tab}
            isColored={true}
            callback={updateFilter(tab)}
          />
        ))}
        {!activeTabs.length && (
          <>
            <Tab tabName="All" disabled={true} />
            <span className="text-sm font-light font-outfit italic text-blue-500">
              Click on any tag below to toggle filters
            </span>
          </>
        )}
      </ul>
    </div>
  );
};

export default Tabbar;
