'use client';

import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerContent,
  DrawerTitle,
  Box,
  Button,
  Icon,
} from '@chakra-ui/react';
import { X } from 'lucide-react';
import ReservaCard from './ReservaCard.server';
import { mockReservas } from '@/data/mockReservas';

type Props = {
  open: boolean;
  onOpenChange: (details: { open: boolean }) => void;
};

const ReservaDrawer = ({ open, onOpenChange }: Props) => {
  return (
    <DrawerRoot open={open} onOpenChange={onOpenChange} placement="end">
      <DrawerBackdrop />
      <DrawerContent
        maxWidth={{ base: '100%', md: '708px' }}
        bg="white"
        p={{ base: 6, md: 8 }}
        py={{ base: "54px", md: 8 }}
        overflowY="auto"
        position="fixed"
        top={{ base: 0, md: 8, lg: 32 }}
        right={{ base: 0, md: 8, lg: 24 }}
        boxShadow="0px 18px 32px rgba(0, 0, 0, 0.1)"
      >
        {/* Header con título y botón de cerrar */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={8}
        >
          <DrawerTitle
            fontSize={{ base: "32px", md: "48px" }}
            fontWeight="semibold"
            lineHeight={{ base: "40px", md: "56px" }}
            letterSpacing="-0.02em"
            color="rgba(43, 43, 43, 1)"
          >
            Reservar
          </DrawerTitle>

          <Button
            aria-label="Cerrar panel"
            onClick={() => onOpenChange({ open: false })}
            variant="ghost"
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={X} boxSize={6} />
          </Button>
        </Box>

        {/* Divider superior simulado con border */}
        <Box
          borderTop="1px solid"
          borderColor="gray.200"
          mb={8}
        />

        {/* Cards de reservas generadas desde mock */}
        <Box display="flex" flexDirection="column" gap={8}>
          {mockReservas.map((reserva, index) => (
            <ReservaCard
              key={reserva.id}
              reserva={reserva}
              isLast={index === mockReservas.length - 1}
            />
          ))}
        </Box>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default ReservaDrawer;
