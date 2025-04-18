"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { motion } from "framer-motion";

const videos = [
    'CzWOJ53cD20',
    'XMACUdZ36x0',
    'Ih4HAUmw8oc',
];

// Bottom center arrows
const CustomPrevArrow = ({ onClick }) => (
    <div
        className="absolute bottom-0 left-1/2 transform -translate-x-12 translate-y-10 z-10 cursor-pointer p-3 bg-white text-black rounded-full shadow hover:bg-gray-100 transition"
        onClick={onClick}
    >
        <GrPrevious size={20} />
    </div>
);

const CustomNextArrow = ({ onClick }) => (
    <div
        className="absolute bottom-0 left-1/2 transform translate-x-12 translate-y-10 z-10 cursor-pointer p-3 bg-white text-black rounded-full shadow hover:bg-gray-100 transition"
        onClick={onClick}
    >
        <GrNext size={20} />
    </div>
);

const PatientTestimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
        ],
    };

    return (
        <div className="bg-white py-14">
            <motion.h2
                className="text-center font-semibold text-4xl mb-6 dark:text-black"
                style={{ fontFamily: 'Oswald, sans-serif' }}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }} // amount: how much of the element must be in view
            >
                Patient Testimonial
            </motion.h2>

            <div className="relative px-4 max-w-7xl mx-auto">
                <Slider {...settings}>
                    {videos.map((id, index) => (
                        <div key={index} className="px-3">
                            <div className="transition-transform duration-500 ease-in-out transform scale-90 slick-center:scale-105 rounded-xl overflow-hidden shadow-md bg-white">
                                <iframe
                                    width="100%"
                                    height="300"
                                    src={`https://www.youtube.com/embed/${id}`}
                                    title={`YouTube video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default PatientTestimonial;
