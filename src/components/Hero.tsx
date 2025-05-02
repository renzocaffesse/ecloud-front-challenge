import { Box, Text } from "@chakra-ui/react";
import HeroSlider from "./HeroSlider";
import { getHeroSlides } from "@/server/getHeroSlides";

const Hero = async () => {
  // SSR: slides del servidor en tiempo de render
  const slides = await getHeroSlides();

  return (
    <Box
      as="section"
      aria-label="Hero principal"
      position="relative"
      minHeight="100vh"
    >
      {/* Título principal del Hero */}
      <Box
        px={{ base: 6, md: 10, lg: 14, xl: 20 }}
        py={{ base: 6, md: 8, lg: 10, xl: 12 }}
        display="flex"
        flexDirection="column"
        justifyContent={{ base: "flex-end", md: "center" }}
        minHeight="100vh"
      >
        <Text
          color="white"
          fontSize={{ base: "60px", md: "75px", lg: "90px", xl: "100px" }}
          fontWeight="900"
          lineHeight={{ base: "68px", md: "80px", lg: "95px", xl: "110px" }}
          letterSpacing="0"
          fontFamily="'canada-type-gibson', sans-serif"
          mb={{ base: "52", md: 0 }}
        >
          Tu tribu
          <br />
          te espera
        </Text>
      </Box>

      {/* Client Component con lógica interactiva (autoplay + click) */}
      <HeroSlider slides={slides} />
    </Box>
  );
};

export default Hero;
