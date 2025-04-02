"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import { RiLoginBoxLine } from "react-icons/ri";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mediaOpen, setMediaOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md px-4 md:px-6 lg:px-16 py-3 rounded-b-3xl">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo/logo.png"
                        priority
                        className="w-[150px] h-auto md:w-[200px] lg:w-[250px]"
                        alt="Tek Booster Logo"
                        width={250}
                        height={80}
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center space-x-6 text-black text-base font-medium uppercase">
                    <Link href="/" className="hover:text-gray-600 transition">Home</Link>
                    <Link href="/about-us" className="hover:text-gray-600 transition">About</Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center hover:text-gray-600 transition">
                            SERVICES <FiChevronDown className="ml-1" />
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 hidden group-hover:block">
                            <Link href="/services/web-development" className="block px-4 py-2 hover:bg-gray-200">Web Development</Link>
                            <Link href="/services/seo" className="block px-4 py-2 hover:bg-gray-200">SEO</Link>
                            <Link href="/services/marketing" className="block px-4 py-2 hover:bg-gray-200">Marketing</Link>
                        </div>
                    </div>

                    <Link href="/blogs" className="hover:text-gray-600 transition">Blogs</Link>

                    {/* Media Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center hover:text-gray-600 transition">
                            MEDIA <FiChevronDown className="ml-1" />
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 hidden group-hover:block">
                            <Link href="/media/gallery" className="block px-4 py-2 hover:bg-gray-200">Gallery</Link>
                            <Link href="/media/videos" className="block px-4 py-2 hover:bg-gray-200">Videos</Link>
                            <Link href="/media/press" className="block px-4 py-2 hover:bg-gray-200">Press Releases</Link>
                        </div>
                    </div>

                    <Link href="/contact-us" className="hover:text-gray-600 transition">Contact Us</Link>
                </nav>

                {/* Call Now Button */}
                <div className="hidden lg:flex">
                    <Link href="/login">
                        <button className="flex items-center bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
                            <RiLoginBoxLine className="mr-2" />
                            Call Now
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-3xl text-black">
                    <FiMenu />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden flex flex-col bg-white text-black py-4 absolute w-full top-[100%] left-0 transition-transform duration-300 origin-top ${isOpen ? "scale-y-100" : "scale-y-0"}`}>
                <Link href="/" className="py-2 text-lg text-center">Home</Link>
                <Link href="/about-us" className="py-2 text-lg text-center">About</Link>

                {/* Services Submenu */}
                <div className="text-lg text-center">
                    <button onClick={() => setServicesOpen(!servicesOpen)} className="py-2 flex items-center justify-center w-full">
                        Services <FiChevronDown className="ml-1" />
                    </button>
                    {servicesOpen && (
                        <div className="flex flex-col pl-4">
                            <Link href="/services/web-development" className="py-1 text-gray-700">Web Development</Link>
                            <Link href="/services/seo" className="py-1 text-gray-700">SEO</Link>
                            <Link href="/services/marketing" className="py-1 text-gray-700">Marketing</Link>
                        </div>
                    )}
                </div>

                {/* Media Submenu */}
                <div className="text-lg text-center">
                    <button onClick={() => setMediaOpen(!mediaOpen)} className="py-2 flex items-center justify-center w-full">
                        Media <FiChevronDown className="ml-1" />
                    </button>
                    {mediaOpen && (
                        <div className="flex flex-col pl-4">
                            <Link href="/media/gallery" className="py-1 text-gray-700">Gallery</Link>
                            <Link href="/media/videos" className="py-1 text-gray-700">Videos</Link>
                            <Link href="/media/press" className="py-1 text-gray-700">Press Releases</Link>
                        </div>
                    )}
                </div>

                <Link href="/blogs" className="py-2 text-lg text-center">Blogs</Link>
                <Link href="/contact-us" className="py-2 text-lg text-center">Contact Us</Link>

                {/* Call Now Button in Mobile */}
                <Link href="/login">
                    <button className="mt-4 flex items-center justify-center bg-black text-white px-6 py-2 rounded-lg font-semibold w-full">
                        <RiLoginBoxLine className="mr-2" />
                        Call Now
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;