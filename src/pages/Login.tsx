import LoginForm from "../components/loginForm/LoginForm";

const Login = () => {
    return (
        // <div className="h-screen bg-gray-200 flex items-center justify-center">
        //     <div id="login-form" className="bg-gray-100 p-4 rounded-2xl shadow-xl">
        //         <LoginForm />
        //     </div>
        // </div >
        <div className="min-h-screen bg-gray-200 flex">
            <div className="flex-grow flex flex-col justify-center items-center pt-6 sm:pb-6">
                <div id="logo" className="flex space-x-4 mx-4 mb-8">
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="Logo" />
                    <h1 className="font-outfit font-bold text-5xl text-gray-700">thing.do</h1>
                </div>
                <LoginForm />
            </div>
        </div>
        // <div className="body-outer h-screen flex-grow flex flex-col">
        //     <div className="main-body flex-grow overflow-y-auto p-6 space-y-4">
        //         <h1 className="font-display text-6xl">
        //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, soluta?
        //         </h1>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque ad sit ut perspiciatis eligendi nulla? Nisi temporibus ipsum possimus?</p>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque ad sit ut perspiciatis eligendi nulla? Nisi temporibus ipsum possimus?</p>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque ad sit ut perspiciatis eligendi nulla? Nisi temporibus ipsum possimus?</p>
        //         <TaskList />
        //     </div>
        //     <Footer />
        // </div>
    )
};

export default Login;