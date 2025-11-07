import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../pages/layouts/RootLayout";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import jobDetails from "../pages/jobdetails/jobDetails";
import PrivateRouter from "../routes/PrivateRouter";
import JobApply from "../pages/jobapply/JobApply";
import MyJobs from "../pages/myjobs/MyJobs";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { path: "register", Component: Register },
            { path: "login", Component: Login },
            {
                path: "job/:id",
                Component: jobDetails,
                loader: ({ params }) =>
                    fetch(`http://localhost:3000/job/${params.id}`),
            },
            {
                path: "jobapply/:id",
                element: (
                    <PrivateRouter>
                        <JobApply />
                    </PrivateRouter>
                ),
            },
            {
                path: "myjobs",
                element: (
                    <PrivateRouter>
                        <MyJobs />
                    </PrivateRouter>
                )
            }
        ],
    },
]);

export default router;
