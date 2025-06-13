// src/theme.ts
import { defineConfig, extendTheme } from "@chakra-ui/react";

const theme = defineConfig({
  breakpoints: {
    sm: { value: "480px" },
    md: { value: "768px" },
    lg: { value: "992px" },
    xl: { value: "1280px" },
    "2xl": { value: "1440px" },
  },
  textStyles: {
    heading: {
      value: {
        fontSize: "48px",
        lineHeight: "56px",
        letterSpacing: "-0.02em",
      },
    },
    body: {
      value: {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "brand.blue",
          color: "white",
          _hover: { bg: "brand.blue", opacity: 0.9 },
        },
      },
    },
  },
  globalCss: {
    "html, body": {
      overflowX: "hidden",
      fontFamily: "body",
      fontSize: "16px",
      lineHeight: "24px",
      color: "rgba(43, 43, 43, 1)",
    },
    "#__next": {
      overflowX: "hidden",
    },
    html: {
      scrollBehavior: "smooth",
    },
  },
});

export default theme;
