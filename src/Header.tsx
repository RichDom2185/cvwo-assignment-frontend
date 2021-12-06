import React from 'react';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <header className="site-header">
                <h1>CVWO-assignment</h1>
                <nav>
                    <ul>
                        <li>1</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <div className="user m-3 p-3 rounded-full bg-gray-50 text-xl cursor-pointer">
                            <FaUser />
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
};

export default Header;
