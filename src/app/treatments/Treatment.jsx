"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import data from '@/data/treatment'
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const Treatment = () => {
    return (
        <div className='pt-28 dark:bg-white'>
            <div className="w-full max-w-8xl relative">
                <div className="relative">
                    <Image
                        src="/treatments/img4.jpg"
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
                        Our Treatments
                    </motion.h1>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-5'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10 pr-0 md:pr-[55px]'>
                    {data.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0 }} // changed from 0.2 to 0
                            transition={{ duration: 0.6, delay: index * 0.2 }} // increased duration for smoother feel
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >

                            <div className="h-[250px] md:h-[230px] overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt="service icon"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-5 text-center flex flex-col justify-between h-[150px]">
                                <h2 className="text-xl font-bold text-black">{item.title}</h2>
                                <p className="text-md text-black line-clamp-2">
                                    {item.desc ? (
                                        <span dangerouslySetInnerHTML={{ __html: item.desc }} />
                                    ) : (
                                        "Loading..."
                                    )}
                                </p>
                            </div>
                            <div className="px-5 pb-5">
                                <Link
                                    href={`treatments/${item.url}`}
                                    className="w-full block px-4 py-2 bg-[#0a283f] text-white text-lg rounded-lg text-center transition-all 
                                           border-2 border-transparent hover:border-[#22c1e9] hover:text-black hover:bg-white"
                                >
                                    Know More
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Treatment
