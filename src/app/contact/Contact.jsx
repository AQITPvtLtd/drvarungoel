import React from 'react';
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Form from './form/Form';

const Contact = () => {
    return (
        <div className='pt-20 px-4 md:px-8 lg:px-16 bg-white'>
            <p className='text-center text-3xl md:text-4xl font-bold text-gray-800 dark:bg-white py-5' style={{ fontFamily: "Roboto Slab, serif" }}>
                Contact Us
            </p>

            <div className="bg-white flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
                {/* Left Section: Address Details */}
                <div className="flex flex-col space-y-6 w-full md:w-1/2 pt-4 md:pt-8 items-center">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-4'>
                        {/* Phone */}
                        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center w-full max-w-md">
                            <Link href="tel:+919711400908" aria-label="Call Now" className="flex flex-col items-center">
                                <IoCall className="text-4xl text-white bg-[#0f8f41] p-2 rounded-full" />
                                <h3 className="text-lg font-semibold text-black mt-2">Phone Number</h3>
                                <p className="text-gray-700">+91 97114 00908</p>
                            </Link>
                        </div>

                        {/* Email */}
                        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center w-full max-w-md">
                            <Link href="mailto:drdevavratarya@gmail.com" className="flex flex-col items-center">
                                <MdEmail className="text-4xl text-white bg-[#0f8f41] p-2 rounded-full cursor-pointer" />
                                <h3 className="text-lg font-semibold text-black mt-2">Email Address</h3>
                                <p className="text-gray-700">drdevavratarya@gmail.com</p>
                            </Link>
                        </div>

                    </div>

                    {/* Address */}
                    <div className='bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center w-full max-w-md'>
                        <Link href="https://maps.app.goo.gl/PqUsp3QC2rFygoEHA" className="flex flex-col items-center">
                            <IoLocationSharp className="text-white text-4xl p-2 bg-[#0f8f41] rounded-full cursor-pointer" />
                            <h3 className="text-lg font-semibold text-black mt-2">Our Address</h3>
                            <p className="text-gray-700 text-sm md:text-base">
                                Sir Chotu Ram Marg, Rohini Institutional Area, Sector 5, Rohini, New Delhi, Delhi, 110085
                            </p>
                        </Link>
                    </div>

                </div>

                {/* Right Section: Contact Form */}
                <div className="w-full md:w-1/2 px-4">
                    <Form />
                </div>
            </div>

            {/* Map Section */}
            <div className="py-6">
                <div className="w-full max-w-6xl mx-auto px-4">
                    <div className="map-container rounded-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.107118161795!2d77.1115693!3d28.716344599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01f9f5ef8ff1%3A0x57345a618ab5b2e7!2sRajiv%20Gandhi%20Cancer%20Institute%20%26%20Research%20Centre%2C%20Rohini%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1743586319129!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            // allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;