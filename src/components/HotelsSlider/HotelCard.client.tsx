'use client';

import { Box, Image, Flex, useBreakpointValue } from '@chakra-ui/react';
import { HotelCardProps } from '@/types/hotel';
import { useState } from 'react';

import PinIcon from '@/assets/icons/pin.svg';
import BedIcon from '@/assets/icons/bed.svg';
import GastroIcon from '@/assets/icons/gastro.svg';
import ActivitiesIcon from '@/assets/icons/activities.svg';

const amenitiesMap = {
  bed: BedIcon,
  gastro: GastroIcon,
  activities: ActivitiesIcon,
};

// Componente visual de cada tarjeta de hotel, con hover en desktop
// En mobile se usa imagen específica y no se muestra info adicional
// titleImg se usa porque no contamos con la fuente original del diseño
const HotelCard = ({
  image,
  imageMobile,
  titleImg,
  location,
  description,
  amenities,
  color,
}: HotelCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  const showFullInfo = !isMobile && isHovered;

  return (
    <Box
      role="group"
      position="relative"
      width={{ base: '100%', md: '50vw' }}
      maxW={{ base: '327px', md: 'none' }}
      overflow="visible"
      cursor={isMobile ? 'default' : 'pointer'}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {/* Imagen desktop/mobile */}
      <Box borderRadius="24px" overflow="visible" width="100%" height="100%">
        <Image
          src={isMobile ? imageMobile : image}
          alt="Imagen del hotel"
          objectFit="cover"
          width="100%"
          height="100%"
          borderRadius="24px"
          display="block"
        />
      </Box>

      {/* Box de descripción */}
      <Flex
        direction="column"
        justify="space-between"
        position="absolute"
        bottom={{ base: '24px', md: '48px' }}
        left={{ base: '16px', md: 'auto' }}
        right={{ base: 'auto', md: '-48px' }}
        px={{ base: '16px', md: '24px' }}
        py={{ base: '16px', md: '24px' }}
        borderRadius={{ base: '12px', md: '16px' }}
        width={{ base: '295px', md: isHovered ? '368px' : '356px' }}
        height={{ base: '108px', md: isHovered ? '295px' : '134px' }}
        bg={color}
        color="white"
        boxShadow="0px 12px 32px rgba(0, 0, 0, 0.25)"
        zIndex={3}
        transition="all 0.3s ease"
        overflow="hidden"
        style={{
          backdropFilter: showFullInfo ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: showFullInfo ? 'blur(20px)' : 'none',
        }}
      >
        <Flex align="center" gap={2} mb={{ base: 1, md: 2 }}>
          <Box w="16px" h="16px">
            <PinIcon width="100%" height="100%" />
          </Box>
          <Box fontSize="14px" fontWeight={400}>
            {location}
          </Box>
        </Flex>

        <Box width="140px" mb={2}>
          <Image
            src={titleImg}
            alt="Título del hotel"
            width="100%"
            height="auto"
          />
        </Box>

        {/* Extra info solo en desktop hover */}
        {showFullInfo && (
          <Box>
            <Box fontSize="14px" lineHeight="20px" mb={2}>
              {description}
            </Box>

            <Box
              height="2px"
              width="100px"
              bg="rgba(177, 255, 168, 0.5)"
              borderRadius="full"
              mb={3}
            />

            <Box fontSize="12px" fontWeight={400} opacity={0.7} mb={2}>
              Servicios de este hotel
            </Box>

            <Flex gap={3}>
              {amenities.map((key, idx) => {
                const Icon = amenitiesMap[key as keyof typeof amenitiesMap];
                return (
                  <Box w="24px" h="24px" key={idx}>
                    <Icon width="100%" height="100%" />
                  </Box>
                );
              })}
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default HotelCard;
