export const metadata = {
  title: "Dr. Varun Goel | Expert Medical Oncologist in New Delhi",
  description:
    "Consult Dr. Varun Goel, a trusted medical oncologist in New Delhi offering personalized cancer care and advanced treatments. Book your appointment now.",
  keywords: [
    "medical oncologist in new delhi",
    "cancer specialist new delhi",
    "oncology doctor delhi",
    "dr varun goel oncologist",
    "best medical oncologist delhi",
    "cancer treatment expert new delhi",
    "personalized oncology care delhi",
    "top oncologist new delhi",
    "chemotherapy specialist delhi",
    "cancer consultation new delhi",
    "medical oncologist in new delhi"
  ],
};

import Serivces from "@/component/homepage/Serivces";
import Banner from "@/component/homepage/Banner";
import Content from "./about/Content";
import VideoLibrary from "@/component/homepage/VideoLibrary";
// import PatientTestimonial from "@/component/homepage/PatientTestimonial";
import Faq from "./about/Faq";

export default function Home() {
  return (
    <div>
      <Banner />
      <Content />
      <Serivces />
      <VideoLibrary />
      {/* <PatientTestimonial /> */}
      <Faq />
    </div>
  );
}
