import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { Reserva } from '@/types/reserva';

type ReservaCardProps = {
  reserva: Reserva;
  isLast?: boolean;
};

const ReservaCard = ({ reserva, isLast }: ReservaCardProps) => {
  return (
    <Flex
      maxW="628px"
      gap={{ base: 8, md: 6 }}
      direction={{ base: 'column', md: 'row' }}
      borderBottom={isLast ? 'none' : '1px solid'} // Elimina el borde en la última card
      borderColor="gray.200"
      pb={{ base: 8 }}
    >
      {/* Imagen del hotel */}
      <Box flexShrink={0}>
        <Image
          src={reserva.image}
          alt={reserva.title}
          borderRadius="8px"
          objectFit="cover"
          width={{ base: '100%', md: '250px' }}
          height={{ base: '200px', md: '262px' }}
        />
      </Box>

      {/* Contenido textual */}
      <VStack align="start" gap={{ base: 6, md: 4 }} flex={1} justifyContent="space-around">
        {/* Título como imagen si está disponible */}
        <Box>
          {reserva.titleImg ? (
            <Image src={reserva.titleImg} alt={reserva.title} />
          ) : (
            <Text
              fontSize="lg"
              fontWeight="bold"
              letterSpacing="wider"
              textTransform="uppercase"
            >
              {reserva.title}
            </Text>
          )}

          <Text
            mt={4}
            fontSize="15px"
            fontWeight={400}
            lineHeight="24px"
            letterSpacing="0.04em"
            color="rgba(43, 43, 43, 1)"
          >
            {reserva.subtitle}
          </Text>
        </Box>

        {/* Amenities separados por punto */}
        <Text
          fontSize="13px"
          fontWeight={400}
          lineHeight="20px"
          letterSpacing="0.03em"
          color="rgba(103, 103, 103, 1)"
        >
          {reserva.amenities.join(' · ')}
        </Text>

        {/* Precio + botón de acción */}
        <Flex direction="column" align="start" gap={6} width="100%">
          <Text
            fontSize="15px"
            fontWeight={400}
            lineHeight="24px"
            letterSpacing="0.04em"
            color="rgba(43, 43, 43, 1)"
          >
            Desde{' '}
            <Box
              as="span"
              fontWeight={900}
              letterSpacing="0.04em"
              lineHeight="24px"
            >
              ${reserva.price.toLocaleString('es-AR')}/Noche
            </Box>
          </Text>

          <Button
            width={{ base: '100%', md: 'auto' }} // Full width solo en mobile
            bg="rgba(61, 99, 169, 1)"
            color="white"
            size="md"
            h="48px"
            px="12px"
            borderRadius="8px"
            fontWeight="semibold"
            _hover={{ bg: 'rgba(50, 81, 140, 1)' }}
          >
            Reservar Ahora
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ReservaCard;
