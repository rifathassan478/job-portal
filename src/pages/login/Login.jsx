import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authcontext/AuthContext";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
    const { user, loginUser, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                form.reset();
                navigate(from, { replace: true });
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="max-w-[500px] mx-auto my-10">
            <form
                onSubmit={handleUserLogin}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <h1 className="text-lg font-bold text-center mb-4">Login</h1>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Sign in
                    </button>
                    <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="/register"
                    >
                        Don't have an account?
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Login;
