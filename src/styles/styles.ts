import { createStitches } from '@stitches/react';

const config = createStitches({
  theme: {
    colors: {
      green700: '#00875F',
      green400: '#00B37E',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#C4C4CC',
      gray100: '#E1E1E6',

      white: '#fff',
    },
    fontSizes: {
      md: '1.125rem', // 18px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      '2xl': '2rem', // 32px
    },
  },
});

export const {
  css,
  getCssText,
  styled,
  globalCss,
  createTheme,
  theme,
  keyframes,
} = config;
