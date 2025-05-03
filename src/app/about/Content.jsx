"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIsLargeScreen from "@/hooks/useIsLargeScreen";
const Content = () => {
    const [activeCategory, setActiveCategory] = useState("Education");
    const isLargeScreen = useIsLargeScreen();

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
                "CCR5 polymorphism in hepatitis B patients treated with nucleoside analogues.",
                "Small cell carcinoma of the ovary of hypercalcemic type: a rare tumor.",
                "Primary renal primitive neuroectodermal tumor: A rare presentation.",
                "Lung carcinoma presenting as foot swelling. Lung India"
            ],
            category: "Publication and Research Work",
        },
    ];

    const buttonContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.25 } } };
    const buttonItem = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 },
        },
    };

    const listContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
    const listItem = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <div className="mx-auto p-6 bg-[#ebfff4] lg:-pt-10">
            {/* Animate Buttons Only on Large Devices */}
            {isLargeScreen ? (
                <motion.div
                    className="flex flex-wrap justify-center mb-4 gap-3 sm:gap-5"
                    variants={buttonContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                >
                    {["Education", "Experience", "Publication and Research Work"].map((category, index) => (
                        <motion.button
                            key={index}
                            variants={buttonItem}
                            onClick={() => setActiveCategory(category)}
                            className={`py-2 px-4 sm:py-3 sm:px-5 text-base sm:text-lg font-semibold transition-all duration-300 cursor-pointer
                            ${activeCategory === category ? "bg-[#102c3c] text-white rounded-lg" : "text-gray-600 hover:text-gray-900"}`}
                            style={{ fontFamily: 'Oswald, sans-serif' }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>
            ) : (
                <div className="flex flex-wrap justify-center mb-4 gap-3 sm:gap-5">
                    {["Education", "Experience", "Publication and Research Work"].map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            className={`py-2 px-4 sm:py-3 sm:px-5 text-base sm:text-lg font-semibold transition-all duration-300 cursor-pointer
                            ${activeCategory === category ? "bg-[#102c3c] text-white rounded-lg" : "text-gray-600 hover:text-gray-900"}`}
                            style={{ fontFamily: 'Oswald, sans-serif' }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            {/* Content Animation */}
            <div className="p-5 sm:p-6 bg-[#f6fff9] border border-gray-300 rounded-lg shadow-md">
                <AnimatePresence mode="wait">
                    {AboutContent.filter((item) => item.category === activeCategory).map((item) =>
                        isLargeScreen ? (
                            <motion.ul
                                key={item.id}
                                className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg"
                                variants={listContainer}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {item.content.map((text, index) => (
                                    <motion.li key={index} variants={listItem}>
                                        {text}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        ) : (
                            <ul
                                key={item.id}
                                className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg"
                            >
                                {item.content.map((text, index) => (
                                    <li key={index}>{text}</li>
                                ))}
                            </ul>
                        )
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Content;
