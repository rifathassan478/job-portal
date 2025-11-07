import React, { use } from 'react';
import ApplicationItem from './ApplicationItem';

const ApplicationList = ({applicationsPromise}) => {

    const applications = use(applicationsPromise);
    console.log(applications)

    return (
        <div>
            <div className="max-w-4xl mx-auto py-10">
                <h1 className='text-2xl text-center mb-4'>Application List</h1>
                <ul>
                    {applications.map((application, index) => (
                        <ApplicationItem key={application._id} application={application} index={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ApplicationList;