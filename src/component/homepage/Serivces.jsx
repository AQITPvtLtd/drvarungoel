'use client';

import Form from "@/app/contact/form/Form";
import React from "react";
import Image from "next/image";

const services = [
    { id: 1, src: "/services/img1.png", title: "RADIATION THERAPY" },
    { id: 2, src: "/services/img2.png", title: "TARGETED THERAPY" },
    { id: 3, src: "/services/img3.png", title: "IMMUNOTHERAPY" },
    { id: 4, src: "/services/img4.png", title: "CHEMOTHERAPY" },
    { id: 5, src: "/services/img5.png", title: "ROBOTIC THERAPY" },
    { id: 6, src: "/services/img6.png", title: "CAR-T CELL THERAPY" },
];

const Services = () => {
    return (
        <div className="bg-[#ebfff4] p-6 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-3 dark:text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform"
                        >
                            <Image src={`${service.src}`} width={120} height={120} alt={service.title} />
                            <p className="mt-3 text-center font-semibold dark:text-black">{service.title}</p>
                        </div>
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