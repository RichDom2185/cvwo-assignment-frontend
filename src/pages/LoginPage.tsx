import { Link } from "react-router";
import LoginForm from "../components/loginForm/LoginForm";

interface Props {
  type: string;
}

const LoginPage: React.FC<Props> = ({ type }) => {
  return (
    <div className="min-h-screen bg-gray-200 flex">
      <div className="grow flex flex-col justify-center items-center pt-6 sm:pb-6">
        <Link to="/">
          <div id="logo" className="flex space-x-4 mx-4 mb-8">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
              alt="Logo"
            />
            <h1 className="font-outfit font-bold text-5xl text-gray-700">
              thing.do
            </h1>
          </div>
        </Link>
        <LoginForm type={type} />
      </div>
    </div>
  );
};

export default LoginPage;
