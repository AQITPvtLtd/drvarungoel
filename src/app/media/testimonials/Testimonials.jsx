'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const testimonialImages = [
    '/testimonials/img1.png',
    '/testimonials/img2.png',
    '/testimonials/img3.png',
    '/testimonials/img4.png',
    '/testimonials/img5.png',
    '/testimonials/img6.png',
];

const Testimonials = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonialImages.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === testimonialImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="lg:pt-32 pt-24 bg-[#ebfff4] bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
                    What Our Patients Say
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {testimonialImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative group bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                            onClick={() => openModal(index)}
                        >
                            <Image
                                src={src}
                                alt={`testimonial-${index + 1}`}
                                height={450}
                                width={450}
                                className="rounded-xl object-cover mx-auto"
                            />
                            <div className="absolute rounded-xl inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold">
                                <span className="text-white text-lg font-semibold">Tap to View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
                    <button
                        onClick={closeModal}
                        className="absolute top-1 right-6 text-white text-2xl"
                    >
                        <FaTimes />
                    </button>
                    <button
                        onClick={goPrev}
                        className="absolute left-6 lg:text-white text-black text-3xl cursor-pointer"
                    >
                        <FaChevronLeft />
                    </button>
                    <div className="max-w-3xl w-full px-4">
                        <Image
                            src={testimonialImages[currentIndex]}
                            alt={`testimonial-full-${currentIndex}`}
                            width={800}
                            height={600}
                            className="rounded-xl w-full h-auto mx-auto"
                        />
                    </div>
                    <button
                        onClick={goNext}
                        className="absolute right-6 lg:text-white text-black text-3xl cursor-pointer"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Testimonials;
