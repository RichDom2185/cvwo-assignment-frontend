import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  linkTo: string;
}

const UserModalButton: React.FC<Props> = ({ children, linkTo }) => {
  return (
    <Link to={linkTo}>
      <div className="px-2 py-1 text-sm rounded bg-white shadow-sm hover:shadow">
        {children}
      </div>
    </Link>
  );
};

export default UserModalButton;
