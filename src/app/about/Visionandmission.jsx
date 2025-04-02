import React from 'react';
import Image from 'next/image';

const VisionAndmission = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-6 max-w-7xl mx-auto mt-10">
            {/* Our Mission Section */}
            <div className="flex flex-col items-center text-center md:w-1/2 border-b-2 md:border-b-0 md:border-r-2 border-gray-300 pb-6 md:pb-0 md:pr-6">
                <div className="flex justify-center items-center mb-4 border-[#108f44] border-2 rounded-full w-28 h-28 p-2">
                    <Image
                        src="/about/mission.png"
                        width={80}
                        height={80}
                        alt="Our Mission"
                        className="rounded-full"
                    />
                </div>
                <h2 className="text-2xl font-bold text-[#108f44] uppercase" style={{ fontFamily: "Roboto Slab, serif" }}>Our Mission</h2>
                <p className="text-gray-600 mt-2 leading-relaxed px-4 md:px-0">
                    We are dedicated to providing advanced, patient-focused oncology care, ensuring efficient and accessible day-care treatments. Through innovation and personalized approaches, we strive to enhance treatment outcomes and overall well-being with minimal disruption to daily life.
                </p>
            </div>

            {/* Our Vision Section */}
            <div className="flex flex-col items-center text-center md:w-1/2 pt-6 md:pt-0 md:pl-6">
                <div className="flex justify-center items-center mb-4 border-[#1eb4dd] border-2 rounded-full w-28 h-28 p-2">
                    <Image
                        src="/about/vision.png"
                        width={80}
                        height={80}
                        alt="Our Vision"
                        className="rounded-full"
                    />
                </div>
                <h2 className="text-2xl font-bold text-[#1eb4dd] uppercase" style={{ fontFamily: "Roboto Slab, serif" }}>Our Vision</h2>
                <p className="text-gray-600 mt-2 leading-relaxed px-4 md:px-0">
                    Our goal is to be a trusted leader in medical oncology, offering seamless, high-quality cancer care. We focus on early diagnosis, precision treatments, and patient empowerment, continuously improving services through research, innovation, and compassionate support.
                </p>
            </div>
        </div>
    );
};

export default VisionAndmission;