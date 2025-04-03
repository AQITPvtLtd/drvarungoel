"use client";
import React, { useState } from "react";

const Content = () => {
    const [activeCategory, setActiveCategory] = useState("Education");

    const AboutContent = [
        {
            id: 1,
            content: [
                "Sr. Consultant, Medical Oncology, RGCIRC, Delhi: 2023-till date",
                "Consultant, Medical Oncology, RGCIRC, Delhi: 2015-2023",
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
                "MBBS – Maulana Azad Medical College, Delhi."
            ],
            category: "Education",
        },
        {
            id: 3,
            content: [
                "Hepatic osteodystrophy. Trop Gastroenterol.",
                "Chemokine receptor 5 (CCR5) polymorphism in chronic hepatitis B patients treated with three different nucleos(side) analogues.",
                "Small cell carcinoma of the ovary of hypercalcemic type: a rare tumor.",
                "Primary renal primitive neuroectodermal tumor: A rare presentation. J Postgrad Med.",
                "Case report: Non-small-cell lung carcinoma presenting as foot swelling. Lung India: Official Organ of Indian Chest Society"
            ],
            category: "PUBLICATIONS AND RESEARCH WORK",
        },
    ];

    return (
        <div className="mx-auto p-6 bg-[#ebfff4]">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-4 gap-3 sm:gap-5">
                {["Education", "PUBLICATIONS AND RESEARCH WORK", "Experience"].map((category) => (
                    <button
                        key={category}
                        className={`py-2 px-4 sm:py-3 sm:px-5 text-base sm:text-lg font-semibold transition-all duration-300 cursor-pointer
                            ${activeCategory === category
                                ? "bg-[#102c3c] text-white rounded-lg"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Content Box */}
            <div className="p-5 sm:p-6 bg-[#f6fff9] border border-gray-300 rounded-lg shadow-md">
                {AboutContent.filter((item) => item.category === activeCategory).map((item) => (
                    <div key={item.id}>
                        <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg">
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
