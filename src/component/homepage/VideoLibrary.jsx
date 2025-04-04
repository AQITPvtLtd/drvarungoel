"use client";
import React from 'react'
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const videos = [
    { id: 1, url: 'https://youtu.be/WQBqHfACzig?si=EzXGVUspyRknO1Gl' },
    { id: 2, url: 'https://youtu.be/SeerULYJ2Bs?si=N1IBISjq1zv5iCEF' },
    
];
const VideoLibrary = () => {
    // Middle video se start hoga
    const [current, setCurrent] = useState(0);

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
        <div><div className="p-5 bg-white">
            <p className="text-4xl font-semibold text-center pt-5 dark:text-black">OUR VIDEO LIBRARY</p>
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
        </div></div>
    )
}

export default VideoLibrary