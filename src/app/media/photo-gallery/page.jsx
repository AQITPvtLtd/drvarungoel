import React from 'react'
import Gallery from './Gallery'
export const metadata = {
    title: "Photo Gallery | Dr. Varun Goel – Oncology Practice in New Delhi",
    description:
        "Browse the photo gallery of Dr. Varun Goel’s oncology practice in New Delhi — featuring patient care moments, events, and clinic highlights.",
    keywords: [
        "dr varun goel photo gallery",
        "oncology clinic photos delhi",
        "cancer care centre images delhi",
        "medical practice gallery new delhi",
        "cancer awareness events photos",
        "oncology conference images delhi",
        "patient care gallery dr varun goel",
        "cancer specialist clinic photos",
        "photo gallery medical oncologist delhi",
        "clinic visuals dr varun goel",
    ],
};
const page = () => {
    return (
        <div className='dark:bg-white'>
            <Gallery />
        </div>
    )
}

export default page