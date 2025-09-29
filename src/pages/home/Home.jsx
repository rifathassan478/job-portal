import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import JobCategories from './JobCategories';

const Home = () => {
        const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
            res.json()
        );

    return (
        <div>
            <Banner />
            <HotJobs jobsPromise={jobsPromise} />
            <JobCategories />
        </div>
    );
}

export default Home;