import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import TrendingNow from "../../components/TrendingNow/TrendingNow.jsx";
import ReasonsToJoin from "../../components/ReasonsToJoin/ReasonsToJoin.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import EmailSignup from "../../components/EmailSignup/EmailSignup";
import Footer from "../../components/Footer/Footer.jsx";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <TrendingNow />
      <ReasonsToJoin />
      <FAQ />
      <EmailSignup />
      <Footer />
    </div>
  );
}

export default HomePage;
