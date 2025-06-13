import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "'canada-type-gibson', sans-serif" },
        heading: { value: "'canada-type-gibson', sans-serif" },
      },
      colors: {
        brand: {
          blue: { value: "#3d63a9" },
          green: { value: "#adc22f" },
          magenta: { value: "#aa2275" },
          cyan: { value: "#17a3ab" },
          orange: { value: "#ff8429" },
        },
      },
      breakpoints: {
        sm: { value: "480px" },
        md: { value: "768px" },
        lg: { value: "992px" },
        xl: { value: "1280px" },
        "2xl": { value: "1440px" },
      },
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

const system = createSystem(defaultConfig, config);
export default system;
