import Hero from "@/component/homepage/hero";
import Navbar from "../component/navbar/navbar";
import Gallery from "@/component/homepage/gallery";
import SelectedWorks from "@/component/homepage/selectedworks";
import Capabilities from "@/component/homepage/Capabilities";
import ChatSection from "@/component/homepage/chat";
import Footer from "@/component/homepage/footer";
import AnimatedTextStrips from "@/component/homepage/strip";
import DeveloperSection from "@/component/homepage/developer";
import FatCatBanner from "@/component/homepage/fatcat";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Hero/> */}
      <Gallery />
      <FatCatBanner/>

      <DeveloperSection />
      <SelectedWorks/>
      <AnimatedTextStrips />
      {/* <Capabilities/> */}

      <ChatSection/>
      <Footer />
    </div>
  );
}
