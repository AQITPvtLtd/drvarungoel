'use client';

import Form from "@/app/contact/form/Form";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
    { id: 1, src: "/services/img1.png", title: "Cancer Diagnosis & Staging" },
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
    return (
        <div className="bg-[#ebfff4] p-6 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-3 dark:text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg"
                            variants={cardVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            custom={index}
                        >
                            <Image src={service.src} width={120} height={120} alt={service.title} />
                            <p className="mt-3 text-center font-semibold dark:text-black">{service.title}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="lg:px-20">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Services;
