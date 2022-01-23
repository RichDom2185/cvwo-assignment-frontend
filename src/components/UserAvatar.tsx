import { FaUserCircle } from "react-icons/fa";
import UserModalButton from "./UserModalButton";
// import { User } from "../App";
import { useState, useEffect } from "react";
import { decompressFromUTF16 } from 'lz-string';

const UserAvatar = () => {
    const currentUserData: string | null = decompressFromUTF16(window.localStorage.getItem("user") ?? '');

    const [nameOfUser, setNameOfUser] = useState<String>('Anonymous User');
    const [emailOfUser, setEmailOfUser] = useState<String>('test@gmail.com');

    const [modalVisibility, setModalVisibility] = useState<boolean>(false);
    const toggleModalVisibility = () => setModalVisibility((modalVisibility) => !modalVisibility);

    useEffect(() => {
        if (currentUserData) {
            setNameOfUser(JSON.parse(currentUserData).name);
            setEmailOfUser(JSON.parse(currentUserData).email);
        }
    }, [currentUserData]);

    // useEffect(() => {
    //     if (modalVisibility) {
    //         document.addEventListener('click', toggleModalVisibility);
    //     } else {
    //         document.removeEventListener('click', toggleModalVisibility);
    //     }
    // }, [modalVisibility]);

    return <div className="relative pl-24">
        <div className="transition select-none flex items-center justify-center gap-x-2 hover:text-gray-700 hover:bg-gray-100 px-3 py-2 hover:shadow-md rounded-lg cursor-pointer" onClick={toggleModalVisibility}>
            <span>{nameOfUser}</span>
            <FaUserCircle className="text-2xl" />
        </div>
        {modalVisibility && (
            <div className="absolute top-0 right-0 mt-12 select-none w-full border shadow-md bg-gray-50 rounded-lg p-3 divide-y divide-gray-200 flex flex-col gap-y-2">
                <div className="flex gap-x-4 items-center">
                    <div>
                        <FaUserCircle className="text-6xl" />
                    </div>
                    <div>
                        <span className="block font-pt font-semibold">{nameOfUser}</span>
                        <span className="block text-sm font-pt">{emailOfUser}</span>
                    </div>
                </div>
                <div className="flex justify-between pt-2">
                    {/* TODO: Add onClick handler */}
                    <UserModalButton linkTo="/login">
                        {currentUserData ? 'Sign Out' : 'Sign In'}
                    </UserModalButton>
                    {!currentUserData && <UserModalButton linkTo="/signup">
                        Create Account
                    </UserModalButton>}
                </div>
            </div>
        )}
    </div>;
};

export default UserAvatar;