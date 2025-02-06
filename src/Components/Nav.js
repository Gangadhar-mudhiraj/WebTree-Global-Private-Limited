import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';

const Nav = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="bg-white text-gray-800 text-xl font-bold py-2 px-4 rounded-md">
                    User Profile
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className="text-white py-2 px-4 rounded-md hover:bg-white hover:text-gray-800 transition duration-300 flex items-center space-x-2"
                            activeClassName="bg-white text-gray-800"
                        >
                            <FaUser className="text-xl" />
                            <span>User</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/home"
                            className="text-white py-2 px-4 rounded-md hover:bg-white hover:text-gray-800 transition duration-300 flex items-center space-x-2"
                            activeClassName="bg-white text-gray-800"
                        >
                            <FaHome className="text-xl" />
                            <span>Home</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
