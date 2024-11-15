import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactUs from "../components/ContactUs";
import PartnerSection from "../components/PartnerSection";

const Contact = () => {

    return (
        <>
            <Header />
            <div className="flex">
                <ContactUs />
                <ContactForm />
            </div>
            <PartnerSection />
            <Footer />
            
        </>
    )
}

export default Contact;