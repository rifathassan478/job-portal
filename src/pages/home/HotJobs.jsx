import React, { useEffect, useState } from "react";
import JobCard from "../shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobsPromise.then((jobs) => {
            setJobs(jobs);
        });
    }, [jobsPromise]);

    return (
        <>
            <div className="container mx-auto my-10">
                {jobs && (
                    <ul className="flex justify-between gap-6">
                        {jobs.map((job) => (
                            <JobCard key={job._id} job={job} />
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default HotJobs;
