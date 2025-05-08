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
  const containerRef = useRef<HTMLDivElement>(null);

  // Cierra el dropdown si clickeás afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Box
      position="relative"
      ref={containerRef}
      onMouseEnter={() => setIsOpen(true)}
    >
      <Button
        variant="ghost"
        fontWeight="medium"
        fontSize="15px"
        _hover={{ color: 'blue.600', bg: 'transparent' }}
        onClick={() => setIsOpen((prev) => !prev)}
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
            <ChakraLink
              href="#"
              _focus={{ outline: 'none', boxShadow: 'none' }}
              _hover={{ textDecoration: 'none', color: 'blue.600' }}
              _active={{ textDecoration: 'none' }}
            >
              City Host
            </ChakraLink>
            <ChakraLink
              href="#"
              _focus={{ outline: 'none', boxShadow: 'none' }}
              _hover={{ textDecoration: 'none', color: 'blue.600' }}
              _active={{ textDecoration: 'none' }}
            >
              Actividades
            </ChakraLink>
            <ChakraLink
              href="#"
              _focus={{ outline: 'none', boxShadow: 'none' }}
              _hover={{ textDecoration: 'none', color: 'blue.600' }}
              _active={{ textDecoration: 'none' }}
            >
              Gastronomía
            </ChakraLink>
            <ChakraLink
              href="#"
              _focus={{ outline: 'none', boxShadow: 'none' }}
              _hover={{ textDecoration: 'none', color: 'blue.600' }}
              _active={{ textDecoration: 'none' }}
            >
              Eventos
            </ChakraLink>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default ExperimentaDropdown;
