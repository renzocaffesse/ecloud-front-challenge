import NavOrchestrator from "@/components/Nav/NavOrchestrator.client";
import HeroSection from "@/components/Hero/HeroSection.server";
import { heroSlides } from "@/data/heroSlides";
import IntroMessageSection from "@/components/IntroMessage";
import HotelsSection from "@/components/HotelsSlider/HotelsSection.server";
import FooterSection from "@/components/Footer";

const Home = () => {
  return (
    <>
      <NavOrchestrator />
      <HeroSection slides={heroSlides}/>
      <IntroMessageSection />
      <HotelsSection />
      <FooterSection />
    </>
  )
};

export default Home;