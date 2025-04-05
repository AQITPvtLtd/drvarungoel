"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";

// Use only YouTube video IDs
const videos = [
    "WQBqHfACzig",
    "SeerULYJ2Bs",
];

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
    <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
        onClick={onClick}
    >
        <GrPrevious size={20} />
    </div>
);

const CustomNextArrow = ({ onClick }) => (
    <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
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

    return (
        <div className="bg-[#f7f7f7] py-10">
            <h2 className="text-center font-semibold text-4xl mb-6"
                style={{ fontFamily: 'Oswald, sans-serif' }}
            >
                Informative Videos
            </h2>
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
        </div>
    );
};

export default VideoLibrary;
