import { FaUserCircle } from "react-icons/fa";
// import { User } from "../App";
import { useState, useEffect } from "react";
import { decompressFromUTF16 } from 'lz-string';

const UserAvatar = () => {
    const currentUserData : string | null = decompressFromUTF16(window.localStorage.getItem("user") ?? '');

    const [nameOfUser, setNameOfUser] = useState<String>('Anonymous User');

    useEffect(() => {
        if (currentUserData) {
            setNameOfUser(JSON.parse(currentUserData).name);
        }
    }, [currentUserData]);

        return <div className="transition flex items-center justify-center gap-x-2 hover:text-gray-700 hover:bg-gray-100 px-3 py-2 hover:shadow-md rounded-lg cursor-pointer">
            <span>{nameOfUser}</span>
            <FaUserCircle className="text-2xl" />
        </div>;
    };

    export default UserAvatar;