import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../pages/layouts/RootLayout";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import jobDetails from "../pages/jobdetails/jobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { path: "register", Component: Register },
            { path: "login", Component: Login },
            { path: "job/:id", Component: jobDetails },
        ],
    },
]);

export default router;
