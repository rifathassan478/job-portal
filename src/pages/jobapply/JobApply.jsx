import React from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();

    const handleApplyForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const resume = form.resume.files[0];
        const linkedin = form.linkedin.value;

        const application = {
            jobId,
            applicant: user.email,
            name,
            phone,
            resume,
            linkedin,
        };

        //TODO: Send this application to the database or server
        axios
            .post("http://localhost:3000/applications", application)
            .then(function (response) {
                if (response.data.insertedId) {
                    form.reset();
                    
                    Swal.fire({
                        title: "Application saved successfully!",
                        icon: "success",
                        draggable: true,
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="container mx-auto my-10">
            <form
                onSubmit={handleApplyForm}
                className="flex flex-col max-w-md mx-auto mt-10 mb-10 border-1 border-slate-200 bg-white shadow-md rounded px-8 pt-6 pb-8"
            >
                <h3 className="text-center font-bold text-2xl mb-8">
                    Job Application Form
                </h3>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Full Name"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        value={user.email}
                        readOnly
                        type="email"
                        placeholder="Email Address"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="phone"
                    >
                        Phone Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="linkedin"
                    >
                        LinkedIn Profile
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="linkedin"
                        name="linkedin"
                        type="url"
                        placeholder="LinkedIn Profile URL"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="resume"
                    >
                        Resume
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="resume"
                        name="resume"
                        type="file"
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded">
                    Apply
                </button>
            </form>
        </div>
    );
};

export default JobApply;
