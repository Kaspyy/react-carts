module.exports = {
  // use jsdom instead of node
  testEnvironment: 'jsdom',

  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
