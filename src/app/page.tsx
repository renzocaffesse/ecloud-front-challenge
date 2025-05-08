import HeroSection from "@/components/Hero/HeroSection.server";
import NavWrapper from "@/components/Nav/NavWrapper.server";
import { heroSlides } from "@/data/heroSlides";

const Home = () => {
  return (
    <>
      <NavWrapper />
      <HeroSection slides={heroSlides}/>
    </>
  )
};

export default Home;