"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const faqData = [
    {
        question: "Who gets cancer?",
        answer: "Cancer can affect anyone, but risk factors include:",
        list: [

            "<strong>Age:</strong> Risk increases with age.",
            "<strong>Genetics:</strong> Family history of cancer.",
            "<strong>Lifestyle:</strong> Smoking, alcohol, poor diet, lack of exercise.",
            "<strong>Environment:</strong> Exposure to radiation, chemicals, and pollution.",
            "<strong>Infections:</strong> HPV, hepatitis B/C, and other viruses.",
            "<strong>Chronic Conditions:</strong> Obesity, diabetes, and certain inflammatory diseases."
        ]
    },
    {
        question: "My family has a history of genetic cancer. My grandmother, grandfather, and my father s sister died of it. What can I do?",
        answer: "If your family has a history of genetic cancer, there are several steps you can take to be proactive about your health:",
        list: [
            "<strong>Genetic Testing:</strong> Consider speaking with a genetic counselor to determine if you carry any inherited cancer-related genes.",
            "<strong>Regular Screenings:</strong> Get routine check-ups and cancer screenings based on your risk factors and doctor’s recommendations. Early detection can make a big difference.",
            "<strong>Healthy Lifestyle:</strong> Maintain a balanced diet, exercise regularly, avoid smoking, and limit alcohol intake to reduce your overall cancer risk.",
            "<strong>Know the Warning Signs:</strong> Stay informed about symptoms of cancers common in your family and report any concerns to your doctor immediately.",
            "<strong>Preventive Measures:</strong> In some cases, doctors may recommend preventive treatments, medications, or surgeries for those at high risk.",
            "<strong>Family Awareness:</strong> Encourage relatives to also get tested and screened so they can take preventive steps if necessary."
        ]
    },
    {
        question: "How can I contact Dr. Varun Goel?",
        answer: "Yes, cancer can often be treated, especially if detected early. Treatment options include:",
        list: ["Surgery", "Chemotherapy", "Radiation therapy", "Immunotherapy", "Targeted therapy"]
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
        <div className="bg-[#e8fcec] pt-10">
            <div className="max-w-6xl mx-auto px-5">

                <h2
                    className="text-center font-semibold text-4xl mb-6"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                    Frequently Asked Questions
                </h2>


                <div>
                    {faqData.map((item, index) => (
                        <div key={index} className="shadow-slate-400 shadow-md mb-4 rounded-lg overflow-hidden">
                            <button
                                className="flex justify-between items-center w-full px-5 py-3 font-medium dark:text-black border-black bg-white hover:bg-gray-200"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="font-semibold text-lg text-left w-full">{item.question}</span>
                                <IoMdAdd className={`w-8 bg-black text-white rounded-full h-8 transition-transform ${activeIndex === index ? 'rotate-45' : ''}`} />
                            </button>
                            {activeIndex === index && (
                                <div className="p-5 border-t border-black bg-white dark:text-black">
                                    <p className="mb-2 text-left">{item.answer}</p>
                                    {item.list && (
                                        <ul className="list-disc list-outside text-left px-2">
                                            {item.list.map((point, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: point }} ></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;