import React from "react";
import { Link, useLoaderData } from "react-router";

const jobDetails = () => {
    const { _id, title, company, description, location, salaryRange, jobType } = useLoaderData();

    return (
        <>
            <div className="max-w-4xl mx-auto p-6 bg-white border-1 border-slate-200  mb-10 rounded-lg shadow-md mt-10">
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <h2 className="text-xl text-gray-600 mb-2">{company}</h2>
                <p className="text-gray-800 mb-4">{description}</p>
                <p className="text-gray-600 mb-2">
                    <strong>Location:</strong> {location}
                </p>
                <p className="text-gray-600 mb-2">
                    <strong>Salary: </strong> 
                    {salaryRange.min} - {salaryRange.max}{" "}{salaryRange.currency}
                </p>
                <p className="text-gray-600 mb-2">
                    <strong>Job Type:</strong> {jobType}
                </p>

                <Link to={`/jobApply/${_id}`} className="inline-block mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply Now
                </Link>
            </div>
        </>
    );
};

export default jobDetails;
