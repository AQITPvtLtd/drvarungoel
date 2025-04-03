import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-white shadow-md py-6 px-6">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b pb-4">
                <Link href="/">
                    <Image
                        src="/logo/logo.png"
                        priority
                        className="w-[150px] md:w-[200px] lg:w-[250px]"
                        alt="Dr. Varun Goel Logo"
                        width={250}
                        height={80}
                    />
                </Link>
                <div className="flex items-center space-x-6 mt-4 md:mt-0">
                    <div className="flex items-center space-x-2">
                        <FaPhoneAlt className="text-gray-600 text-lg" />
                        <div>
                            <p className="text-gray-500 text-sm">Give us a call</p>
                            <Link href="tel:+919560538081" className="text-black font-medium">
                                +91 95605 38081
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MdEmail className="text-gray-600 text-xl" />
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm text-gray-700">
                {/* Quick Links */}
                <div>
                    <p className="font-semibold text-lg mb-2">Quick Links</p>
                    <ul className="space-y-1">
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/blogs">Blogs</Link></li>
                        <li><Link href="/media">Media</Link></li>
                    </ul>
                </div>
                {/* Services */}
                <div>
                    <p className="font-semibold text-lg mb-2">Services</p>
                    <ul className="space-y-1">
                        <li><Link href="/services/radiation-therapy">Radiation Therapy</Link></li>
                        <li><Link href="/services/targeted-therapy">Targeted Therapy</Link></li>
                        <li><Link href="/services/immunotherapy">Immunotherapy</Link></li>
                        <li><Link href="/services/chemotherapy">Chemotherapy</Link></li>
                        <li><Link href="/services/robotic-therapy">Robotic Therapy</Link></li>
                        <li><Link href="/services/car-t-cell-therapy">CAR-T Cell Therapy</Link></li>
                    </ul>
                </div>
                {/* Location */}
                <div>
                    <p className="font-semibold text-lg mb-2">Location</p>
                    <p>Rajiv Gandhi Cancer Institute,<br /> Sector - 5, Rohini, Delhi - 110085</p>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
                <Link href="https://instagram.com" className="text-pink-500 text-xl"><FaInstagram /></Link>
                <Link href="https://facebook.com" className="text-blue-600 text-xl"><FaFacebookF /></Link>
                <Link href="https://linkedin.com" className="text-blue-700 text-xl"><FaLinkedinIn /></Link>
                <Link href="https://youtube.com" className="text-red-600 text-xl"><FaYoutube /></Link>
            </div>
        </div>
    );
};

export default Footer;