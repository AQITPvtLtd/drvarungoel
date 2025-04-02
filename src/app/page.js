import Faq from "@/component/homepage/Faq";
import VideoCarousel from "./media/videos/Video";
import VideoCarousel1 from "./media/videos/Video1";
import Serivces from "@/component/homepage/Serivces";
import Banner from "@/component/homepage/Banner";
import Content from "./about/Content";

export default function Home() {
  return (
    <div>
      <Banner />
      <Content />
      <Serivces />
      <VideoCarousel />
      <VideoCarousel1 />
      <Faq />
    </div>
  );
}
