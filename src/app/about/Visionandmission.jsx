"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const VisionAndMission = () => {
    return (
        <div className="relative font-sans text-black dark:text-white px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* Left Content - Mission Section */}
                <motion.div
                    className="border border-gray-300 rounded-lg shadow-lg p-6 hidden lg:block"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h2 className="text-center font-semibold text-xl bg-[#21bee5] py-2 rounded text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        Our Mission
                    </h2>
                    <p className="mt-4 text-gray-700">
                        We are dedicated to providing advanced, patient-focused oncology care, ensuring efficient and accessible day-care treatments. Through innovation and personalized approaches, we strive to enhance treatment outcomes and overall well-being with minimal disruption to daily life.
                    </p>
                </motion.div>

                {/* Mission Section for small devices (without animation) */}
                <div className="border border-gray-300 rounded-lg shadow-lg p-6 block lg:hidden">
                    <h2 className="text-center font-semibold text-xl bg-[#21bee5] py-2 rounded text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        Our Mission
                    </h2>
                    <p className="mt-4 text-gray-700">
                        We are dedicated to providing advanced, patient-focused oncology care, ensuring efficient and accessible day-care treatments. Through innovation and personalized approaches, we strive to enhance treatment outcomes and overall well-being with minimal disruption to daily life.
                    </p>
                </div>

                {/* Center Image and Title Section */}
                <div className="bg-[#119246] text-white font-bold text-center flex flex-col justify-center items-center rounded-lg shadow-lg py-8">
                    <h1 className="text-2xl lg:text-3xl px-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        Our Mission and Vision
                    </h1>
                    <div className="mt-6">
                        <Image
                            src="/about/newvision.png"
                            height={300}
                            width={300}
                            className="h-48 w-48 object-cover rounded-lg"
                            alt="Mission"
                        />
                    </div>
                </div>

                {/* Right Content - Vision Section */}
                <motion.div
                   className="border border-gray-300 rounded-lg shadow-lg p-6 hidden lg:block"
                   initial={{ x: 50, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 0.5 }}
                   viewport={{ once: false, amount: 0.3 }}
                >
                    <h2 className="text-center font-semibold text-xl bg-[#21bee5] py-2 rounded text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        Our Vision
                    </h2>
                    <p className="mt-4 text-gray-700">
                        Our goal is to be a trusted leader in medical oncology, offering seamless, high-quality cancer care. We focus on early diagnosis, precision treatments, and patient empowerment, continuously improving services through research, innovation, and compassionate support.
                    </p>
                </motion.div>

                {/* Vision Section for small devices (without animation) */}
                <div className="border border-gray-300 rounded-lg shadow-lg p-6 block lg:hidden">
                    <h2 className="text-center font-semibold text-xl bg-[#21bee5] py-2 rounded text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        Our Vision
                    </h2>
                    <p className="mt-4 text-gray-700">
                        Our goal is to be a trusted leader in medical oncology, offering seamless, high-quality cancer care. We focus on early diagnosis, precision treatments, and patient empowerment, continuously improving services through research, innovation, and compassionate support.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VisionAndMission;
