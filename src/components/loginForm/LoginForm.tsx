import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { FaApple, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { UserApiData, UserData } from "../../types/user";
import { BACKEND_URL } from "../../utils/constants";
import { useLocalStorage } from "../../utils/hooks";
import FormTextInputElement from "./FormTextInputElement";
import LogoButton from "./LogoButton";

type Props = {
  type: "login" | "signup";
};

const LoginForm: React.FC<Props> = ({ type }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { setStorageToken } = useLocalStorage("token");
  const { setStorageCurrentUser } = useLocalStorage("currentUser");

  const handleChange: ChangeEventHandler = (e) => {
    const element = e.target as HTMLInputElement;
    setForm({
      ...form,
      [element.name]: element.value,
    });
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    fetchUser();
  };

  const navigate = useNavigate();

  async function fetchUser() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };
    const response = await fetch(
      `${BACKEND_URL}/${type === "login" ? "login" : "users"}`,
      requestOptions
    );
    const data: UserApiData = await response.json();
    const loggedInUser: UserData = {
      id: data.user.id,
      name: data.user.name,
      email: data.user.email,
    };
    setStorageCurrentUser(loggedInUser);
    setStorageToken(data.token);

    navigate("/");

    // TODO: Handle errors pending refactor
  }

  const handleSocialLogin: React.MouseEventHandler<HTMLButtonElement> = () => {
    alert("Social Login is coming soon!");
  };

  return (
    <div
      id="form-bg"
      className="flex flex-col bg-gray-50 h-full sm:h-auto sm:shadow-md px-10 py-12 sm:rounded-lg w-full sm:max-w-lg space-y-4 text-center"
    >
      <h1 className="uppercase font-bold font-outfit text-xl leading-loose mb-3">
        {type === "login" ? "Sign In to Your Account" : "Create a New Account"}
      </h1>
      <div className="flex flex-wrap gap-y-3 justify-center items-center font-medium">
        <span>Sign {type === "login" ? "in" : "up"} with:</span>
        <div className="px-5 flex flex-wrap gap-x-5 gap-y-3 justify-center">
          <LogoButton onClick={handleSocialLogin}>
            <FaApple size={20} className="inline" />
            <span>Apple</span>
          </LogoButton>
          <LogoButton onClick={handleSocialLogin}>
            <FaGithub size={20} className="inline" />
            <span>GitHub</span>
          </LogoButton>
          <LogoButton onClick={handleSocialLogin}>
            <FcGoogle size={20} className="inline" />
            <span>Google</span>
          </LogoButton>
        </div>
      </div>
      <div>
        <div className="bg-gray-300 h-px flex justify-center items-center my-4">
          <span className="text-sm text-gray-500 uppercase px-4 bg-gray-50">
            or Sign {type === "login" ? "In" : "Up"} with Email
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {type === "signup" && (
          <FormTextInputElement
            name="name"
            label="Name"
            value={form.name}
            placeholder="Full Name"
            changeHandler={handleChange}
          />
        )}
        <FormTextInputElement
          name="email"
          label="E-mail"
          value={form.email}
          placeholder="Enter your email"
          changeHandler={handleChange}
        />
        <FormTextInputElement
          name="password"
          label="Password"
          value={form.password}
          placeholder="Enter your password"
          changeHandler={handleChange}
        />
        <button
          type="submit"
          className="mt-10 focus:outline-hidden font-bold transition bg-white hover:bg-blue-700 focus:bg-blue-700 hover:text-white focus:text-white shadow-lg hover:shadow-blue-200 focus:shadow-blue-200 px-3 py-2 rounded-lg w-full"
        >
          {type === "login" ? "Sign In" : "Create Account"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
