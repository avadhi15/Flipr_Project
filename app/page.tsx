import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
//import NotYourAverageRealtor from "./components/WhyUs";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import AboutProjects from "./components/AboutProjects";
import HappyClients from "./components/HappyClients";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyUs />
      <AboutProjects/>
      <HappyClients/>
      <Footer/>
    </>
  );
}
