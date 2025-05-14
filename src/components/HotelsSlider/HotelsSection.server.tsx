import { Box, Heading, Text } from '@chakra-ui/react';
import HotelsSectionOrchestrator from './HotelsSectionOrchestrator.client';

// Server Component que estructura toda la sección de hoteles
// Incluye título, subtítulo y orquestador de la vista (slider o lista)
const HotelsSectionWrapper = () => {
  return (
    <Box
      as="section"
      width="100%"
      display="flex"
      justifyContent={{ base: "center", md: "flex-start" }}
      bg="white"
      py={{ base: 16, md: 24 }}
    >
      <Box
        bg="rgba(244, 244, 244, 1)"
        borderRadius="16px"
        px={{ base: 6, md: 20 }}
        py={{ base: 10, md: 20 }}
        display="flex"
        flexDirection="column"
        gap={16}
        width={{ base: '100%', md: '87vw' }}
        overflow="visible"
      >
        <Box display="flex" flexDirection="column" gap={6} px={{ base: 6, md: 0 }}>
          <Heading
            as="h2"
            fontSize="48px"
            lineHeight="56px"
            letterSpacing="-0.02em"
            fontWeight={600}
            color="rgba(43, 43, 43, 1)"
          >
            Hoteles que son hogares
          </Heading>

          <Text
            fontSize="20px"
            lineHeight="32px"
            fontWeight={300}
            color="rgba(43, 43, 43, 1)"
            maxW="600px"
          >
            Siéntete parte de la tribu en un ambiente diseñado para que experimentes el viaje que va a cambiar algo en ti.
          </Text>
        </Box>
        <HotelsSectionOrchestrator />
      </Box>
    </Box>
  );
};

export default HotelsSectionWrapper;
