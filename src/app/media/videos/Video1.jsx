'use client';

import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// The list of YouTube Shorts video URLs
const videos = [
    { id: 1, url: 'https://youtube.com/shorts/CzWOJ53cD20?si=VU2bEHMXKK2nYCoi' },
    { id: 2, url: 'https://youtube.com/shorts/XMACUdZ36x0?si=4YIChEy1sIwyhSUh' },
    { id: 3, url: 'https://youtube.com/shorts/Ih4HAUmw8oc?si=NWDTu0h1XKkgbpZ4' },
];

export default function VideoCarousel1() {
    const [current, setCurrent] = useState(0);

    // Function to navigate to the previous slide
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    // Function to navigate to the next slide
    const nextSlide = () => {
        setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    // Helper function to convert the YouTube Shorts URL into an embedded URL
    const getEmbedUrl = (url) => {
        const videoId = url.split('/').pop().split('?')[0]; // Extract video ID from the URL
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`; // Embed URL format
    };

    return (
        <div className='p-5'>
            <p className='text-4xl font-semibold text-center pt-5'>PATIENT TESTIMONIALS</p>
            <div className="flex flex-col items-center space-y-4 pt-10">
                <div className="flex items-center space-x-4 overflow-hidden">
                    {videos.map((video, index) => (
                        <div
                            key={video.id}
                            className={`w-72 h-72 flex-shrink-0 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 ${index === current ? 'scale-100' : 'scale-90 opacity-50'
                                }`}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src={getEmbedUrl(video.url)} // Use the embed URL
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
                        className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
