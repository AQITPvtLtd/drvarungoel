'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";

const videos = [
    { id: 1, url: "https://www.youtube.com/shorts/oWniJzN6goU" },
    { id: 2, url: "https://www.youtube.com/shorts/hK8poavNI4U" },
    { id: 3, url: "https://www.youtube.com/shorts/-iM3pqofufI" },
    { id: 4, url: "https://www.youtube.com/shorts/_I5_ZZvRUhc" },
    { id: 5, url: "https://youtube.com/shorts/CzWOJ53cD20?si=VU2bEHMXKK2nYCoi" },
    { id: 6, url: "https://youtube.com/shorts/XMACUdZ36x0?si=4YIChEy1sIwyhSUh" },
    { id: 7, url: "https://www.youtube.com/shorts/YtrNwkO0_jI" },
    { id: 8, url: "https://youtube.com/shorts/3bIXEFVm58w?si=eT_avcJgfzqKC3WD" },
    { id: 9, url: "https://youtube.com/shorts/8Q49V1xXk48?si=ZY2XUzk8j6w4Xeab" },
    { id: 10, url: "https://youtube.com/shorts/A8kaIqs32qY?si=Vxcs0THrrAqYuZl8" },
    { id: 11, url: "https://youtube.com/shorts/53Dw16OB8NU?si=pGwIhCQeCud5dFW6" },
    { id: 12, url: "https://youtube.com/shorts/z2yUYjmBiU4?si=f39rWqIvt1z5uVIS" },
    { id: 13, url: "https://youtu.be/WQBqHfACzig?si=EzXGVUspyRknO1Gl" },
    { id: 14, url: "https://youtu.be/SeerULYJ2Bs?si=N1IBISjq1zv5iCEF" },
    { id: 15, url: "https://youtu.be/BE0mFeKFNas?si=ux8DLSTYt2LCR82e" },
];

// Animation wrapper for individual video
const AnimatedVideo = ({ src, height, isLargeScreen }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

    return (
        <motion.iframe
            ref={ref}
            className={`w-full ${height || 'h-56'} rounded-lg shadow-lg`}
            src={src}
            frameBorder="0"
            allowFullScreen
            initial={isLargeScreen ? { opacity: 0, y: 80 } : false}
            animate={isLargeScreen && isInView ? { opacity: 1, y: 0 } : {}}
            transition={isLargeScreen ? { duration: 0.8, ease: 'easeOut' } : {}}
        />
    );
};

const Video = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(
        typeof window !== 'undefined' ? window.innerWidth >= 768 : false
    );

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const shorts = videos.filter((video) => video.url.includes("shorts"));
    const longVideos = videos.filter((video) => !video.url.includes("shorts"));

    return (
        <div className='lg:pt-32 pt-24 bg-[#ebfff4]'>
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
                            isLargeScreen={isLargeScreen}
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
                            isLargeScreen={isLargeScreen}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Video;
