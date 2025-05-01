'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const videos = [
    { id: 1, url: "https://youtube.com/shorts/CzWOJ53cD20?si=VU2bEHMXKK2nYCoi" },
    { id: 2, url: "https://youtube.com/shorts/XMACUdZ36x0?si=4YIChEy1sIwyhSUh" },
    { id: 3, url: "https://youtube.com/shorts/Ih4HAUmw8oc?si=NWDTu0h1XKkgbpZ4" },
    { id: 4, url: "https://youtu.be/WQBqHfACzig?si=EzXGVUspyRknO1Gl" },
    { id: 5, url: "https://youtu.be/SeerULYJ2Bs?si=N1IBISjq1zv5iCEF" },
];

const headingVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: "easeInOut"
        }
    }
};

const containerVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4, // smoother stagger
        }
    }
};

const videoVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.0,
            ease: "easeInOut"
        }
    }
};


const Video = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 768); // md size ke upar
        };

        checkScreenSize(); // Initial check
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const shorts = videos.filter((video) => video.url.includes("shorts"));
    const longVideos = videos.filter((video) => !video.url.includes("shorts"));

    return (
        <div className='lg:pt-32 pt-24 bg-[#ebfff4]'>
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
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                        Our Videos
                    </motion.h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto p-6">
                {/* Shorts Section */}
                {isLargeScreen ? (
                    <motion.h2
                        className="text-2xl font-bold text-center mb-4 dark:text-black"
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        Short Videos
                    </motion.h2>
                ) : (
                    <h2 className="text-2xl font-bold text-center mb-4 dark:text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        Short Videos
                    </h2>
                )}

                {isLargeScreen ? (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        {shorts.map((video) => (
                            <motion.iframe
                                key={video.id}
                                className="w-full h-56 rounded-lg shadow-lg"
                                src={video.url.replace("/shorts/", "/embed/")}
                                frameBorder="0"
                                allowFullScreen
                                variants={videoVariant}
                            />
                        ))}
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {shorts.map((video) => (
                            <iframe
                                key={video.id}
                                className="w-full h-56 rounded-lg shadow-lg"
                                src={video.url.replace("/shorts/", "/embed/")}
                                frameBorder="0"
                                allowFullScreen
                            />
                        ))}
                    </div>
                )}

                {/* Long Videos Section */}
                {isLargeScreen ? (
                    <motion.h2
                        className="text-2xl font-bold text-center mt-8 mb-4 dark:text-black"
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        Long Videos
                    </motion.h2>
                ) : (
                    <h2 className="text-2xl font-bold text-center mt-8 mb-4 dark:text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        Long Videos
                    </h2>
                )}

                {isLargeScreen ? (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {longVideos.map((video) => (
                            <motion.iframe
                                key={video.id}
                                className="w-full h-64 rounded-lg shadow-lg"
                                src={video.url.replace("youtu.be/", "www.youtube.com/embed/")}
                                frameBorder="0"
                                allowFullScreen
                                variants={videoVariant}
                            />
                        ))}
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                        {longVideos.map((video) => (
                            <iframe
                                key={video.id}
                                className="w-full h-64 rounded-lg shadow-lg"
                                src={video.url.replace("youtu.be/", "www.youtube.com/embed/")}
                                frameBorder="0"
                                allowFullScreen
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default Video;
