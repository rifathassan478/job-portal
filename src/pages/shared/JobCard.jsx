import React from "react";
import { Link } from "react-router";

const JobCard = ({job}) => {
    const { _id, title, description, requirements, jobType, category, company, salaryRange } = job;

    return (
        <div>
            <div className="bg-white shadow-md border-1 border-slate-200 rounded px-10 pt-4 pb-8 mb-4">
                <h2 className="text-2xl font-bold text-center mb-4">
                    {job.title}
                </h2>
                <p className="text-center mb-8">{job.description}</p>
                <hr className="border-slate-200 my-4" />
                <div className="requirements">
                    <h3 className="text-center font-bold mb-4">
                        Requirements:{" "}
                    </h3>
                    <div className="text-center mb-6">
                        {job.requirements.map((requirement, index) => (
                            <li
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                key={index}
                            >
                                {requirement}
                            </li>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <Link to={`/job/${_id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
