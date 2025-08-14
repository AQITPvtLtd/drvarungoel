import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className="hidden sm:flex gap-4 fixed top-0 mt-[200px] right-0 flex-col justify-center items-center p-4 bg-gray-200 z-40 rounded-l-xl">
            {/* Instagram */}
            <div className="group relative w-max cursor-pointer transition-transform duration-500 bg-green-600 hover:bg-green-800 rounded-full p-3 hover:scale-125">
                <Link
                    href="https://www.instagram.com/goelvarundoc/"
                    role="button"
                    target="_blank"
                >
                    <FaInstagram />
                </Link>
            </div>
            
            {/* facebook */}
            <div className="group relative w-max cursor-pointer bg-green-600 hover:bg-green-800 rounded-full p-3 transition-transform duration-500 hover:scale-125">
                <Link
                    href="https://www.facebook.com/goelvarundoc/"
                    role="button"
                    target="_blank"
                >
                    <FaFacebookF />
                </Link>
            </div>
            {/* LinkedIn */}
            <div className="group relative w-max cursor-pointer bg-green-600 hover:bg-green-800 rounded-full p-3 transition-transform duration-500 hover:scale-125">
                <Link
                    href="https://www.linkedin.com/in/varun-goel-829a0b46/"
                    role="button"
                    target="_blank"
                >
                    <FaLinkedinIn />
                </Link>
            </div>

            {/* <!-- Youtube --> */}
            <div className="group relative w-max cursor-pointer bg-green-600 hover:bg-green-800 rounded-full p-3 transition-transform duration-500 hover:scale-125">
                <Link
                    href="https://www.youtube.com/@drvarungoel"
                    role="button"
                    target="_blank"
                >
                    <FaYoutube />
                </Link>
            </div>
        </div>
    );
};

export default SocialLinks;
