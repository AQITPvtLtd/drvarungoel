"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { motion } from "framer-motion";



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
    

    return (
       <div></div>
    );
};

export default PatientTestimonial;
