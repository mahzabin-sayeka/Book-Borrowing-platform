import Image from "next/image";
import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import FeaturedBooks from "@/components/FeaturedBooks";

import Stats from "@/components/Stats";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div>
      <Banner />
     
      <Marquee />
      
      <FeaturedBooks />
       
       {/* extra section from mine */}
      <Stats />
      <Newsletter />
    </div>
  );
}
