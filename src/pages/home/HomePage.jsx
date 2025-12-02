import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import TrendingNow from "../../components/TrendingNow/TrendingNow.jsx";
import ReasonsToJoin from "../../components/ReasonsToJoin/ReasonsToJoin.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <TrendingNow />
      <ReasonsToJoin />
      <Footer />
    </div>
  );
}

export default HomePage;
