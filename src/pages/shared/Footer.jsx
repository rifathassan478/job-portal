import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-200 ">
            <footer className="h-48 md:px-12 lg:px-24 py-12">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
                            <h5 className="uppercase text-gray-500 mb-2">
                                About
                            </h5>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque sit amet lacus
                                vitae velit suscipit aliquam.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 xl:w-1/3 p-6">
                            <h5 className="uppercase text-gray-500 mb-2">
                                Quick Links
                            </h5>
                            <ul className="list-none mb-0">
                                <li className="mt-2">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-500"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-500"
                                    >
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="mt-2 border-none opacity-25" />
                    <div className="text-center text-gray-600">
                        Copyright {new Date().getFullYear()} Job Portal. All
                        rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
