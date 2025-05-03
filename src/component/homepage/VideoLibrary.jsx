"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { motion } from "framer-motion";

// Use only YouTube video IDs
const videos = [
    "WQBqHfACzig",
    "SeerULYJ2Bs",
];

const shortvideos = [
    'oWniJzN6goU',
    'hK8poavNI4U',
    '_I5_ZZvRUhc',
    '-iM3pqofufI',
    'CzWOJ53cD20',
    'XMACUdZ36x0',
    'Ih4HAUmw8oc',
];

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
    <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white dark:text-black rounded-full shadow-md hover:bg-gray-200 transition"
        onClick={onClick}
    >
        <GrPrevious size={20} />
    </div>
);

const CustomNextArrow = ({ onClick }) => (
    <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white dark:text-black rounded-full shadow-md hover:bg-gray-200 transition"
        onClick={onClick}
    >
        <GrNext size={20} />
    </div>
);

const VideoLibrary = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const shortsettings = {
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
        <div>
            <div className="bg-[#f7f7f7] py-10">
                <motion.h2
                    className="text-center font-semibold text-4xl mb-6 dark:text-black"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }} // amount: how much of the element must be in view
                >
                    Explore Our Informative Video Library
                </motion.h2>
                <div className="px-4 max-w-6xl mx-auto">
                    <Slider {...settings}>
                        {videos.map((videoId, index) => (
                            <div key={index} className="px-2">
                                <div className="flex justify-center">
                                    <iframe
                                        width="500"
                                        height="280"
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title={`YouTube video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="rounded-lg shadow-lg w-full max-w-full"
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="relative px-4 max-w-7xl mx-auto pt-5">
                    <Slider {...shortsettings}>
                        {shortvideos.map((id, index) => (
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
        </div>
    );
};

export default VideoLibrary;
