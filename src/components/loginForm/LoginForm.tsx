import { ChangeEventHandler, FormEventHandler, useState } from "react";

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
        <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-3xl shadow-md px-10 py-12 flex-grow max-w-3xl">
            <div className="flex items-center justify-start">
                <label htmlFor="email" className="font-bold text-gray-500 basis-1/6 text-right pr-4 max-w-p-100">Email</label>
                <input type="email" name="email" id="email" value={form.email} onChange={handleChange} className="transition bg-gray-100 focus:bg-sky-100 rounded px-3 py-2 flex-grow outline-1 focus:outline-blue-500"/>
            </div>
            <div className="flex items-center justify-start">
                <label htmlFor="password" className="font-bold text-gray-500 basis-1/6 text-right pr-4 max-w-p-100">Password</label>
                <input type="password" name="password" id="password" value={form.password} onChange={handleChange} className="transition bg-gray-100 focus:bg-sky-100 rounded px-3 py-2 flex-grow outline-1 focus:outline-blue-500"/>
            </div>
            <button type="submit" className="transition bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded w-full">Login</button>
            <div className="separator flex justify-center items-center">
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
            </div>
        </form>
    )
};

export default LoginForm;