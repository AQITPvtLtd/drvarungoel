import Faq from "@/component/homepage/Faq";
import VideoCarousel from "./media/videos/Video";
import VideoCarousel1 from "./media/videos/Video1";
import Serivces from "@/component/homepage/Serivces";

export default function Home() {
  return (
    <div>
      <Serivces />
      <VideoCarousel />
      <VideoCarousel1 />
      <Faq />
    </div>
  );
}
