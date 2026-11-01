import ChatSection from "@/component/homepage/chat";
import Footer from "@/component/homepage/footer";
import Navbar from "@/component/navbar/navbar";
import TheRest from "@/component/work/rest";
import WorksSection from "@/component/work/workhero";

export  default function WorksPage() {


    return(
        <>
        <Navbar/>
        <WorksSection/>
        <TheRest/>
        <ChatSection/>
        <Footer/>
        
        </>
    )
}