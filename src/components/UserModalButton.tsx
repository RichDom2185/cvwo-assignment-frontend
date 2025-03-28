import { Link } from "react-router";

type Props = {
  children: React.ReactNode;
  linkTo: string;
};

const UserModalButton: React.FC<Props> = ({ children, linkTo }) => {
  return (
    <Link to={linkTo}>
      <div className="px-2 py-1 text-sm rounded-sm bg-white shadow-xs hover:shadow-sm">
        {children}
      </div>
    </Link>
  );
};

export default UserModalButton;
