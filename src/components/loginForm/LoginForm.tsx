import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";
import LogoButton from "./LogoButton";
import FormTextInputElement from "./FormTextInputElement";

const LoginForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange: ChangeEventHandler = (e) => {
        const element = e.target as HTMLInputElement;
        setForm({
            ...form,
            [element.name]: element.value,
        });
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div id="form-bg" className="flex flex-col bg-gray-50 h-full sm:h-auto sm:shadow-md px-10 py-12 sm:rounded-lg w-full sm:max-w-lg space-y-4 text-center">
            <h1 className="uppercase font-bold font-outfit text-xl leading-loose mb-3">Sign in to Your Account</h1>
            <div className="flex flex-wrap gap-y-3 justify-center items-center font-medium">
                <span>Sign in with:</span>
                <div className="px-5 flex flex-wrap gap-x-5 gap-y-3 justify-center">
                    <LogoButton>
                        <FaApple size={20} className="inline" />
                        <span>Apple</span>
                    </LogoButton>
                    <LogoButton>
                        <FaGithub size={20} className="inline" />
                        <span>GitHub</span>
                    </LogoButton>
                    <LogoButton>
                        <FcGoogle size={20} className="inline" />
                        <span>Google</span>
                    </LogoButton>
                </div>
            </div>
            <div>
                <div className="bg-gray-300 h-px flex justify-center items-center my-4">
                    <span className="text-sm text-gray-500 uppercase px-4 bg-gray-50">
                        or Sign In with Email
                    </span>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                {/* <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="flex-grow text-left text-gray-500 tracking-wide font-medium text-sm">E-mail</label>
                    <input type="email" name="email" id="email" value={form.email} onChange={handleChange} className="transition border border-transparent focus:border-blue-300 bg-gray-100 focus:bg-sky-100 rounded px-3 py-2 w-full focus:outline-none" />
                </div> */}
                <FormTextInputElement name="email" label="E-mail" value={form.email} placeholder="Enter your email" changeHandler={handleChange} />
                <FormTextInputElement name="password" label="Password" value={form.password} placeholder="Enter your password" changeHandler={handleChange} />
                {/* <div className="flex items-center justify-start">
                <label htmlFor="password" className="font-bold text-gray-500 basis-1/6 text-right pr-4 max-w-p-100">Password</label>
                <input type="password" name="password" id="password" value={form.password} onChange={handleChange} className="transition bg-gray-100 focus:bg-sky-100 rounded px-3 py-2 flex-grow outline-1 focus:outline-blue-500"/>
            </div> */}
                <button type="submit" className="mt-10 focus:outline-none font-bold transition bg-white hover:bg-blue-700 focus:bg-blue-700 hover:text-white focus:text-white shadow-lg hover:shadow-blue-200 focus:shadow-blue-200 px-3 py-2 rounded-lg w-full">Login</button>
                {/* <div className="separator flex justify-center items-center">
                    <span className="mx-2">
                        or
                    </span>
                </div>
                <div>
                    <span>
                        Sign in with:
                    </span>
                    <div>
                        <button className="inline transition bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded">Google</button>
                        <button className="inline transition bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded">GitHub</button>
                    </div>
                </div> */}
            </form>
        </div>
    )
};

export default LoginForm;