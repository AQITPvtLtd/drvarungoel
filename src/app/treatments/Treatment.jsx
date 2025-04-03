import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import data from '@/data/treatment'
const Treatment = () => {
    return (
        <div>
            <h1 className='text-center font-semibold text-2xl lg:text-3xl dark:text-black pt-5'>Our Services</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5'>
                {data.map((item) => (
                    <div key={item.id} className="px-2">
                        <div >
                            <div className="bg-white my-5 h-[420px] md:h-[400px] rounded-lg shadow-lg flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105">
                                <div className="h-[250px] md:h-[230px] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt="service icon"
                                        width={400}
                                        height={400}
                                        className="w-full object-cover h-[250px]"
                                    />
                                </div>
                                <div className="p-4 text-center flex-grow">
                                    <h2 className="text-xl font-bold text-black" style={{ fontFamily: "Roboto Slab, serif" }}>{item.title}</h2>
                                </div>
                                <div className="px-4 text-center flex-grow">
                                    <h2 className="text-md text-black line-clamp-2">
                                        {item.desc ? (
                                            <span dangerouslySetInnerHTML={{ __html: item.desc }} />
                                        ) : (
                                            "Loading..."
                                        )}
                                    </h2>
                                </div>

                                <div className="p-4">
                                    <Link
                                        href={`services/${item.id}`}
                                        className="px-4 py-2 bg-[#ef1a76] text-white text-lg rounded-lg block text-center transition-all 
                                           border-2 border-transparent hover:border-[#ef1a76] hover:text-black hover:bg-white"
                                    >
                                        Know More
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Treatment