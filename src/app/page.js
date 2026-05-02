import Image from "next/image";
import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import FeaturedBooks from "@/components/FeaturedBooks";

export default function Home() {
  return (
    <div>
      <Banner />
     
      <Marquee />
      
      <FeaturedBooks />
    </div>
  );
}
