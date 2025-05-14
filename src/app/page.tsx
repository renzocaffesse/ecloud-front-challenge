import NavWrapper from "@/components/Nav/NavWrapper.server";
import HeroSection from "@/components/Hero/HeroSection.server";
import { heroSlides } from "@/data/heroSlides";
import IntroMessageSection from "@/components/IntroMessage";
import HotelsSection from "@/components/HotelsSlider/HotelsSection.server";

const Home = () => {
  return (
    <>
      <NavWrapper />
      <HeroSection slides={heroSlides}/>
      <IntroMessageSection />
      <HotelsSection />
    </>
  )
};

export default Home;