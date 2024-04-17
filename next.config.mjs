// next.config.mjs
export default {
    future: {
      webpack5: true,
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
  };
  