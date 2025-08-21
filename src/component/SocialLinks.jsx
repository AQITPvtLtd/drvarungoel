"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function SocialLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-1/2 right-0 transform -translate-y-1/2
          flex flex-col gap-4 justify-center items-center p-4 bg-gray-200 
          z-40 rounded-l-xl transition-transform duration-500
          lg:translate-x-0   /* large screen par hamesha dikhna chahiye */
          ${isOpen ? "translate-x-0" : "translate-x-[120%] lg:translate-x-0"}`}
      >
        {/* facebook */}
        <div className="group relative transition-transform duration-500 hover:scale-125">
          <Link
            href="https://www.facebook.com/goelvarundoc/"
            role="button"
            target="_blank"
          >
            <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#1877f2]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Instagram */}
        <div className="group relative w-max cursor-pointer transition-transform duration-500 hover:scale-125">
          <Link
            href="https://www.instagram.com/goelvarundoc/"
            role="button"
            target="_blank"
          >
            <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#c13584]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </Link>
        </div>

        {/* LinkedIn */}
        <div className="group relative w-max cursor-pointer transition-transform duration-500 hover:scale-125">
          <Link
            href="https://www.linkedin.com/in/varun-goel-829a0b46/"
            role="button"
            target="_blank"
          >
            <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#0C359E]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Youtube */}
        <div className="group relative w-max cursor-pointer transition-transform duration-500 hover:scale-125">
          <Link
            href="https://www.youtube.com/@drvarungoel"
            role="button"
            target="_blank"
          >
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Toggle Button (sirf mobile par dikhna chahiye) */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-red-600 text-white p-3 rounded-full shadow-lg lg:hidden"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Toggle Button (sirf mobile par) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 
            bg-green-600 pl-1 pt-1 pb-1 rounded-l-xl shadow-lg z-50 lg:hidden"
        >
        <Image src="/sidebar/toggel.png" width={48} height={48} alt="" />
        </button>
      )}
    </>
  );
}