'use client';

import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const videos = [
    { id: 1, url: 'https://youtube.com/shorts/CzWOJ53cD20?si=VU2bEHMXKK2nYCoi' },
    { id: 2, url: 'https://youtube.com/shorts/XMACUdZ36x0?si=4YIChEy1sIwyhSUh' },
    { id: 3, url: 'https://youtube.com/shorts/Ih4HAUmw8oc?si=NWDTu0h1XKkgbpZ4' },
];

export default function VideoCarousel() {
    const [current, setCurrent] = useState(Math.floor(videos.length / 2));

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    const getEmbedUrl = (url) => {
        const videoId = url.split('/').pop().split('?')[0];
        return `https://www.youtube.com/embed/${videoId}?autoplay=0`;
    };

    return (
        <div className="p-5 bg-white">
            <p className="text-4xl font-semibold text-center pt-5 dark:text-black">PATIENT TESTIMONIALS</p>
            <div className="flex flex-col items-center space-y-6 pt-10">
                <div className="flex items-center space-x-4 overflow-hidden w-full justify-center">
                    {videos.map((video, index) => (
                        <div
                            key={video.id}
                            className={`relative w-72 h-72 flex-shrink-0 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 
                            ${index === current ? 'scale-100 opacity-100' : 'scale-90 opacity-50'}`}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src={getEmbedUrl(video.url)}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={prevSlide}
                        className="p-3 bg-white cursor-pointer rounded-full dark:text-black shadow-md hover:bg-gray-300 transition-all"
                    >
                        <FaArrowLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 bg-white cursor-pointer rounded-full dark:text-black shadow-md hover:bg-gray-300 transition-all"
                    >
                        <FaArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}