"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
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
                    <Link href="/about" className="hover:text-gray-600 transition">About</Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center hover:text-gray-600 transition">
                            TREATMENTS <FiChevronDown className="ml-1" />
                        </button>
                        <div className="absolute left-0 -mt-0 w-48 px-2 py-2 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 group-hover:flex flex-col">
                            <Link href="/services/web-development" className="block px-4 py-2 hover:bg-gray-200 hover:rounded-xl text-sm">Web Development</Link>
                            <Link href="/services/seo" className="block px-4 py-2 hover:bg-gray-200 hover:rounded-xl text-sm">SEO</Link>
                            <Link href="/services/marketing" className="block px-4 py-2 hover:bg-gray-200 hover:rounded-xl text-sm">Marketing</Link>
                        </div>
                    </div>

                    <Link href="/blogs" className="hover:text-gray-600 transition">Blogs</Link>

                    {/* Media Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center hover:text-gray-600 transition">
                            MEDIA <FiChevronDown className="ml-1" />
                        </button>
                        <div className="absolute left-0 -mt-0 w-48 px-2 py-2 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 group-hover:flex flex-col">
                            <Link href="/media/photo-gallery" className="block px-4 py-2 hover:bg-gray-200 hover:rounded-xl text-sm">Photo Gallery</Link>
                            <Link href="/media/certificates" className="block px-4 py-2 hover:bg-gray-200 hover:rounded-xl text-sm">Certificates</Link>
                            <Link href="/media/videos" className="block px-4 py-2 hover:bg-gray-200 hover:rounded-xl text-sm">Videos</Link>
                        </div>
                    </div>

                    <Link href="/contact" className="hover:text-gray-600 transition">Contact Us</Link>
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
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-md p-4 absolute top-[70px] left-0 w-full z-50 flex flex-col space-y-4">
                    <Link href="/" className="text-black" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" className="text-black" onClick={() => setIsOpen(false)}>About</Link>

                    <div>
                        <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center w-full text-left text-black">
                            TREATMENTS <FiChevronDown className="ml-1" />
                        </button>
                        {servicesOpen && (
                            <div className="flex flex-col pl-4">
                                <Link href="/services/web-development" className="text-black" onClick={() => setIsOpen(false)}>Web Development</Link>
                                <Link href="/services/seo" className="text-black" onClick={() => setIsOpen(false)}>SEO</Link>
                                <Link href="/services/marketing" className="text-black" onClick={() => setIsOpen(false)}>Marketing</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/blogs" className="text-black" onClick={() => setIsOpen(false)}>Blogs</Link>

                    <div>
                        <button onClick={() => setMediaOpen(!mediaOpen)} className="flex items-center w-full text-left text-black">
                            MEDIA <FiChevronDown className="ml-1" />
                        </button>
                        {mediaOpen && (
                            <div className="flex flex-col pl-4">
                                <Link href="/media/photo-gallery" className="text-black" onClick={() => setIsOpen(false)}>Photo Gallery</Link>
                                <Link href="/media/certificates" className="text-black" onClick={() => setIsOpen(false)}>Certificates</Link>
                                <Link href="/media/videos" className="text-black" onClick={() => setIsOpen(false)}>Videos</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/contact" className="text-black" onClick={() => setIsOpen(false)}>Contact Us</Link>
                </div>
            )}
        </header>
    );
};

export default Header;