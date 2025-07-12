import React from 'react'
import Certificate from './Certificate'
export const metadata = {
  title: "Certificates | Dr. Varun Goel, Medical Oncologist New Delhi",
  description:
    "View the professional certificates and credentials of Dr. Varun Goel, a trusted medical oncologist in New Delhi committed to excellence in cancer care.",
  keywords: [
    "dr varun goel certificates",
    "medical oncologist credentials delhi",
    "oncology certifications new delhi",
    "cancer specialist certificates delhi",
    "dr varun goel qualifications",
    "certified oncologist delhi",
    "cancer care credentials new delhi",
    "oncology training certificates delhi",
    "professional oncologist certifications",
    "oncology expertise proof delhi",
  ],
};
const page = () => {
  return (
    <div className='dark:bg-white'>
      <Certificate />
    </div>
  )
}

export default page