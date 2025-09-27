import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between mx-auto">
                    <div className="flex items-center">
                        <a href="#" className="text-left">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Job Portal</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="mr-6 text-lg hover:underline dark:text-white">Home</a>
                        <a href="#" className="mr-6 text-lg hover:underline dark:text-white">About</a>
                        <a href="#" className="mr-6 text-lg hover:underline dark:text-white">Contact</a>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="mr-6 text-lg hover:underline dark:text-white">Login</a>
                        <Link to="/register" className="mr-6 text-lg hover:underline dark:text-white">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;