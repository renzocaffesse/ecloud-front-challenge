'use client';

import {
  Box,
  Button,
  Flex,
  Image,
  Link as ChakraLink,
  VStack,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { Calendar, X, Minus, Plus } from 'lucide-react';
import MenuIcon from '@/assets/icons/menu.svg';
import { useState } from 'react';
import NextLink from 'next/link';

const NavMobileClient = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  if (menuOpen) {
    {/* Menú completo cuando está abierto (ocupa toda la pantalla) */}
    return (
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        height="100vh"
        zIndex={30}
        bg="white"
        px={4}
        py={14}
      >
        {/* Header dentro del menú */}
        <Flex justify="space-between" align="center" height="44px">
          <ChakraLink
            as={NextLink}
            href="/"
            display="inline-block"
            _focus={{ outline: 'none', boxShadow: 'none' }}
          >
            <Box
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              px="16px"
              borderRadius="8px"
              width="103px"
              height="44px"
            >
              <Image
                src="/img/logo-nomad.svg"
                alt="Nomad logo"
                maxH="100%"
                maxW="100%"
                objectFit="contain"
              />
            </Box>
          </ChakraLink>

          <Button
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
            variant="ghost"
            p="0"
            minW="unset"
            bg="white"
            borderRadius="8px"
            width="44px"
            height="44px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <X size={24} />
          </Button>
        </Flex>

        {/* Contenido del menú con botón fijo abajo */}
        <Flex direction="column" height="100%" px={2} py={9}>
          <Box flex="1">
            <VStack align="stretch" gap={4}>
              <ChakraLink
                as={NextLink}
                href="#"
                fontWeight="600"
                fontSize="32px"
                lineHeight="40px"
                letterSpacing="-0.02em"
                color="rgba(43, 43, 43, 1)"
                borderBottom="1px solid #E2E8F0"
                pb={4}
                _hover={{ textDecoration: 'none', color: 'blue.600' }}
                _focus={{ outline: 'none', boxShadow: 'none' }}
              >
                Alójate
              </ChakraLink>

              <ChakraLink
                as={NextLink}
                href="#"
                fontWeight="600"
                fontSize="32px"
                lineHeight="40px"
                letterSpacing="-0.02em"
                color="rgba(43, 43, 43, 1)"
                borderBottom="1px solid #E2E8F0"
                pb={4}
                _hover={{ textDecoration: 'none', color: 'blue.600' }}
                _focus={{ outline: 'none', boxShadow: 'none' }}
              >
                Co-Work
              </ChakraLink>

              {/* Submenú de "Experimenta" (acordeón expandible) */}
              <Accordion allowToggle defaultIndex={[0]}>
                <AccordionItem border="none">
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        px={0}
                        fontWeight={600}
                        fontSize="32px"
                        lineHeight="40px"
                        letterSpacing="-0.02em"
                        color="rgba(43, 43, 43, 1)"
                        pb={16}
                        _hover={{ bg: 'transparent', color: 'blue.600' }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Experimenta
                        </Box>
                        <Box>{isExpanded ? <Minus size={24} /> : <Plus size={24} />}</Box>
                      </AccordionButton>

                      <AccordionPanel pl={16} pt={16}>
                        <VStack align="stretch" gap={4}>
                          {['City Host', 'Actividades', 'Gastronomía', 'Eventos'].map((label) => (
                            <ChakraLink
                              key={label}
                              href="#"
                              fontSize="32px"
                              lineHeight="40px"
                              fontWeight={600}
                              letterSpacing="-0.02em"
                              color="rgba(43, 43, 43, 1)"
                              pb={4}
                              _hover={{ textDecoration: 'none', color: 'blue.600' }}
                              _focus={{ outline: 'none', boxShadow: 'none' }}
                            >
                              {label}
                            </ChakraLink>
                          ))}
                        </VStack>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </VStack>
          </Box>

          <Box pt={4}>
            <ChakraLink
              as={NextLink}
              href="#"
              width="100%"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              gap="1.5"
              px="4"
              height="64px"
              borderRadius="8px"
              bg="rgba(41, 79, 139, 1)"
              color="white"
              fontWeight={600}
              fontSize="15px"
              lineHeight="24px"
              letterSpacing="0.04em"
              _hover={{
                bg: 'rgba(30, 65, 120, 1)',
                textDecoration: 'none',
              }}
              _focus={{ outline: 'none', boxShadow: 'none' }}
            >
              <Box h="20px">
                <Calendar height="20px" color="white" />
              </Box>
              Reservar
            </ChakraLink>
          </Box>
        </Flex>
      </Box>
    );
  }

  // Header original cuando el menú no está abierto
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={30}
      px={6}
      py={12}
      bg="transparent"
    >
      <Flex justify="space-between" align="center" height="64px">
        <ChakraLink
          as={NextLink}
          href="/"
          display="inline-block"
          _focus={{ outline: 'none', boxShadow: 'none' }}
        >
          <Box
            bg="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px="16px"
            borderRadius="8px"
            width="103px"
            height="44px"
          >
            <Image
              src="/img/logo-nomad.svg"
              alt="Nomad logo"
              maxH="100%"
              maxW="100%"
              objectFit="contain"
            />
          </Box>
        </ChakraLink>

        <Flex align="center" gap={2}>
          <ChakraLink
            as={NextLink}
            href="#"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            gap="1.5"
            px="2"
            height="44px"
            borderRadius="8px"
            bg="white"
            color="rgba(61, 99, 169, 1)"
            fontWeight={600}
            fontSize="15px"
            lineHeight="24px"
            letterSpacing="0.04em"
            backdropFilter="blur(20px)"
            _hover={{
              bg: 'gray.100',
              textDecoration: 'none',
            }}
            _focus={{ outline: 'none', boxShadow: 'none' }}
          >
            <Box h="20px">
              <Calendar height="20px" />
            </Box>
            Reservar
          </ChakraLink>

          <Button
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(true)}
            variant="ghost"
            p="0"
            minW="unset"
            bg="white"
            borderRadius="8px"
            width="44px"
            height="44px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box w="24px" h="24px">
              <MenuIcon width="100%" height="100%" />
            </Box>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavMobileClient;
