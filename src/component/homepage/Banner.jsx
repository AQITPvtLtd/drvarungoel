import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="w-full flex justify-center items-center mt-12 ">
            <Image
                src="/banner/newbanner.jpeg"
                width={1200}
                height={400}
                className="w-full h-auto"
                alt="Banner"
            />
        </div>
    );
}

export default Banner;