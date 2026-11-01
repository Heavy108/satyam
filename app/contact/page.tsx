import Contact from "@/component/contact/contactform";
import ContactSection from "@/component/contact/hero";
import Footer from "@/component/homepage/footer";
import Navbar from "@/component/navbar/navbar";

export default function ContactPage() {

    return(
        <>
        <Navbar/>
<ContactSection/>
<Contact/>
        <Footer/>
        </>
    )
}