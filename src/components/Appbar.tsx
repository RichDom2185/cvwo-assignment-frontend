import React from "react";
import { useLocation } from "react-router";
import StatusIndicator from "./StatusIndicator";
import UserAvatar from "./UserAvatar";
import BackButton from "./detailsView/BackButton";

const Appbar: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex text-gray-500 font-outfit justify-between">
      <div className="m-5">
        {location.pathname.match("^/details/") && <BackButton />}
        {location.pathname.match("^/$") && <StatusIndicator />}
      </div>
      <div className="m-5">
        <UserAvatar />
      </div>
    </div>
  );
};

export default Appbar;
