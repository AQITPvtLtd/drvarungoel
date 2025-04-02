import React from 'react';
import VisionAndmission from './Visionandmission';
import Image from 'next/image';
import Content from './Content';
import Faq from './Faq';
import Statistics from '@/component/homepage/Statistics';

const About = () => {
    return (
        <div className=''>
            <div className="px-4 md:px-8 lg:mt-20">
                <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-6'>
                    <div className='md:col-span-5 flex justify-center mt-5'>
                        <Image
                            src="/about/Dr-Varun-Goel.png"
                            width={500}
                            height={500}
                            className="w-full max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] rounded-lg shadow-lg"
                            alt="About Us"
                        />
                    </div>
                    <div className='md:col-span-7 flex justify-center'>
                        <div className="bg-[#0f8f43] p-4 w-full max-w-xl md:max-w-2xl lg:max-w-3xl">
                            <div className="bg-white p-4">
                                <div className="bg-[#1ebee6] p-3 lg:p-6">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-3 text-white" style={{ fontFamily: "Roboto Slab, serif" }}>
                                        Dr. Varun Goel
                                    </h2>
                                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white" style={{ fontFamily: "Roboto Slab, serif" }}>
                                        Sr. Consultant & Principal Coordinator
                                    </h3>
                                    <div className='flex gap-2'>
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2 text-white" style={{ fontFamily: "Roboto Slab, serif" }}>
                                            Day Care Services, Medical Oncology
                                        </h2>
                                    </div>
                                    <div className="border-[#102c3c] border-b-2 my-2"></div>
                                    <p className="text-sm sm:text-base md:text-lg text-white">
                                        Dr. Varun Goel earned his post – graduation from Maulana Azad Medical College, Delhi. He completed his DNB (Medical Oncology) from RGCIRC, Delhi.Dr. Goel carries a rich experience in the management of both hematological & non hematological malignancies (breast, lung and other solid tumors), as well as Bone Marrow Transplantation. He has also cleared “European Certified Medical Oncologist” exam conducted by ESMO and MRCP- UK certification examination of Medical Oncology.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-5'>
                    <Content />
                </div>
                <Statistics />
                <VisionAndmission />
            </div>
            <Faq />
        </div>
    );
}

export default About;