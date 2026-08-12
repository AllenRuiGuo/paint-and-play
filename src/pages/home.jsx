import { useState } from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Activities from "../components/Activities/Activities";
import Products from "../components/Products/Products";
import BirthdayParties from "../components/BirthdayParties/BirthdayParties";
import VacationCare from "../components/VacationCare/VacationCare";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
    const [isContactOpen, setIsContactOpen] = useState(false); 
    const openContact = () => { setIsContactOpen(true); }; 
    const closeContact = () => { setIsContactOpen(false); };

    return (
        <>
            <Header onContactClick={openContact}/>
            <Hero />
            <Activities />
            <Products />
            <BirthdayParties onContactClick={openContact}/>
            <VacationCare onContactClick={openContact}/>
            <Contact isOpen={isContactOpen} onClose={closeContact} />
            <Footer />
        </>
    );
}

export default Home;