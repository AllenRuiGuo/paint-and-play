import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Activities from "../components/Activities/Activities";
import Products from "../components/Products/Products";
import BirthdayParties from "../components/BirthdayParties/BirthdayParties";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Activities />
            <Products />
            <BirthdayParties />
        </>
    );
}

export default Home;