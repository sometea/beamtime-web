module.exports = {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    purge: {
      content: ["_site/**/*.html"],
      options: {
        whitelist: [],
      },
    },
    theme: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
    variants: {},
    plugins: [],
  };