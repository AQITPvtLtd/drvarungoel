import React from 'react'
import Blog from './Blog'
export const metadata = {
  title: "Cancer Care Insights & Oncology Blogs | Dr. Varun Goel, New Delhi",
  description:
    "Explore expert blogs by Dr. Varun Goel on cancer care, treatment updates, prevention tips, and the latest in oncology research and technology.",
  keywords: [
    "oncology blogs dr varun goel",
    "adcancer care articles delhi",
    "cancer prevention tips blog",
    "oncology research updates delhi",
    "expert cancer blogs india",
    "cancer awareness blog new delhi",
    "treatment insights oncology blog",
    "patient education cancer care",
    "dr varun goel cancer blog",
    "medical oncology updates india",
  ],
};
const page = () => {
  return (
    <div className='dark:bg-white'>
      <Blog />
    </div>
  )
}

export default page