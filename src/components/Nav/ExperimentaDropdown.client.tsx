'use client';

import {
  Box,
  Button,
  Flex,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const ExperimentaDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLockedOpen, setIsLockedOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cierra si se hace click fuera del dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsLockedOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Hover solo abre si no está bloqueado
  const handleMouseEnter = () => {
    if (!isLockedOpen) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isLockedOpen) setIsOpen(false);
  };

  // Click bloquea o desbloquea el estado
  const handleClick = () => {
    if (isLockedOpen) {
      setIsLockedOpen(false);
      setIsOpen(false);
    } else {
      setIsLockedOpen(true);
      setIsOpen(true);
    }
  };

  return (
    <Box
      position="relative"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        variant="ghost"
        fontWeight="medium"
        fontSize="15px"
        _hover={{ color: 'blue.600', bg: 'transparent' }}
        onClick={handleClick}
      >
        Experimenta
      </Button>

      {/* Dropdown con las opciones de "Experimenta" */}
      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          mt={8}
          left="50%"
          transform="translateX(-50%)"
          bg="white"
          borderRadius="12px"
          boxShadow="lg"
          w="146px"
          px={4}
          py={6}
          zIndex={20}
        >
          <Flex direction="column" gap={6} align="center">
            <ChakraLink href="#">City Host</ChakraLink>
            <ChakraLink href="#">Actividades</ChakraLink>
            <ChakraLink href="#">Gastronomía</ChakraLink>
            <ChakraLink href="#">Eventos</ChakraLink>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default ExperimentaDropdown;
