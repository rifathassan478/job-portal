import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/authcontext/AuthContext';

const NavBar = () => {
    const {user, logout } = useContext(AuthContext);

    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between mx-auto">
                    <div className="flex items-center">
                        <Link to="/" className="text-left">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                Job Portal
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <NavLink
                            to="/"
                            className="mr-6 text-lg hover:underline dark:text-white"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/jobs"
                            className="mr-6 text-lg hover:underline dark:text-white"
                        >
                            Jobs
                        </NavLink>
                        <a
                            href="#"
                            className="mr-6 text-lg hover:underline dark:text-white"
                        >
                            Contact
                        </a>
                    </div>
                    <div className="flex items-center">
                        {user ? (
                            <>
                                <span className="mr-6 text-lg dark:text-white">
                                    Welcome, {user.email}
                                </span>
                                <button
                                    onClick={logout}
                                    className="mr-6 text-lg hover:underline dark:text-white"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="mr-6 text-lg hover:underline dark:text-white"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="mr-6 text-lg hover:underline dark:text-white"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;