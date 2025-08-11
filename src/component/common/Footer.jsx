import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
// import { IoIosCall } from "react-icons/io";

const Footer = () => {
    return (
        <div>
            <div className="bg-[#ebfff4] shadow-md py-6 px-6">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b dark:border-b-black pb-4 gap-4">
                    <Link href="/" className="w-fit">
                        <Image
                            src="/logo/logo.png"
                            priority
                            className="w-[150px] md:w-[200px] lg:w-[250px]"
                            alt="Dr. Varun Goel Logo"
                            width={250}
                            height={80}
                        />
                    </Link>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="flex items-start space-x-2">
                            <FaPhoneAlt className="text-gray-600 text-lg mt-1" />
                            <div>
                                <p className="text-gray-500 text-sm">Give us a call</p>
                                <Link href="tel:+919560538081" className="text-black font-medium">
                                    +91 95605 38081
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <MdEmail className="text-gray-600 text-xl mt-1" />
                            <div>
                                <p className="text-gray-500 text-sm">Send Message</p>
                                <Link href="mailto:docvarungoel@gmail.com" className="text-black font-medium">
                                    docvarungoel@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6 text-sm text-gray-700">
                    {/* Quick Links */}
                    <div className="flex flex-col items-start">
                        <p className="font-semibold text-xl mb-3 text-black">Quick Links</p>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-[#129246]">About</Link></li>
                            <li><Link href="/treatments" className="hover:text-[#129246]">Treatments</Link></li>
                            <li><Link href="/blog" className="hover:text-[#129246]">Blogs</Link></li>
                            <li><Link href="/contact" className="hover:text-[#129246]">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col items-start">
                        <p className="font-semibold text-xl mb-3 text-black">Services</p>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-[#129246]">Cancer Diagnosis & Staging</Link></li>
                            <li><Link href="/" className="hover:text-[#129246]">Systemic Anti-Cancer Therapy</Link></li>
                            <li><Link href="/" className="hover:text-[#129246]">Personalized & Precision Medicine</Link></li>
                            <li><Link href="/" className="hover:text-[#129246]">Prognostication & Risk Assessment</Link></li>
                            <li><Link href="/" className="hover:text-[#129246]">Supportive & Palliative Care</Link></li>
                            <li><Link href="/" className="hover:text-[#129246]">Clinical Trials & Research</Link></li>
                        </ul>
                    </div>

                    {/* Media */}
                    <div className="flex flex-col items-start">
                        <p className="font-semibold text-xl mb-3 text-black">Media</p>
                        <ul className="space-y-2">
                            <li><Link href="/media/photo-gallery" className="hover:text-[#129246]">Photo Gallery</Link></li>
                            <li><Link href="/media/certificate" className="hover:text-[#129246]">Certificates</Link></li>
                            <li><Link href="/media/videos" className="hover:text-[#129246]">Videos</Link></li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-start space-y-2">
                        <p className="font-semibold text-xl mb-3 text-black">Location</p>

                        {/* <p className="text-base leading-relaxed flex gap-1">
                            <IoIosCall className='mt-1' />
                            <Link href="tel:+91 95605 38081">
                                +91 95605 38081
                            </Link>
                        </p>

                        <p className="text-base leading-relaxed flex gap-1">
                            <MdEmail className='mt-1.5' />
                            <Link href="mailto:docvarungoel@gmail.com">
                                docvarungoel@gmail.com
                            </Link>
                        </p> */}

                        <p className="text-base leading-relaxed flex gap-1">
                            <FaLocationDot className='mt-1.5' />
                            <Link href={`https://g.co/kgs/bQRmREn`}>
                                Rajiv Gandhi Cancer Institute,<br />
                                Sector - 5, Rohini, Delhi - 110085
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-start space-x-6 mt-6">
                    <Link href="https://www.instagram.com/goelvarundoc/" target='__blank' className="text-pink-500 text-2xl hover:opacity-80"><FaInstagram /></Link>
                    <Link href="https://www.facebook.com/goelvarundoc/" target='__blank' className="text-blue-600 text-2xl hover:opacity-80"><FaFacebookF /></Link>
                    <Link href="https://www.linkedin.com/in/varun-goel-829a0b46/" target='__blank' className="text-blue-700 text-2xl hover:opacity-80"><FaLinkedinIn /></Link>
                    <Link href="https://www.youtube.com/@drvarungoel" target='__blank' className="text-red-600 text-2xl hover:opacity-80"><FaYoutube /></Link>
                </div>
            </div>
            <p className='text-center py-2 font-semibold'>Design & Developed By <Link href='https://tekbooster.com/' target='__blank'> Tek Booster <br className='lg:hidden block' /> (Digital Marketing Company) </Link></p>
        </div>
    );
};

export default Footer;
