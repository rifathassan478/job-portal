import React, { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import { applicationListPromoise } from "../../api/applicationsApi";

const MyJobs = () => {
    const user = useAuth().user;
    console.log(user);
    return (
        <div>
            <Suspense fallback={<div>Loading your applications...</div>}>
                <ApplicationList applicationsPromise={applicationListPromoise(user.email)} />
            </Suspense>
        </div>
    );
};

export default MyJobs;
