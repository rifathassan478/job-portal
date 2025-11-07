import React from 'react';

const ApplicationItem = ({application, index}) => {
    console.log(application)
    return (
        <>
            <li key={application._id} className="mb-4 p-4 border rounded">
                {index + 1}.
                <h2 className="text-xl font-bold">{application.jobTitle}</h2>
                <p className="text-gray-600">
                    Company: {application.title}
                </p>
                <p className="text-gray-600">Company: {application.company}</p>
            </li>
        </>
    );
};

export default ApplicationItem;