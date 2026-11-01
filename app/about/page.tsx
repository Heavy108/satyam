import ExperienceSection from "@/component/about/experience";
import AboutSection from "@/component/about/hero";
import ThisIsMe from "@/component/about/thisisme";
import ChatSection from "@/component/homepage/chat";
import Footer from "@/component/homepage/footer";
import Navbar from "@/component/navbar/navbar";

export default function About() {
    return(
        <>
        <Navbar/>
        <AboutSection/>
        <ThisIsMe/>
        <ExperienceSection/>

        <ChatSection/>
        <Footer/>
        
        </>
    )
}