"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { motion } from "framer-motion";

const faqData = [
    {
        question: "What types of cancer does Dr. Varun Goel treat?",
        answer: "Dr. Goel treats a wide range of cancers including solid tumors such as breast cancer, lung cancer, colon cancer, and prostate cancer, as well as blood-related cancers like leukemia, lymphoma, and multiple myeloma.",
    },
    {
        question: "How can I book an appointment?",
        answer: "You can book an appointment online through the website or call the clinic directly. Once the form is submitted, our team will confirm your appointment shortly.",
    },
    {
        question: "How long does cancer treatment take?",
        answer: "The duration of treatment depends on the type and stage of cancer. Some treatments are short-term, while others may require ongoing follow-up over months or even years.",
    },
    {
        question: "How can I know if I have cancer?",
        answer: "Cancer can only be diagnosed by a doctor. Possible symptoms include unexplained weight loss, ongoing fatigue, lumps, abnormal bleeding, or changes in skin or bowel habits. If concerned, consult a doctor for evaluation."
    },
    {
        question: "What are the different treatments that compliment cancer?",
        answer: "Acupuncture, massage, meditation, yoga, herbal supplements, and dietary changes can complement cancer treatment. They may help reduce side effects, improve well-being, and enhance quality of life. Always seek medical advice before using complementary therapies."
    },
    {
        question: "Can cancer spread from one person to another?",
        answer: "Cancer does not spread from person to person like infections. It results from genetic mutations and other factors. However, certain viruses associated with cancer, such as HPV or hepatitis B, can be transmitted."
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-[#e8fcec] py-4">
            <div className="max-w-6xl mx-auto px-5">

                <motion.h2
                    className="text-center font-semibold text-4xl mb-6 dark:text-black"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                    initial={{ opacity: 0, y: 40 }} // only from top to bottom
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Frequently Asked Questions
                </motion.h2>

                <div>
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }} // only top-to-bottom
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0 }}
                            className="shadow-slate-400 shadow-md mb-4 rounded-lg overflow-hidden"
                        >
                            <button
                                className="flex justify-between items-center w-full px-5 py-3 font-medium dark:text-black border-black bg-white hover:bg-gray-200"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="font-semibold text-lg text-left w-full">{item.question}</span>
                                <IoMdAdd
                                    className={`w-8 bg-black text-white rounded-full h-8 transition-transform ${activeIndex === index ? "rotate-45" : ""}`}
                                />
                            </button>
                            {activeIndex === index && (
                                <div className="p-5 border-t border-black bg-white dark:text-black">
                                    <p className="mb-2 text-left">{item.answer}</p>
                                    {item.list && (
                                        <ul className="list-disc list-outside text-left px-2">
                                            {item.list.map((point, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Faq;
