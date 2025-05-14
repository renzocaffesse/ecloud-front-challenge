'use client';

import { Box, VStack } from '@chakra-ui/react';
import HotelCard from './HotelCard.client';
import { mockHoteles } from '@/data/mockHoteles';

// Vista mobile: muestra todas las HotelCard en lista vertical
const HotelList = () => {
  return (
    <Box
      width="100%"
      maxW="100vw"
      overflowX="hidden"
      display="flex"
      justifyContent="center"
      bg="rgba(244, 244, 244, 1)"
      px={0}
    >
      <VStack
        gap="72px"
        align="center"
        w="full"
      >
        {mockHoteles.map((hotel) => (
          <HotelCard key={hotel.id} {...hotel} />
        ))}
      </VStack>
    </Box>
  );
};

export default HotelList;
