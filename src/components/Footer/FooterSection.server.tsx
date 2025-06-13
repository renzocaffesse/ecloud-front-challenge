import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Link,
  VStack,
  HStack,
} from "@chakra-ui/react";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";

// Footer completo, renderizado desde el servidor
const FooterSection = () => {
  const contacts = [
    { label: "T: (054) 1234567", href: "tel:+540541234567" },
    { label: "E: info@nomadperu.com.pe", href: "mailto:info@nomadperu.com.pe" },
  ];

  const navLinks = ["Alójate", "Co-work", "Experimenta", "Únete", "Inversores"];

  return (
    <Box as="footer" width="100%" bg="white">
      {/* Separador de 5 colores */}
      <Flex width="100%" px={{ base: 6, md: 20 }} height="1px">
        <Box flex="1" bg="brand.blue" />
        <Box flex="1" bg="brand.green" />
        <Box flex="1" bg="brand.magenta" />
        <Box flex="1" bg="brand.cyan" />
        <Box flex="1" bg="brand.orange" />
      </Flex>

      {/* Contenido principal del Footer */}
      <Box px={{ base: 6, md: 20 }} py={20}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="stretch"
          alignItems={{ base: "center", md: "flex-start" }}
          gap={{ base: 20, md: 4 }}
        >
          {/* Columna izquierda */}
          <VStack
            flex={2}
            h="100%"
            align={{ base: "center", md: "flex-start" }}
          >
            <Box
              maxW="320px"
              w="100%"
              h="100%"
              display="flex"
              flexDirection="column"
              textAlign={{ base: "center", md: "left" }}
              alignItems={{ base: "center", md: "flex-start" }}
              justifyContent="space-between"
            >
              <Image
                src="/img/logo-nomad.svg"
                alt="Nomad logo"
                mb={8}
                width="120px"
                height="auto"
              />
              <Text
                fontSize="15px"
                lineHeight="24px"
                letterSpacing="0.04em"
                color="rgba(43, 43, 43, 1)"
                mb={8}
              >
                Here we should have a few words about what and who the company
                is. This should serve well for SEO purposes.
              </Text>
              <HStack gap={{ base: 8, md: 16 }} mt="auto">
                <Link href="#" aria-label="Youtube">
                  <YoutubeIcon />
                </Link>
                <Link href="#" aria-label="Facebook">
                  <FacebookIcon />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <TwitterIcon />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <InstagramIcon />
                </Link>
              </HStack>
            </Box>
          </VStack>

          {/* Columna centro */}
          <VStack
            flex={1.5}
            h="100%"
            align={{ base: "center", md: "flex-start" }}
          >
            <Box
              w="100%"
              h="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              textAlign={{ base: "center", md: "left" }}
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Heading
                fontSize="24px"
                lineHeight="32px"
                fontWeight="600"
                pb={4}
                color="rgba(43, 43, 43, 1)"
              >
                Contacta con nosotros
              </Heading>

              {contacts.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  fontSize="17px"
                  lineHeight="28px"
                  letterSpacing="0.04em"
                  color="rgba(43, 43, 43, 1)"
                >
                  {c.label}
                </Link>
              ))}
            </Box>
          </VStack>

          {/* Columna derecha: oculta en mobile */}
          <VStack flex={1} h="100%" display={{ base: "none", md: "flex" }}>
            <Box
              maxW="160px"
              w="100%"
              h="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              textAlign="left"
              alignItems="flex-start"
            >
              {navLinks.map((label) => (
                <Link
                  key={label}
                  color="rgba(43, 43, 43, 1)"
                  fontSize="17px"
                  lineHeight="28px"
                  letterSpacing="0.04em"
                >
                  {label}
                </Link>
              ))}
            </Box>
          </VStack>
        </Flex>
      </Box>

      {/* Sección final de agradecimiento */}
      <Box
        width="100%"
        bg="brand.blue"
        py={{ base: 12, md: 16 }}
        px={{ base: 6, md: 0 }}
        textAlign="center"
      >
        <Text
          color="white"
          fontWeight={300}
          fontSize={{ base: "32px", md: "72px" }}
          lineHeight={{ base: "40px", md: "98px" }}
          letterSpacing={{ base: "-0.02em", md: "-0.04em" }}
        >
          Gracias por scrollear :)
        </Text>
      </Box>
    </Box>
  );
};

export default FooterSection;
