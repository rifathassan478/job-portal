import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../pages/layouts/RootLayout";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: App },
            { path: "register", Component: Register },
            {path: "login", Component: Login}
        ],
    },
]);

export default router;
