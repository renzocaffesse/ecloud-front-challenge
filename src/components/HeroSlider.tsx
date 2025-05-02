"use client";

import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Slide } from "@/types/slide";
import { keyframes } from "@emotion/react";

// Animación para la barrita que indica progreso
const grow = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

type HeroSliderProps = {
  slides: Slide[];
};

const HeroSlider = ({ slides }: HeroSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Avanza automáticamente cada 3 segundos
  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [activeSlide, slides.length]);

  // Cambia el fondo según el viewport
  const backgroundImage = useBreakpointValue({
    base: slides[activeSlide].mobileImage,
    md: slides[activeSlide].desktopImage,
  });

  return (
    <>
      {/* Fondo dinámico */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        zIndex={-1}
      />

      {/* Paginador (números + texto + barra animada) */}
      <Box position="relative" pointerEvents="auto">
        <Box
          display="flex"
          gap="14"
          position="absolute"
          bottom={{ base: "28", md: "32", lg: "36", xl: "40" }}
          left={{ base: "6", md: "10", lg: "14", xl: "20" }}
          zIndex="1"
        >
          {slides.map((slide, i) => (
            <Box
              key={i}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="4"
              cursor="pointer"
              onClick={() => setActiveSlide(i)}
              minW={{ base: "24px", md: "80px" }}
            >
              <Text
                fontSize="4"
                fontWeight="bold"
                color={i === activeSlide ? "white" : "whiteAlpha.600"}
              >
                {i + 1}
              </Text>
              <Text
                display={{ base: "none", md: "block" }}
                fontSize="15px"
                fontWeight="bold"
                color={i === activeSlide ? "white" : "whiteAlpha.600"}
                lineHeight="24px"
                whiteSpace="normal"
                maxW="28"
                textAlign="left"
              >
                {slide.title[0]}
                <br />
                {slide.title[1]}
              </Text>

              {/* Barra animada de progreso */}
              <Box
                mt="1"
                height="2px"
                width="100%"
                bg={i === activeSlide ? "whiteAlpha.400" : "transparent"}
                overflow="hidden"
              >
                {i === activeSlide && (
                  <Box
                    key={activeSlide}
                    height="100%"
                    bg="white"
                    animation={`${grow} 3s linear forwards`}
                  />
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default HeroSlider;
