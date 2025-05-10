'use client';

import {
  Box,
  Flex,
  Image,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Calendar } from 'lucide-react';
import NextLink from 'next/link';
import ExperimentaDropdown from './ExperimentaDropdown.client';

type Props = {
  onOpenDrawer: () => void;
};

const NavDesktopClient = ({ onOpenDrawer }: Props) => {
  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      width="100%"
    >
      {/* Logo */}
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
          px={{ md: '24px' }}
          borderRadius={{ md: '16px' }}
          width={{ md: '142.67px' }}
          height={{ md: '64px' }}
          boxShadow="0px 12px 32px rgba(0, 0, 0, 0.25)"
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

      <Flex
        align="center"
        bg="white"
        borderRadius="16px"
        px={2}
        py={3}
        height="64px"
        gap={8}
        boxShadow="0px 12px 32px rgba(0, 0, 0, 0.25)"
      >
        {/* Links principales del nav */}
        <Flex
          as="nav"
          gap={{ base: 6, lg: 8 }}
          align="center"
          color="rgba(43, 43, 43, 1)"
          fontWeight="400"
          fontSize="15px"
          lineHeight="24px"
          letterSpacing="0.04em"
        >
          <ChakraLink
            href="#"
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _hover={{ textDecoration: 'none', color: 'blue.600' }}
            pl={5}
          >
            Alojate
          </ChakraLink>
          <ChakraLink
            href="#"
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _hover={{ textDecoration: 'none', color: 'blue.600' }}
            minWidth="64px"
          >
            Co-Work
          </ChakraLink>

          <ExperimentaDropdown />

          <ChakraLink
            href="#"
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _hover={{ textDecoration: 'none', color: 'blue.600' }}
          >
            Únete
          </ChakraLink>
        </Flex>

        {/* Botón "Reservar" */}
        <ChakraLink
          as={NextLink}
          href="#"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          gap="1.5"
          px="4"
          height="48px"
          width="100%"
          borderRadius="8px"
          bg="rgba(61, 99, 169, 1)"
          color="white"
          fontWeight={600}
          fontSize="15px"
          lineHeight="24px"
          letterSpacing="0.04em"
          backdropFilter="blur(20px)"
          onClick={onOpenDrawer}
          _hover={{
            bg: 'rgba(41, 79, 139, 1)',
            textDecoration: 'none',
          }}
          _focus={{ outline: 'none', boxShadow: 'none' }}
        >
          <Box h="20px">
            <Calendar height="20px" />
          </Box>
          Reservar
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

export default NavDesktopClient;
