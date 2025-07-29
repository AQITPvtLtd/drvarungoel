'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from "framer-motion";

const videos = [
    { id: 1, url: "https://www.youtube.com/shorts/oWniJzN6goU" },
    { id: 2, url: "https://www.youtube.com/shorts/hK8poavNI4U" },
    { id: 3, url: "https://www.youtube.com/shorts/-iM3pqofufI" },
    { id: 4, url: "https://www.youtube.com/shorts/_I5_ZZvRUhc" },
    { id: 5, url: "https://youtube.com/shorts/CzWOJ53cD20?si=VU2bEHMXKK2nYCoi" },
    { id: 6, url: "https://youtube.com/shorts/XMACUdZ36x0?si=4YIChEy1sIwyhSUh" },
    { id: 7, url: "https://www.youtube.com/shorts/YtrNwkO0_jI" },
    // { id: 7, url: "https://youtube.com/shorts/Ih4HAUmw8oc?si=NWDTu0h1XKkgbpZ4" },
    { id: 8, url: "https://youtu.be/WQBqHfACzig?si=EzXGVUspyRknO1Gl" },
    { id: 9, url: "https://youtu.be/SeerULYJ2Bs?si=N1IBISjq1zv5iCEF" },
];

// Animation wrapper for individual video
const AnimatedVideo = ({ src, height }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

    return (
        <motion.iframe
            ref={ref}
            className={`w-full ${height || 'h-56'} rounded-lg shadow-lg`}
            src={src}
            frameBorder="0"
            allowFullScreen
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        />
    );
};


const Video = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const shorts = videos.filter((video) => video.url.includes("shorts"));
    const longVideos = videos.filter((video) => !video.url.includes("shorts"));

    return (
        <div className='lg:pt-32 pt-24 bg-[#ebfff4]'>
            {/* <div className="w-full max-w-8xl relative">
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
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                        Our Videos
                    </motion.h1>
                </div>
            </div> */}

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
                Our Videos
            </h2>

            <div className="max-w-6xl mx-auto p-6">
                {/* Short Videos Heading */}
                <h2 className="text-2xl font-bold text-center mb-4 dark:text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Short Videos
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {shorts.map((video) => (
                        <AnimatedVideo
                            key={video.id}
                            src={video.url.replace("/shorts/", "/embed/")}
                        />
                    ))}
                </div>

                {/* Long Videos Heading */}
                <h2 className="text-2xl font-bold text-center mt-8 mb-4 dark:text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Long Videos
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    {longVideos.map((video) => (
                        <AnimatedVideo
                            key={video.id}
                            src={video.url.replace("youtu.be/", "www.youtube.com/embed/")}
                            height="h-64"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Video;
