import { Box, Text } from "@chakra-ui/react";
import HeroSlider from "./HeroSlider.client";
import { Slide } from "@/types/slide";

type HeroSectionProps = {
  slides: Slide[];
};

const HeroSection = ({ slides }: HeroSectionProps) => {
  return (
    <Box
      as="section"
      aria-label="Hero principal"
      position="relative"
      minHeight="100vh"
      overflow="hidden"
    >
      {/* Slider de fondo */}
      <HeroSlider slides={slides} />

      {/* Título posicionado encima del slider con zIndex 1 y sin interacciones */}
      {/* Se posiciona encima del slider pero sin bloquear eventos (como los clics del slider)*/}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        px={{ base: 6, lg: 20 }}
        py={{ base: 6, md: 8, lg: 10, xl: 12 }}
        pb={{ base: '140px', md: '200px', lg: '220px', xl: '240px' }}
        display="flex"
        flexDirection="column"
        justifyContent={{ base: "flex-end", md: "center" }}
        zIndex={1}
        pointerEvents="none"
      >
        <Text
          color="white"
          fontSize={{ base: "60px", md: "75px", lg: "90px", xl: "100px" }}
          fontWeight="900"
          lineHeight={{ base: "68px", md: "80px", lg: "95px", xl: "110px" }}
          letterSpacing="0"
          mb={{ base: "52", md: 0 }}
        >
          Tu tribu
          <br />
          te espera
        </Text>
      </Box>
    </Box>
  );
};

export default HeroSection;
