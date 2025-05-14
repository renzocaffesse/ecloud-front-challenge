'use client';

import { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import HotelCard from './HotelCard.client';
import { mockHoteles } from '@/data/mockHoteles';

const AUTOPLAY_INTERVAL = 4000;

// Slider horizontal visible solo en desktop, con autoplay y snap manual
const HotelsSlider = () => {
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    containScroll: false,
    skipSnaps: false,
  });

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);

      autoplayRef.current = setInterval(() => {
        const currentIndex = emblaApi.selectedScrollSnap();
        const totalSlides = mockHoteles.length;

        if (currentIndex < totalSlides - 1) {
          emblaApi.scrollTo(currentIndex + 1);
        } else {
          emblaApi.scrollTo(0);
        }
      }, AUTOPLAY_INTERVAL);
    };

    autoplay();
    emblaApi.on('reInit', autoplay);
    emblaApi.on('pointerDown', () => clearInterval(autoplayRef.current!));
    emblaApi.on('pointerUp', autoplay);

    return () => clearInterval(autoplayRef.current!);
  }, [emblaApi]);

  if (isMobile) return null;

  return (
    <Box
      ref={emblaRef}
      w="100vw"
      overflowX="hidden"
      position="relative"
    >
      <Box
        className="embla__container"
        display="flex"
        gap="132px"
        pl="132px"
        pr="84px"
        scrollSnapType="x mandatory"
        maxW="100vw"
      >
        {mockHoteles.map((hotel) => (
          <Box
            key={hotel.id}
            className="embla__slide"
            flex="0 0 auto"
            width="50vw"
            scrollSnapAlign="start"
            overflow="visible"
          >
            <HotelCard {...hotel} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HotelsSlider;
