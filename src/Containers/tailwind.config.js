/* eslint-disable @typescript-eslint/no-var-requires */
const {plugin} = require('twrnc');

export const theme = {
  screens: {
    sm: '380px',
    md: '420px',
    lg: '680px',
  },
  extend: {
    spacing: {
      518: '518px',
    },
    colors: {
      primary: '#D8383A',
      'gray-black': '#010101',
      'grey-black': '#010101',
      'sonic-silver': '#747474',
      success: '#2D9CDB',
      info: '#2D9CDB',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        // 😎 similar to `@apply`
      });
    }),
  ],
};