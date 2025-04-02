"use client";
import React, { useState } from "react";

const Content = () => {
    const [activeCategory, setActiveCategory] = useState("Work Experience");

    const AboutContent = [
        {
            id: 1,
            content: [
                "Sr. Consultant, Medical Oncology, RGCIRC, Delhi: 2023-till date",
                "Consultant, Medical oncology, RGCIRC, Delhi: 2015-2023",
                "DNB Resident in Dept. Of Medical Oncology, RGCIRC, Delhi: 2012-2015",
                "Senior Resident in Dept. of Medicine Safdarjung Hospital & VMMC, Delhi: 2010-2012",
                "Junior Resident in Dept. of Medicine Maulana Azad Medical College, Delhi: 2007-2010"
            ],
            category: "Experience",
        },
        {
            id: 2,
            content: [
                "Specialized training in Lung Cancer in Singapore through European Society of Medical Oncology.",
                "MRCP- UK – Certification examination of Medical Oncology.",
                "“European Certified Medical Oncologist” – Exam conducted by European Society of Medical Oncology.",
                "DNB – (Medical Oncology), National Board of Examination, New Delhi, India",
                "MD – (Medicine), Maulana Azad Medical College, Delhi.",
                " MBBS – Maulana Azad Medical College, Delhi."
            ],
            category: "Education",
        },
        {
            id: 3,
            content: [
                "Health Icon of the Year – Golden Star Awards 2016 by National Institute for Education Research (NIER).",
                "Medical excellence award 2020 by national institute for education research (NIER)."
            ],
            category: "Professional Journey",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto lg:p-6 pt-5">
            {/* Buttons Section */}
            <div className="flex flex-wrap justify-center gap-4 lg:mb-8 mb-4">
                {[
                    "Experience",
                    "Education",
                    "Professional Journey",
                ].map((category) => (
                    <button
                        key={category}
                        className={`lg:py-3 lg:px-6 px-3 py-2 rounded-lg text-base font-semibold transition-all duration-300 cursor-pointer
                        ${activeCategory === category
                                ? "bg-[#102c3c] text-white shadow-lg scale-105"
                                : "bg-gray-200 text-gray-800 hover:bg-[#102c3c] hover:text-white"
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <div className="bg-white shadow-lg rounded-lg lg:p-6 min-h-[250px]">
                {AboutContent.filter((item) => item.category === activeCategory).map((item) => (
                    <div key={item.id}>
                        <h2
                            className="text-2xl font-semibold text-center mb-4 text-[#102c3c]"
                            style={{ fontFamily: "Roboto Slab, serif" }}
                        >
                            {item.category}
                        </h2>
                        <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg">
                            {item.content.map((text, index) => (
                                <li key={index}>{text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
