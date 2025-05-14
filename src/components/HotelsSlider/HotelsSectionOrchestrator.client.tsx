'use client';

import { useBreakpointValue } from '@chakra-ui/react';
import HotelSlider from './HotelSlider.client';
import HotelList from './HotelList.client';

// Decide qué versión mostrar según el viewport
const HotelsSectionOrchestrator = () => {
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;

  return isMobile ? <HotelList /> : <HotelSlider />;
};

export default HotelsSectionOrchestrator;
