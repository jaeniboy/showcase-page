import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    theme: {
      extend: {
        fontFamily: {
          'caveat': ['Caveat', ...defaultTheme.fontFamily.sans]
        },
      },
    },
  };
