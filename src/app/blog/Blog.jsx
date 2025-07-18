"use client";
import { getBlog } from '@/sevices/getBlog';
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { SlCalender } from "react-icons/sl";
const Blog = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        async function getResult() {
            try {
                const result = await getBlog();
                if (result && result.result) {
                    setBlog(result.result);
                } else {
                    console.log("Invalid API response", result);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error.message);
            }
        }
        getResult();
    }, []);

    return (
        <div className="lg:p-10 overflow-x-clip px-4 mt-[60px]">

            <div className="pt-5 text-center">
                <h1 className="text-3xl font-bold dark:text-black">Read our latest blogs</h1>
            </div>

            {blog.length === 0 ? (
                <p className="text-center text-gray-500">No blogs available.</p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {blog.map((b) => (
                        <Link
                            key={b.id}
                            href={`/blog/${b.id}/${b.url}`}
                            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
                        >
                            <Image
                                src={`/blogs/${b.image}`}
                                width={500}
                                height={300}
                                className="w-full h-[230px] object-fill"
                                alt={b.title || "blog image"}
                            />
                            <div className="p-4">
                                <h1 className="text-lg font-bold dark:text-black">{b.title}</h1>
                                <div className="flex items-center gap-2 text-sm text-gray-600 my-2">
                                    <SlCalender />
                                    <span>{b.date ? moment(b.date).format("MMMM DD, YYYY") : "Unknown Date"}</span>
                                </div>
                                <p className="text-gray-700 line-clamp-3 text-base">{b.short_desc}</p>
                                <Link href={`/blog/${b.id}/${b.url}`}>
                                    <button className="flex items-center mt-4 gap-2 bg-green-600 text-white px-3 py-2 rounded-lg font-semibold text-center transition-all 
                                           border-2 border-transparent hover:border-green-600 hover:text-black hover:bg-white cursor-pointer">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>
            )
            }
        </div>
    )
}

export default Blog