module.exports = {
  ci: {
    collect: {
      url: ['https://www.darwinsocialnoise.com/'],
      startServerCommand: 'rails server -e production',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};

