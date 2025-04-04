import Faq from "@/component/homepage/Faq";
import Serivces from "@/component/homepage/Serivces";
import Banner from "@/component/homepage/Banner";
import Content from "./about/Content";
import VideoLibrary from "@/component/homepage/VideoLibrary";
import PatientTestimonial from "@/component/homepage/PatientTestimonial";

export default function Home() {
  return (
    <div>
      <Banner />
      <Content />
      <Serivces />
      <VideoLibrary />
      <PatientTestimonial />
      <Faq />
    </div>
  );
}
