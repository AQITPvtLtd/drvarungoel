"use client";

import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";

const videos = [
    { id: 1, url: "https://youtube.com/shorts/CzWOJ53cD20?si=VU2bEHMXKK2nYCoi" },
    { id: 2, url: "https://youtube.com/shorts/XMACUdZ36x0?si=4YIChEy1sIwyhSUh" },
    { id: 3, url: "https://youtube.com/shorts/Ih4HAUmw8oc?si=NWDTu0h1XKkgbpZ4" },
    { id: 4, url: "https://youtu.be/WQBqHfACzig?si=EzXGVUspyRknO1Gl" },
    { id: 5, url: "https://youtu.be/SeerULYJ2Bs?si=N1IBISjq1zv5iCEF" },
];
const Video = () => {
    const shorts = videos.filter((video) => video.url.includes("shorts"));
    const longVideos = videos.filter((video) => !video.url.includes("shorts"));

    return (
        <div className='pt-28 dark:bg-white'>
            <div className="w-full max-w-8xl relative">
                <div className="relative">
                    <Image
                        src="/video/bgvideo.avif"
                        width={1000}
                        height={1000}
                        className="w-full h-[250px] object-cover"
                        alt="Contact Image"
                    />
                    <div className="absolute inset-0 bg-[#21bee5b4] opacity-70 z-10"></div>
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center"
                    >
                        Our Videos
                    </motion.h1>
                </div>
            </div>
            <div className="max-w-6xl mx-auto p-6">

                {/* Shorts Section */}
                <h2 className="text-2xl font-bold text-center mb-4 dark:text-black">Short Videos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {shorts.map((video) => (
                        <iframe
                            key={video.id}
                            className="w-full h-56 rounded-lg shadow-lg"
                            src={video.url.replace("/shorts/", "/embed/")}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    ))}
                </div>

                {/* Long Videos Section */}
                <h2 className="text-2xl font-bold text-center mt-8 mb-4 dark:text-black">Long Videos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    {longVideos.map((video) => (
                        <iframe
                            key={video.id}
                            className="w-full h-64 rounded-lg shadow-lg"
                            src={video.url.replace("youtu.be/", "www.youtube.com/embed/")}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Video