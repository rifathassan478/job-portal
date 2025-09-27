import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../pages/layouts/RootLayout";
import Register from "../pages/account/Register";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: App },
            { path: "register", Component: Register },
        ],
    },
]);

export default router;
