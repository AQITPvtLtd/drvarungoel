"use client";
import data from '@/data/treatment';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { motion } from "framer-motion";

const listItemVariant = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
};

const TreatmentData = ({ id }) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const content = data.find((a) => a.id == id);

    if (!content) {
        return <div className="text-center py-10 text-red-600">No treatment data found.</div>;
    }

    return (
        <div className='dark:bg-white'>
            <div className="mx-auto px-4 py-8 pt-28">
                <div className="flex flex-col items-center">

                    {/* Image Section */}
                    <div className="w-full max-w-8xl relative">
                        <div className="relative">
                            <Image
                                src={content.img}
                                width={1000}
                                height={1000}
                                className="w-full h-[250px] object-cover"
                                alt="Treatment"
                            />
                            <div className="absolute inset-0 bg-[#21bee5b4] opacity-70 z-10"></div>
                            <motion.h1
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-white font-serif text-center lg:text-6xl text-4xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center"
                            >
                                Treatments
                            </motion.h1>
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 w-full max-w-7xl">

                        {/* Content Section */}
                        <div className="relative bg-white px-6 py-8 shadow-xl rounded-2xl text-center col-span-8">
                            <h1 className="font-extrabold text-2xl md:text-3xl text-[#129246] underline mb-4">
                                {content.title}
                            </h1>
                            <div className="text-lg text-gray-700 space-y-4 text-left">
                                {Array.isArray(content.desc) ? (
                                    content.desc.map((item, index) => (
                                        <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))
                                ) : (
                                    <div dangerouslySetInnerHTML={{ __html: content.desc }} />
                                )}
                            </div>
                        </div>

                        {/* Sidebar Section */}
                        <div className="col-span-4 mt-8 lg:mt-0 shadow-2xl px-4 py-4 rounded-lg h-fit">
                            <h2 className="text-2xl font-semibold mb-4 dark:text-black" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Other Treatments
                            </h2>
                            <ul className="space-y-4">
                                {data.map((a, index) => (
                                    isLargeScreen ? (
                                        <motion.li
                                            key={a.id}
                                            variants={listItemVariant}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="list-none"
                                        >
                                            <Link href={`/treatments/${a.id}`}>
                                                <span className="cursor-pointer text-blue-500 hover:underline flex gap-2">
                                                    <FaArrowRightFromBracket className="mt-1" />
                                                    {a.title}
                                                </span>
                                            </Link>
                                        </motion.li>
                                    ) : (
                                        <li key={a.id}>
                                            <Link href={`/treatments/${a.id}`}>
                                                <span className="cursor-pointer text-blue-500 hover:underline flex gap-2">
                                                    <FaArrowRightFromBracket className="mt-1" />
                                                    {a.title}
                                                </span>
                                            </Link>
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreatmentData;
