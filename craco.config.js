// craco.config.js
const autoprefixer = require("autoprefixer");

module.exports = {
  style: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
};
