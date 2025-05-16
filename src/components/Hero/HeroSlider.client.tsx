'use client';

import { Box, Button, Text, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Slide } from '@/types/slide';
import { keyframes } from '@emotion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Barra animada que muestra el progreso de cada slide activo
const grow = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

type HeroSliderProps = {
  slides: Slide[];
};

const HeroSlider = ({ slides }: HeroSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Hook de Chakra que detecta si estamos en mobile o desktop
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;

  // Devuelve solo las imágenes necesarias según viewport, y evita recalcularlas en cada render
  const currentImages = useMemo(
    () => slides.map(slide => (isMobile ? slide.mobileImage : slide.desktopImage)),
    [slides, isMobile]
  );

  // Arranca el autoplay (y lo reinicia si ya había uno corriendo)
  const startAutoplay = useCallback(() => {
    if (!emblaApi) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
  }, [emblaApi]);

  // Se ejecuta cada vez que cambia el slide
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Inicializa Embla y arranca el autoplay.
  // También reInit para evitar bugs tras hot reloads o cambios de layout (como al cambiar de viewport)
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.reInit();
    onSelect();
    startAutoplay();

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, onSelect, startAutoplay]);

  // Navegación manual y reinicio del autoplay
  const handleClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    startAutoplay();
  };

  const handlePrev = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    startAutoplay();
  };

  const handleNext = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    startAutoplay();
  };

  return (
    <Box position="relative" height="100vh" width="100%" zIndex={0} overflow="hidden">
      {/* Slider viewport */}
      <Box ref={emblaRef} className="embla__viewport" overflow="hidden" height="100%">
        <Box
          className="embla__container"
          display="flex"
          height="100%"
        >
          {currentImages.map((img, index) => (
            <Box
              key={index}
              className="embla__slide"
              flex="0 0 100%"
              backgroundImage={`url(${img})`}
              backgroundSize="cover"
              backgroundPosition="center"
            />
          ))}
        </Box>
      </Box>

      {/* Flechas de navegación */}
      <Button
        display={{ base: 'none', md: 'flex' }}
        aria-label="Slide anterior"
        onClick={handlePrev}
        position="absolute"
        left={4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        bg="rgba(0,0,0,0.5)"
        color="white"
        borderRadius="full"
        minW="unset"
        width="44px"
        height="44px"
        p={0}
        _hover={{ bg: 'rgba(0,0,0,0.7)' }}
      >
        <ChevronLeft size={24} />
      </Button>

      <Button
        display={{ base: 'none', md: 'flex' }}
        aria-label="Slide siguiente"
        onClick={handleNext}
        position="absolute"
        right={4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        bg="rgba(0,0,0,0.5)"
        color="white"
        borderRadius="full"
        minW="unset"
        width="44px"
        height="44px"
        p={0}
        _hover={{ bg: 'rgba(0,0,0,0.7)' }}
      >
        <ChevronRight size={24} />
      </Button>

      {/* Paginador con número, título y barra animada */}
      <Box
        position="absolute"
        bottom={{ base: '24', md: '32', lg: '36', xl: '40' }}
        left={0}
        right={0}
        px={{ base: 6, lg: 20 }}
        zIndex={20}
      >
        <Box display="flex" gap={{ base: '12', md: '16', lg: '20', xl: '24' }}>
          {slides.map((slide, i) => (
            <Box
              key={i}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="4"
              cursor="pointer"
              onClick={() => handleClick(i)}
              minW={{ base: '24px', md: '80px' }}
            >
              <Text fontSize="4" fontWeight="bold" color={i === activeSlide ? 'white' : 'whiteAlpha.600'}>
                {i + 1}
              </Text>
              <Text
                display={{ base: 'none', md: 'block' }}
                fontSize="15px"
                fontWeight="bold"
                color={i === activeSlide ? 'white' : 'whiteAlpha.600'}
                lineHeight="24px"
                whiteSpace="normal"
                maxW="28"
                textAlign="left"
              >
                {slide.title[0]}
                <br />
                {slide.title[1]}
              </Text>
              <Box mt="1" height="2px" width="100%" bg={i === activeSlide ? 'whiteAlpha.400' : 'transparent'} overflow="hidden">
                {i === activeSlide && (
                  <Box key={activeSlide} height="100%" bg="white" animation={`${grow} 3s linear forwards`} />
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

    </Box>
  );
};

export default HeroSlider;
