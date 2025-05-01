'use client';

import Form from "@/app/contact/form/Form";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const services = [
    { id: 1, src: "/services/img1.png", title: "Cancer Diagnosis & Staging", },
    { id: 2, src: "/services/img2.png", title: "Systemic Anti-Cancer Therapy" },
    { id: 3, src: "/services/img3.png", title: "Personalized & Precision Medicine" },
    { id: 4, src: "/services/img4.png", title: "Prognostication & Risk Assessment" },
    { id: 5, src: "/services/img5.png", title: "Supportive & Palliative Care" },
    { id: 6, src: "/services/img6.png", title: "Clinical Trials & Research" },
];

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: "easeOut"
        }
    }),
};

const Services = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 768); // md size (768px) se bada to large
        };

        checkScreenSize(); // initial check
        window.addEventListener('resize', checkScreenSize); // resize par check

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className="bg-[#ebfff4] p-6 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-3 dark:text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Treatments
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service, index) => {
                        const CardContent = (
                            <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg h-full w-full">
                                <Image
                                    src={service.src}
                                    width={120}
                                    height={120}
                                    alt={service.title}
                                    className="w-24 h-24 object-contain"
                                />
                                <p className="mt-3 text-center font-semibold text-sm md:text-base dark:text-black">
                                    {service.title}
                                </p>
                            </div>
                        );

                        return isLargeScreen ? (
                            <motion.div
                                key={service.id}
                                variants={cardVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                custom={index}
                            >
                                {CardContent}
                            </motion.div>
                        ) : (
                            <div key={service.id}>{CardContent}</div>
                        );
                    })}

                    {/* Know More Button */}
                    <div className="col-span-1 sm:col-span-2 flex justify-center">
                        <Link
                            href="/treatments"
                            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg font-semibold text-center transition-all 
            border-2 border-transparent hover:border-green-600 hover:text-black hover:bg-white cursor-pointer"
                        >
                            <MdKeyboardDoubleArrowRight className="text-xl" />
                            Know More
                        </Link>
                    </div>
                </div>


                <div className="lg:px-20">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Services;
