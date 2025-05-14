import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "'canada-type-gibson', sans-serif" },
        heading: { value: "'canada-type-gibson', sans-serif" },
      },
      breakpoints: {
        sm: { value: '480px' },
        md: { value: '768px' },
        lg: { value: '992px' },
        xl: { value: '1280px' },
        '2xl': { value: '1440px' },
      },
    },
  },
  globalCss: {
    'html, body': {
      overflowX: 'hidden',
      fontFamily: 'body',
      fontSize: '16px',
      lineHeight: '24px',
      color: 'rgba(43, 43, 43, 1)',
    },
    '#__next': {
      overflowX: 'hidden',
    },
    html: {
      scrollBehavior: 'smooth',
    },
  },  
});

const system = createSystem(defaultConfig, config);
export default system;
