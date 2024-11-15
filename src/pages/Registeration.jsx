import RegistrationForm from "../components/RegisterForm"
import Header from "../components/Header"
import UpperLeftLogistic from "../components/UpperLeftLogistic"
import MidLogisticSection from "../components/MidLogisticSection"
import TransporterSection from "../components/TransporterSection"
import ClientTestimonials from "../components/ClientTestimonials"
import Footer from "../components/Footer"

const Registeration = () => {

    return (
        <>
        <Header />
        <div className="flex">
            <UpperLeftLogistic />
            <RegistrationForm />
        </div>

        <MidLogisticSection />
        <TransporterSection />
        <ClientTestimonials />
        <Footer />
        </>
    )
}


export default Registeration;