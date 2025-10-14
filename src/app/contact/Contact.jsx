"use client";
import React from 'react';
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Form from './form/Form';
import { motion } from "framer-motion";
import Image from 'next/image';

// Animation Variants
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const slideRight = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const containerStagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Contact = () => {
    return (
        <div className='pt-28 bg-white'>
            {/* Top Banner */}
            <div className="w-full max-w-8xl relative">
                <div className="relative">
                    <Image
                        src="/contact/contact-bg.avif"
                        width={1000}
                        height={1000}
                        className="w-full h-[250px] object-cover"
                        alt="Contact Image"
                    />
                    <div className="absolute inset-0 bg-[#21bee5b4] opacity-70 z-10"></div>
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center"
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </div>

            {/* Content */}
            <div className='px-4 md:px-8 lg:px-16'>
                <div className="bg-white flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto pt-10">

                    {/* Left Section: Contact Info */}
                    <div className="flex flex-col space-y-6 w-full md:w-1/2 pt-4 md:pt-8 items-center">
                        <motion.div
                            className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-4'
                            variants={containerStagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            {/* Phone */}
                            <motion.div
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center w-full max-w-md"
                            >
                                <Link href="tel:+91 95605 38081" target='_blank' aria-label="Call Now" className="flex flex-col items-center">
                                    <IoCall className="text-4xl text-white bg-[#0f8f41] p-2 rounded-full" />
                                    <h3 className="text-lg font-semibold text-black mt-2" style={{ fontFamily: 'Oswald, sans-serif' }}>Phone Number</h3>
                                    <p className="text-gray-700">+91 95605 38081</p>
                                </Link>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center w-full max-w-md"
                            >
                                <Link href="mailto:docvarungoel@gmail.com" target='_blank' className="flex flex-col items-center">
                                    <MdEmail className="text-4xl text-white bg-[#0f8f41] p-2 rounded-full cursor-pointer" />
                                    <h3 className="text-lg font-semibold text-black mt-2" style={{ fontFamily: 'Oswald, sans-serif' }}>Email Address</h3>
                                    <p className="text-gray-700">docvarungoel@gmail.com</p>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Address */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className='bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center w-full max-w-md'
                        >
                            <Link href="https://maps.app.goo.gl/2kTe3TuuW4wuiuY68" target='_blank' className="flex flex-col items-center">
                                <IoLocationSharp className="text-white text-4xl p-2 bg-[#0f8f41] rounded-full cursor-pointer" />
                                <h3 className="text-lg font-semibold text-black mt-2" style={{ fontFamily: 'Oswald, sans-serif' }}>Our Address</h3>
                                <p className="text-gray-700 text-sm md:text-base">
                                    Sir Chotu Ram Marg, Rohini Institutional Area, Sector 5, Rohini, New Delhi, Delhi, 110085
                                </p>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Section: Contact Form */}
                    <motion.div
                        className="w-full md:w-1/2 px-4"
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Form />
                    </motion.div>
                </div>

                {/* Map Section */}
                <div className="py-6">
                    <div className="w-full max-w-6xl mx-auto px-4">
                        <motion.div
                            className="map-container rounded-xl overflow-hidden"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.107118161795!2d77.1115693!3d28.716344599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01f9f5ef8ff1%3A0x57345a618ab5b2e7!2sRajiv%20Gandhi%20Cancer%20Institute%20%26%20Research%20Centre%2C%20Rohini%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1743586319129!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
